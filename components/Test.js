import React, { useEffect } from "react";
import { useState } from "react";
import TypeaheadCus from "./TypeaheadCus";

export default function TextEditor() {
  const [inputList, setInputList] = useState([]);
  const [variant, setVariant] = useState([]);

  const handleAddVariant = (tmp) => {
    setVariant([...variant, tmp]);
  };

  // console.log(variant);

  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <TypeaheadCus
          key={inputList.length}
          index={inputList.length}
          variant={variant}
          handleChangeInput={handleAddVariant}
        />
      )
    );
  };

  return (
    <div>
      <button onClick={onAddBtnClick}>Add input</button>
      {inputList}
    </div>
  );
}
