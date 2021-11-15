import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../store/GlobalState";

export default function AdminPage() {
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const router = useRouter();

  return <div>AdminPage</div>;
}
