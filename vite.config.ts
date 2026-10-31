import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import appConfig from "./src/config/appConfig.json";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const configuredSiteUrl =
    env.VITE_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    "";
  const siteUrl = configuredSiteUrl
    ? `https://${configuredSiteUrl.replace(/^https?:\/\//, "").replace(/\/+$/, "")}`
    : "";
  const localFilePath = resolve(
    process.cwd(),
    "public",
    decodeURIComponent(appConfig.downloadUrl.replace(/^\//, "")),
  );
  const localFileExists = existsSync(localFilePath);
  const downloadAvailable =
    env.VITE_DOWNLOAD_AVAILABLE === "true" ||
    (env.VITE_DOWNLOAD_AVAILABLE !== "false" && localFileExists);

  return {
    plugins: [
      react(),
      {
        name: "social-preview-site-url",
        transformIndexHtml(html) {
          return html.replaceAll("__SITE_URL__", siteUrl);
        },
      },
    ],
    define: {
      "import.meta.env.VITE_DOWNLOAD_AVAILABLE": JSON.stringify(
        String(downloadAvailable),
      ),
    },
  };
});
