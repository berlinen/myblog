import React from "react";
import Loadable from "react-loadable";
import { AppstoreOutlined } from "@ant-design/icons";
// import NotFound from "../pages/notFound";
import Loading from "../components/jumpLoading/jumpLoading";

export default [
  {
    key: "notFound",
    path: "/notFound",
    exact: true,
    component: Loadable({
      loader: () => import("../pages/notFound"),
      loading: () => <Loading />,
    }),
  },
  {
    key: "login",
    title: "登陆",
    icon: <AppstoreOutlined />,
    path: "/login",
    exact: "true",
    component: Loadable({
      loader: () => import("../pages/login"),
      loading: () => <Loading />,
    }),
  },
];
