import config from "./appConfig.json";

export const APP_CONFIG = {
  ...config,
};

export const DOWNLOAD_AVAILABLE =
  import.meta.env.VITE_DOWNLOAD_AVAILABLE === "true";
