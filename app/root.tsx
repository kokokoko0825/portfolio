import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

import "app/styles/globals.css";
import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
//import Page from "./routes/_index/route";


export function Layout({ children }: { children: React.ReactNode }): ReactNode {
  return (
    <html lang="ja">
      <head>
        
        <Meta />
        <Links />
        <title>Koshi Quest(仮)</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App(): ReactNode {
  return <Outlet />;
}


export const links: LinksFunction = () => {
  return [
    { rel: "icon", href: "/favicon.ico", type: "image/x-ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
        href:"https://fonts.googleapis.com/css2?family=DotGothic16&family=Jersey+10&display=swap",
        rel:"stylesheet"
    },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Koshi Quest(仮)" },
    { rel: "icon", href: "public/favicon.ico" },
    { name: "description", content: "エンジニアKoshiのポートフォリオ" },
    { name: "robots", content: "index, follow" },
    { name: "og:title", content: "Koshi Quest(仮)" },
    { name: "og:description", content: "エンジニアKoshiのポートフォリオ" },
    { name: "og:url", content: "https://kosen-live.pages.dev" },
    { name: "og:image", content: "https://kosen-live.pages.dev/ogp.png" },
    {
      property: "og:image:url",
      content: "https://kosen-live.pages.dev/ogp.png",
    },
    { property: "og:image:alt", content: "Koshi Quest(仮)" },
    { name: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Koshi Quest(仮)" },
    { name: "twitter:description", content: "エンジニアKoshiのポートフォリオ" },
    {
      name: "twitter:image",
      content: "https://kosen-live.pages.dev/ogp.png",
    },
    { name: "twitter:image:alt", content: "Koshi Quest(仮)" },
  ];
};