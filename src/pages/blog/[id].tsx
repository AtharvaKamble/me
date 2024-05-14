"use client";

import { ReactElement, useState } from "react";
import { useRouter } from "next/router";
import { HeartFilledIcon, HeartIcon, Share2Icon } from "@radix-ui/react-icons";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import BlogHeaderImage from "@/components/Blog/BlogHeaderImage";
import BlogTitle from "@/components/Blog/BlogTitle";
import Renderer from "@/components/Blog/Renderer";

export default function BlogTemplate(): ReactElement {
  const [likedStatus, setLikedStatus] = useState<boolean>(true);
  const { query } = useRouter();

  const handleLikeClick = () => {
    setLikedStatus(!likedStatus);
  };

  // const story: string = `<p><b>WHAT</b>: It's 2023, and we</p> all hear about open-source software (let's call it OSS) all the time. In fact, we use open-source materials all the time - directly or indirectly. But who are the knights behind some of the best freeware used by humanity on a huge scale? Honestly, it's not an exaggeration - from the servers of Medium.com at the moment you are reading this, to a rover on Mars, everything is running on Linux (the very embodiment of open-source). These knights are common people (software engineers mainly) like you and me, who are passionate about software and the idea of making software accessible to everyone. Notice that in the previous sentence, I write "software engineers mainly" because it's not just them who are the sole contributors to open-source. Someone who is not into software but likes to maintain documentation, the grammar, the design/layout of a page, or even the color scheme of that page is considered a contributor to open-source. WHY: It only makes sense to see, use and contribute to the mighty power of the open-source. People contribute due to many reasons - one of them being: while using particular software, they noticed how expensive it is to use it. They decide to change that by creating a similar application that would cater to most use cases, but *drum roll* IS FREE! Another reason can be: they are using an already open-source application, but they come across a bug. Instead of moving past it temporarily, the knights decide to look into the codebase themselves, find what's wrong, and then correct it. Voila! Issue resolved. Whatever the case, the common factor among all is that people want to make software easily accessible to more and more people. Because honestly why not? Everyone deserves equal exposure to current state-of-the-art technologies. HOW: There are established platforms that people like to go to when they need to find, correct, build or share OSS. Like when you need to find a question, you go to Quora. When you need to find memes, you go to Instagram or Twitter. When you need communities and their unfiltered opinion on a topic, you go to Reddit. Similarly, when you need OSS you go to GitHub, GitLab, or BitBucket (although GitHub's the most used one). Though there are a few jargons you need to get familiar with when you surf GitHub (like you need to understand Follow, Like, Tag or Comment while using Instagram). Fork: When you come across a project you want to experiment with, change a fundamental characteristic and maintain the new application (but still a derivative of the original) as your creation, you start a new timeline, or as the open-sourcers would, you fork it. Repository: It's just where the code is stored (note: this is not where the code is executed, only stored. For executing, you would probably need to deploy it and run it in a container - but that's another blog). Now, there are two types of storages: local and remote. Again, lets simplify this, local means the code is on your device while remote means the code is on GitHub's harddisk. Clone: When you come across a project (or even your own fork) that you want to make changes to, it first needs to be on your local machine. So, you can download it, or you can clone it. Push: As the name suggests, it is when you upload the code to some remote repository (GitHub in our case), so that others, maybe your friend wants to look at it or start this cycle from the start. In that case, feel free to share this to them too : ) Pull: Unlike push, you download code from the remote to your local. Note: this is different than cloning. Cloning will create a completely new repository while pulling will only download the latest changes in the remote and update the local repo. Merge: When two repos have different updates, you can decide which change you want to keep. For instance, if friend A and friend B made different changes in terms of which font to set for a page, and you have the final call - depending on which font you like, you can decide to keep friend A's suggestion or friend B's suggestion, not both. Branch: When someone works on a project, they can create a branch. This is so that they don't mess up the current state (usually main branch) of the repo. It's like creating a new time line where you have made the change. This is especially useful for the maintainer while reviewing the code because when s/he will pull your changes to their local, they still have their main branch intact. In case, you write some buggy code (it's ok, happens to the best of us), the maintainer can just delete your branch and switch back to the main, potentially saving themselves from never-ending loops of merging and reverting. Issue: Whenever someone comes across a bug in the project, or a potential feature, you would find it in the Issues section. The maintainers, project surfers or even you can look at a issue, determine how the bug can be fixed or the feature be implemented - then volunteer yourself and start working on it. Pull request (PR): Once the issue is resolved and is working fine on your local machine. You upload it to the remote repository and basically request the maintainers to pull your changes into the main branch, hence the name pull request (think of it like a friend request, but nerdy). Once, the maintainer reviews and approves, it is ready to be merged with the main branch. LGTM: Looks good to me. ; ) These should be enough to let you put your feet into the open-source ocean. But there is more to this, as you progress feel free to start using the official documentation, and freecodecamp.org's beginner and advanced videos. GitHub (and others mentioned) are free, don't hesitate to create a test repo and do all sorts of things discussed here. The worst you could run into is getting confused about what you can do next, and deleting the repo. That's fine, that's growth, just start over. The goal is to get accustomed to using version control while building software so you don't mistakenly delete an entire codebase xD. The open-source community is huge and warm. Feel free to drop into an issue and ask the maintainers for guidance, they are always more than happy to guide you through it. - A Twitter | GitHub`;

  return (
    <div className="flex justify-center h-full mx-4">
      <div className="lg:w-2/5 text-sm min-h-full">
        <BlogTitle title="Open source. What? Why? How?" />
        <BlogHeaderImage
          imageUrl="https://miro.medium.com/max/640/1*4aUPydBnK6n-i3oI0eWVkw.gif"
          imageAltText="Homer simpson clones and Peter Griffin."
        />

        <Renderer />
      </div>
    </div>
  );
}
