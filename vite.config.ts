import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

declare module "@remix-run/cloudflare" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy(),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/blog", "routes/blog/index.tsx");
          route("/blog/new", "routes/blog/newBlog.tsx");
          route("/blog/edit", "routes/blog/editBlog.tsx");
          route("/blog/:blogId", "routes/blog/$blogId.tsx");
          route("/product", "routes/product/index.tsx");
          route("/product/new", "routes/product/newPage.tsx");
          route("/product/edit", "routes/product/editPage.tsx");
          route("/product/:productId", "routes/product/$productId.tsx");
        });
      },
    }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
  ],
});