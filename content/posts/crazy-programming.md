---
title: "Crazy Programming"
date: 2017-12-24T01:50:21+05:30
draft: true
---

> “The reason anyone would, which they can't, is because they could, which they can't.” - Rick Sanchez

The world of programmming is very engaging but the craziest depths are way too deep to cover in a single blog article. I will however try to cover everythng tht I have discovered about Fun Programming, the programming done not for any use but for `fun`.

More specifically prgrammers create crazy bizzare programs, sometimes even entire programming languages just because they can.

I have seen several amazing pieces of code which are unique and very Awesome. I can't really give you an idea without giving you an example, What do you think this is:

```
   H ; e ;
  l ; d ; *
 ; r ; o ; W
l ; ; o ; * 4
 3 3 ; @ . >
  ; 2 3 < \
   4 ; * /
```

This is a Hello World! program of [hexagony](http://esolangs.org/wiki/Hexagony), Its totally delerius. And the fun's just started??!??!

## How I became inspired for this Post

I was programming C and I just thought It would be fun to see the top questions of C on stackoverflow, There I found this post: [What does the C ??!??! operator do?](https://stackoverflow.com/questions/7825055/what-does-the-c-operator-do)

Using it as inspiration I programmed this:

```c
??=include<stdio.h>

int main() ??<
    int i=0, k??(2??) = ??<0, 2??>;
    for (i = 0; i < 2; i++) ??<
        !(k??(i??) != 1) ??!??! printf("k is not 1 it is %i ??/n", k??(i??));
    ??>
??>
```

Which is a perfectly valid C program. Yes Its hard to belive But it is what it is. I used [trigraphs](https://en.wikipedia.org/wiki/Digraphs_and_trigraphs#C) to do it.

It actually means this:

```c
#include <stdio.h>

int main() {
    int i=0, k[2] = {0, 2};
    for (size_t i = 0; i < 2; i++) {
        if (k[i] != 1)
            printf("k is not 1it is %i \n", k[i]);
    }
}
```

But then I searched more, int the world of crazy programming, and I found this program:

```
#/*[/**/include <stdio.h>
#define print(_) int main() { if (sizeof('a') > 1) { printf("Hello from C\n"); } else { printf("Hello from C++\n"); } }
#define X */[allow()] macro_rules! p { ($($t:tt)*) => (fn main() { println!("Hello from Rust") }) } p! {
print((0 and "Hello from Ruby\n" or "Hello from Python"))
#define Y }/*
#define A ]-[------->+<]>-.-[->+++++<]>++.+++++++..+++.[--->+<]>-----.++[->+++<]>.++++++++++++.---.--.[->+++++<]>-.[->+++<]>++.[--->+<]>----.+++[->+++<]>++.++++++++.+++++.--------.-[--->+<]>--.+[->+++<]>+.++++++++.+[++>---<]>-.*/
```

Valid_ Rust, Ruby, Python, C, C++ and Brainf*ck, and prints out the correct language for each. For example `Hello from Ruby` and `Hello from C`.

And if you are wondering about Brainf*ck, Its a crazy language too.

Here is a comment from a issue of this repository named only `WHY?` :

> It's awesome and inspired.

> Computer Scientists and generally-terrific engineers often choose to do examples that are largely academic in nature because that engineer (or maybe -any- engineer) hasn't yet encountered that class of problem. They do this because the question can present a challenge to efficiency or elegance, or even defy a solution completely.

> Often times, the journey produces lessons along the way that can be applied to other problems. On occasiona, it's a trainwreck that produces little fruit. However, when the answer is found, you might find new ways to do old things. If the answer is elegant, you can put another star next to your name attesting to the fact that there is one more question that you've never backed-down from, and answered beautifully.
