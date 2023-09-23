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
        "staff-list",
      ],
    },
    {
      text: "公开信息",
      icon: "fa-solid fa-photo-film",
      prefix: "/archive/",
      link: "/archive/",
    },
    {
      text: "联络",
      icon: "fa-solid fa-sitemap",
      link: "/about/contact/",
    },
    {
      text: "留言板",
      icon: "message",
      link: "/message-board",
    },
  ],
});
