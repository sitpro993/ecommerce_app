import React from "react";

import Image from "next/image";
import SidebarItem from "./SidebarItem";

export default function SideBarAdmin({ pathname }) {
  const sidebar_items = [
    {
      display_name: "Dashboard",
      route: "/admin/dashboard",
      icon: "fas fa-home",
    },
    {
      display_name: "Customers",
      route: "/admin/customers",
      icon: "fas fa-users",
    },
    {
      display_name: "Products",
      route: "/admin/products",
      icon: "fas fa-cubes",
    },
    {
      display_name: "Orders",
      route: "/admin/orders",
      icon: "fas fa-shopping-cart",
    },
    {
      display_name: "Analytics",
      route: "/admin/analytics",
      icon: "fas fa-chart-line",
    },
    {
      display_name: "categories",
      route: "/admin/categories",
      icon: "fas fa-list-ol",
    },
    {
      display_name: "discount",
      route: "/admin/discount",
      icon: "fas fa-gifts",
    },
    {
      display_name: "inventory",
      route: "/admin/inventory",
      icon: "fas fa-store",
    },
    {
      display_name: "settings",
      route: "/admin/settings",
      icon: "fas fa-cog",
    },
  ];

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
