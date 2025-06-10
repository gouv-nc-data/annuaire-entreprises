import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";


import Header from "./presentation/header";
import Footer from "./presentation/footer";
import GlobalLoading from "./presentation/ui/loader";

import "./presentation/tailwind.css"

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader() {
  return json({ ENV: { UMAMI_URL: process.env.UMAMI_URL, UMAMI_WEBSITE_ID: process.env.UMAMI_WEBSITE_ID } });
}

export function Layout({ children }: { children: React.ReactNode }) {

  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="font-sans scroll-smooth scroll-pt-4">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col flex-1 h-svh">
        <GlobalLoading />
        <Header />
        <div className="flex-grow bg-zinc-100">
          {children}
        </div>
        <ScrollRestoration />
        {data && data.ENV && data.ENV.UMAMI_URL && <script defer src={`${data.ENV.UMAMI_URL}/script.js`} data-website-id={`${data.ENV.UMAMI_WEBSITE_ID}`} />}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export { RootErrorBoundary as ErrorBoundary } from "~/presentation/root-error-boundary";
