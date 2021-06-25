import os
import time
import json
import xmltodict
from github import Github

FILEPATH = os.environ["FILEPATH"]
USERNAME = os.environ["USERNAME"]
TOKEN = os.environ["TOKEN"]
REPOSITORY = os.environ["REPOSITORY"]
BASE_URL = os.environ["BASE_URL"]


def disqus_to_github():
    g = Github(TOKEN)
    repo = g.get_repo(REPOSITORY)
    issues = repo.get_issues()

    with open(FILEPATH) as fd:
        data = xmltodict.parse(fd.read())

    data = data["disqus"]

    threads = [dict(t) for t in data["thread"]]
    posts = sorted((dict(p)
                   for p in data["post"]), key=lambda d: d["createdAt"])

    # only keep threads with comments
    twc_ids = set(p["thread"]["@dsq:id"] for p in posts)
    threads = {t["@dsq:id"]: t for t in threads if t["@dsq:id"] in twc_ids}

    # associate the thread to each post
    for post in posts:
        post["thread"] = threads[post["thread"]["@dsq:id"]]

    # associate the related GitHub issue to each thread
    # warning: the issues need to exist before you run this script!
    # write a "test" comment in each one of your post with comments
    # to make Utterances create the initial issues
    for thread in threads.values():
        for issue in issues:
            if issue.title == thread["link"].replace(BASE_URL, ""):
                thread["issue"] = issue
                break

    # iterate on posts and create issues comments accordingly
    for i, post in enumerate(posts, 1):
        name = post["author"]["name"]
        user = post["author"].get("username")
        mention = " @" + \
            user if user and not user.startswith("disqus_") else ""
        date = post["createdAt"]
        message = post["message"]
        issue = post["thread"]["issue"]
        body = f"*Original date: {date}*\n\n{message}"
        # don't add original author when it's you
        if user != USERNAME:
            body = f"*Original author:* **{name}{mention}**  \n{body}"
        print(
            f"Posting {i}/{len(posts)} to issue {issue.number}    \r", end="")
        issue.create_comment(body)
        # prevent hitting rate limits!
        time.sleep(0.5)

    print()


if __name__ == "__main__":
    disqus_to_github()
