import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "主页",
      icon: "home",
      link: "/",
    },
    {
      text: "介绍",
      icon: "book",
      prefix: "about/",
      link: "about/",
      children: [
        "intro",
        "structure",
      ],
    },
    {
      text: "联络",
      icon: "fa-solid fa-sitemap",
      link: "/about/contact/",
    },
  ],
});
