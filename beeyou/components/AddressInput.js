import React, { useEffect, useState } from "react";

export default function AddressInput() {
  const [province, setProvince] = useState();
  const [provinces, setProvinces] = useState([]);
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState();
  const [ward, setWard] = useState("");
  const [wards, setWards] = useState("");

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/p/")
      .then((res) => res.json())
      .then((json) => setProvinces(json));
  }, []);

  return (
    <div>
      <select
        className="form-select"
        value={province}
        onChange={(e) => setProvince(e.target.value)}
      >
        <option value="">--Chọn tỉnh</option>
        {provinces.map((province) => (
          <option key={province.code} value={province.name}>
            {province.name}
          </option>
        ))}
      </select>
    </div>
  );
}
