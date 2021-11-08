import React from "react";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Loading from "./Loading";

export default function Notify() {
  const [state, dispatch] = useContext(DataContext);
  const { notify } = state;
  return (
    <div>
      {notify.loading && <Loading />}
      {notify.error && <p>{}</p>}
      {notify.success && <p>{}</p>}
    </div>
  );
}
