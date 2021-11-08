import React from "react";
import Link from "next/link";
import { menu } from "../data/menu.js";
function Mainmenu(props) {
  return (
    <section className="navbar">
      <ul className="site-nav">
        {menu.menu.map((tab, index) => (
          <li key={index} className="dropdown-menu">
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
                  <li key={index} className="dropdown-menu dropdown-menu--lv2">
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
                      <ul className="col-3">
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
