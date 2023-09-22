import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/ja/": [
    {
      text: "ホーム",
      icon: "home",
      link: "/",
    },
    {
      text: "概要",
      icon: "book",
      prefix: "about/",
      link: "about/",
      children: [
        "intro",
   ],
  },
  ],
});