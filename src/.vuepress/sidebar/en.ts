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
   ],
  },
  {
    text: "Contact",
    icon: "fa-solid fa-sitemap",
    link: "/en/about/contact/",
  },
],
});
