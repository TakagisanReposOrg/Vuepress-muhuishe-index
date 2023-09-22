import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Info",
    prefix: "/en/about",
    icon: "book",
    children: [
      {
        text: "Intro",
        icon: "blog",
        link: "/intro",
      },

    ],
  },
  {
    text: "Contact",
    icon: "rss",
    link: "/en/about/contact",
  },
])
