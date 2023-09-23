import { sidebar } from "vuepress-theme-hope";

export const jaSidebar = sidebar({
  "/ja/": [
    {
      text: "ホーム",
      icon: "home",
      link: "/ja/",
    },
    {
      text: "概要",
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
    text: "公開情報",
    icon: "fa-solid fa-photo-film",
    prefix: "/ja/archive/",
    link: "/ja/archive/",
  },
  {
    text: "お問い合わせ",
    icon: "fa-solid fa-sitemap",
    link: "/ja/about/contact/",
  },
  {
    text: "伝言板",
    icon: "message",
    link: "/ja/message-board/",
  },
  ],
});