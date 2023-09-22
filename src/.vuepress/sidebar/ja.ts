import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/ja/": [
    {
      text: "ホーム",
      icon: "home",
      link: "/",
    },
    {
      text: "概要/お問い合わせ",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
  ],
});