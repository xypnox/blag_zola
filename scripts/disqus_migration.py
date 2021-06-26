import os
import json
import xmltodict

FILEPATH = "comments.xml"


def disqus_to_markdown():
    with open(FILEPATH) as fd:
        data = xmltodict.parse(fd.read())

    data = data["disqus"]

    threads = [dict(t) for t in data["thread"]]
    posts = sorted((dict(p)
                   for p in data["post"]), key=lambda d: d["createdAt"])

    # only keep threads with comments
    twc_ids = set(p["thread"]["@dsq:id"] for p in posts)
    threads = {t["@dsq:id"]: t for t in threads if t["@dsq:id"] in twc_ids}

    titles = {}
    # We get the post metadata and the link for the title
    # We index it with @dsq:id as comments are also associated with it
    # You can change the f string in message for a different markdown output
    for key in threads:
        title = threads[key]["@dsq:id"]
        [title_string, post_link] = [threads[key]['title'], threads[key]['link']]

        message = f"## [{title_string}]({post_link})"

        if title not in titles:
            titles[title] = message
        else:
            titles[title] = message

    # exit()

    comments = {}
    # associate the comments to each post's dsq:id
    for post in posts:
        dsq_id = dict(post['thread'])['@dsq:id']

        if post["message"]:
            message = "#### **" + dict(post['author'])['name'] + \
                "** @" + dict(post['author'])['username'] + \
                "\n\nPosted on: _" + post['createdAt'] + "_ " + \
                "\n\n" + post["message"] + "\n"

            if dsq_id not in comments:
                comments[dsq_id] = [message]
            else:
                comments[dsq_id].append(message)

    for key in comments:
        # Print the comments in markdown
        print(f"\n\n---\n\n{titles[key]} \n")

        # Join all comments for a post
        msg = "\n".join(comments[key])

        print(msg)


if __name__ == "__main__":
    disqus_to_markdown()
