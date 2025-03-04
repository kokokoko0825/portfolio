/**
 * By default, Remix will handle generating the HTTP Response for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.server
 */

import type { AppLoadContext, EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToString } from "react-dom/server";

const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  // This is ignored so we can keep it in the template for visibility.  Feel
  // free to delete this parameter in your app if you're not using it!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loadContext: AppLoadContext
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), ABORT_DELAY);

  try {
    console.log("Request URL:", request.url);
    console.log("Request Headers:", JSON.stringify([...request.headers]));
    console.log("Remix Context:", remixContext);

    const markup = renderToString(
      <RemixServer
        context={remixContext}
        url={request.url}
      />
    );

    clearTimeout(timeoutId);

    if (isbot(request.headers.get("user-agent") || "")) {
      // await body.allReady;
    }

    responseHeaders.set("Content-Type", "text/html");
    return new Response(`<!DOCTYPE html>${markup}`, {
      headers: responseHeaders,
      status: responseStatusCode,
    });
  } catch (error) {
    console.error("Error in handleRequest:", error);
    console.error("Request URL:", request.url);
    console.error("Request Headers:", JSON.stringify([...request.headers]));
    console.error("Remix Context:", remixContext);
    return new Response("Internal Server Error", { status: 500 });
  }
}