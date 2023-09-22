import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "主页",
      icon: "home",
      link: "/",
    },
    {
      text: "关于/联络",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
  ],
});
