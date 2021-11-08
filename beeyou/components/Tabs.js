import React, { useState } from "react";

function Tabs(props) {
  const [selected, setSelected] = useState(0);
  const handleChange = (index) => {
    setSelected(index);
  };

  return (
    <>
      <ul className="tab-panel">
        {props.children.map((elem, index) => {
          let classList = index === selected ? "tab-panel-selected" : "";

          return (
            <li
              key={index}
              className={classList}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div className="tab-panel-content">{props.children[selected]}</div>
    </>
  );
}

export default Tabs;
