import {
    BiHome,
    BiEditAlt,
    BiCategoryAlt,
    BiLeaf,
    BiPaperPlane,
    BiBox,
  } from "react-icons/bi";
  
  const icon_size = 20;
  
  export const NavLists = [
    {
      name: "home",
      link: "/",
      icon: <BiHome size={icon_size} />,
    },
    {
      name: "about",
      link: "/about",
      icon: <BiLeaf size={icon_size} />,
    },
    {
      name: "project",
      link: "/project",
      icon: <BiBox size={icon_size} />,
    },
    {
      name: "dashboard",
      link: "/dashboard",
      icon: <BiCategoryAlt size={icon_size} />,
    },
    {
      name: "contact",
      link: "/contact",
      icon: <BiPaperPlane size={icon_size} />,
    },
  ];
  