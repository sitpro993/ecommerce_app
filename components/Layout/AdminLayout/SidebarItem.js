import React from "react";
import Link from "next/link";
export default function SidebarItem(props) {
  const active = props.active ? "active" : "";
  // console.log(props.href);
  return (
    <Link href={`${props.href}`}>
      <a className="img-resize">
        <div className="sidebar__item">
          <div className={`sidebar__item-inner ${active}`}>
            <i className={props.icon}></i>
            <span>{props.title}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
