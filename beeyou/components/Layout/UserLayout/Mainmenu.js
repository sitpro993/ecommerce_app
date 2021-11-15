import React from "react";
import Link from "next/link";
import { menu } from "../../../data/menu";
function Mainmenu(props) {
  return (
    <section className="nav-bar">
      <ul className="nav-menu">
        {menu.menu.map((tab, index) => (
          <li key={index} className="dropdown_menu">
            <Link href={tab.link}>
              <a>
                {tab.content}
                {tab.menuTab ? (
                  <i className="fa fa-caret-down" aria-hidden="true"></i>
                ) : null}
              </a>
            </Link>
            {tab.menuTab ? (
              <ul>
                {tab.menuTab.map((menuTab, index) => (
                  <li key={index} className="dropdown_menu dropdown-menu-lv2">
                    <Link href={menuTab.link}>
                      <a>
                        {menuTab.content}
                        {menuTab.menuTab ? (
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                        ) : null}
                      </a>
                    </Link>
                    {menuTab.menuTab ? (
                      <ul className="menu-right">
                        {menuTab.menuTab.map((t, index) => (
                          <li key={index}>
                            <Link href={t.link}>
                              <a>{t.content}</a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Mainmenu;
