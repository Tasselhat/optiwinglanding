import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <IoIcons.IoMdCalendar />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    icon: <AiIcons.AiFillInfoCircle />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdPhonePortrait />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <FaIcons.FaMedal />,
    cName: "nav-text",
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: <AiIcons.AiFillPicture />,
    cName: "nav-text",
  },
  {
    title: "Parent Register",
    href: "https://app.jackrabbitclass.com/regv2.asp?id=532938",
    icon: <IoIcons.IoMdDocument />,
    cName: "nav-text",
  },
  {
    title: "Parent Login",
    href: "https://app.jackrabbitclass.com/jr3.0/ParentPortal/Login?orgID=532938",
    icon: <IoIcons.IoMdLogIn />,
    cName: "nav-text",
  },
  {
    title: "Share",
    path: "/share",
    icon: <FaIcons.FaShareAlt />,
    cName: "nav-text",
  },
];
