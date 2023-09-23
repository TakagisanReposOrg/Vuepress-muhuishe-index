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
        icon: "info",
        link: "/intro",
      },
      {
        text: "チーム構成",
        icon: "fa-solid fa-user-group",
        link: "/structure",
      },
      {
        text: "スタッフ一覧",
        icon: "fa-solid fa-address-book",
        link: "/staff-list",
      },
    ],
  },
  {
    text: "公開情報",
    icon: "fa-solid fa-photo-film",
    prefix: "/archive",
    link: "/ja/archive",
  },
  {
    text: "お問い合わせ",
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
        text: "電子メール",
        icon: "fa-solid fa-envelopes-bulk",
        link: "mailto:muhuishe@takagi3.cn",
      },
      {
        text: "ニコニコ",
        link: "https://www.nicovideo.jp/user/130365678",
      },
    ],
  },
  {
    text: "伝言板",
    icon: "message",
    prefix: "/message-board",
    link: "/ja/message-board",
  },

]);