import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "介绍",
    prefix: "/about",
    icon: "book",
    children: [
      {
        text: "简介",
        icon: "blog",
        link: "/intro",
      },

    ],
  },
  {
    text: "联络",
    icon: "rss",
    link: "/about/contact",
  },
]);
