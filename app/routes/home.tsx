// import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, type MetaArgs } from "react-router";

export function meta({}:MetaArgs) {
  return [
    { title: "my react-router" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
