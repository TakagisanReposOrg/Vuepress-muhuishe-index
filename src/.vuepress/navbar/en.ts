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
        icon: "info",
        link: "/intro",
      },
      {
        text: "Team-structure",
        icon: "fa-solid fa-user-group",
        link: "/structure",
      },
      {
        text: "Staff-list",
        icon: "fa-solid fa-address-book",
        link: "/staff-list",
      },

    ],
  },
  {
    text: "Contact",
    icon: "fa-solid fa-sitemap",
    children: [
      {
        text: "Bilibili",
        icon: "fa-brands fa-bilibili",
        link: "https://space.bilibili.com/1039798377",
      },
      {
        text: "Youtube",
        icon: "fa-brands fa-youtube",
        link: "https://www.youtube.com/channel/UCiBTM6mA935YAysLqwv_aMQ",
      },
      {
        text: "Twitter/X",
        icon: "fa-brands fa-twitter",
        link: "https://twitter.com/muhuishe",
      },
      {
        text: "Discord",
        icon: "fa-brands fa-discord",
        link: "https://discord.gg/SXVan75C",
      },
      {
        text: "Email",
        icon: "fa-solid fa-envelopes-bulk",
        link: "mailto:muhuishe@takagi3.cn",
      },
    ],
  },
])
