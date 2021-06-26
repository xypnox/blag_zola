import os
import time
import json
import pprint
import xmltodict
from github import Github

FILEPATH = "comments.xml"

pp = pprint.PrettyPrinter(indent=4)


def disqus_to_github():
    with open(FILEPATH) as fd:
        data = xmltodict.parse(fd.read())

    data = data["disqus"]

    threads = [dict(t) for t in data["thread"]]
    # pp.pprint(threads)
    posts = sorted((dict(p)
                   for p in data["post"]), key=lambda d: d["createdAt"])

    # only keep threads with comments
    twc_ids = set(p["thread"]["@dsq:id"] for p in posts)
    threads = {t["@dsq:id"]: t for t in threads if t["@dsq:id"] in twc_ids}
    # pp.pprint(threads)

    titles = {}
    for key in threads:
        # pp.pprint(dict(key['thread'])['@dsq:id'])
        # pp.pprint(key)
        # exit()
        title = threads[key]["@dsq:id"]
        message = f"## [{threads[key]['title']}]({threads[key]['link']})"
        if title not in titles:
            titles[title] = message
        else:
            titles[title] = message

    # pp.pprint(titles)
    # exit()

    # associate the related GitHub issue to each thread
    # warning: the issues need to exist before you run this script!
    # write a "test" comment in each one of your post with comments
    # to make Utterances create the initial issues
    links = {}
    # associate the thread to each post
    for post in posts:
        # pp.pprint(dict(post['thread'])['@dsq:id'])
        # pp.pprint(post)
        # exit()
        link = dict(post['thread'])['@dsq:id']
        if post["message"]:
            message = "#### **" + dict(post['author'])['name'] + \
                "** @" + dict(post['author'])['username'] + \
                "\n\nPosted on: _" + post['createdAt'] + "_ " + \
                "\n\n" + post["message"] + "\n"
            if link not in links:
                links[link] = [message]
            else:
                links[link].append(message)

        # pp.pprint(post["@dsq:id"])
        # post["thread"] = threads[post["thread"]["@dsq:id"]]

    pp.pprint(links)
    # pp.pprint(threads)
    for key in links:

        print(f"\n\n---\n\n{titles[key]} \n")
        msg = "\n".join(links[key])
        print(msg)


if __name__ == "__main__":
    disqus_to_github()
