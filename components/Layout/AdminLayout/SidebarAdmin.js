import React from "react";

import Image from "next/image";
import { sidebar_items } from "../../../data/sidebar_routes";
import SidebarItem from "./SidebarItem";

export default function SideBarAdmin({ pathname }) {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Image
          src="https://res.cloudinary.com/beeyou/image/upload/v1635431347/logo/logo_q5eftl.webp"
          alt="BeeYou - Thời trang Chất"
          width={80}
          height={80}
        />
      </div>
      {sidebar_items.map((item, index) => (
        <SidebarItem
          href={item.route}
          key={index}
          title={item.display_name}
          icon={item.icon}
          active={pathname.includes(item.route)}
        />
      ))}
    </div>
  );
}
