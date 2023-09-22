import { navbar } from "vuepress-theme-hope";

export const jaNavbar = navbar([
  "/ja/",
  {
    text: "概要",
    prefix: "/ja/about",
    icon: "book",
    children: [
      {
        text: "イントロ",
        icon: "blog",
        link: "/intro",
      },

    ],
  },
  {
    text: "お問い合わせ",
    icon: "rss",
    link: "/ja/about/contact",
  },
]);