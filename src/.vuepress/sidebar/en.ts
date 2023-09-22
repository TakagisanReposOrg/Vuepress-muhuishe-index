import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Home",
      icon: "home",
      link: "/",
    },
    {
      text: "Info/Contract",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
  ],
});
