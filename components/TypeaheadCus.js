import React, { useEffect, useState } from "react";

export default function TypeaheadCus(props) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);

  const handleUploadImage = (e) => {
    props.handleChangeInput({ title, img: e.target.files[0] });
  };
  console.log(image);

  return (
    <>
      <div className="img-product">
        <div className="variant-title-input">
          <input
            type="text"
            placeholder="Nhập tên biến thể"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="variant-img-input">
          <input
            accept=".jpeg,.png,.gif,.jpg"
            type="file"
            onChange={handleUploadImage}
            disabled={title === "" ? true : false}
          />
        </div>
      </div>
    </>
  );
}
