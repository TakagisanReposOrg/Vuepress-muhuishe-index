import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    {
      text: "Home",
      icon: "home",
      link: "/en/",
    },
    {
      text: "Info",
      prefix: "about/",
      icon: "book",
      link: "about/",
      children: [
        "intro",
        "structure",
        "staff-list",
   ],
  },
  {
    text: "Audiovisual-archive",
    icon: "fa-solid fa-photo-film",
    link: "/en/archive",
  },
  {
    text: "Contact",
    icon: "fa-solid fa-sitemap",
    link: "/en/about/contact/",
  },
  {
    text: "Message-board",
    icon: "message",
    link: "/en/message-board/",
  },
],
});
