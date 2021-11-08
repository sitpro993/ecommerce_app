import React from "react";

export default function Panel(props) {
  const style = {
    textAlign: "center",
  };
  return <div style={style}>{props.children}</div>;
}
