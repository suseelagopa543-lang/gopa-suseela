// import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// export default defineConfig({
//   // Disable Nitro so `npm run build` outputs a plain static site to dist/
//   // (dist/index.html + dist/assets/*) deployable to GitHub Pages, Vercel, Netlify.
//   nitro: false,
//   tanstackStart: {
//     server: { entry: "server" },
//     // Prerender every route to static HTML at build time. Combined with
//     // `nitro: false` above, the output is a pure static site under dist/.
//     pages: [
//       {
//         path: "/",
//         prerender: { enabled: true, crawlLinks: true },
//       },
//     ],
//     spa: {
//       enabled: true,
//     },
//   },
// });
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env.VITE_BASE_PATH ?? "/";

export default defineConfig({
  base,
  vite: {
    base,
  },
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      {
        path: "/",
        prerender: { enabled: true, crawlLinks: true },
      },
    ],
    spa: {
      enabled: true,
    },
  },
});