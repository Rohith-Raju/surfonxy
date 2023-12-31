/** sfg: SurFonxy-Generated */
export const SURFONXY_GENERATED_ATTRIBUTE = "__sfg";

export enum SURFONXY_URI_ATTRIBUTES {
  READY = "__surfonxy_ready",
  URL = "__surfonxy_url",
  ORIGIN = "__surfonxy_location_origin"
}

export const SURFONXY_LOCALSTORAGE_SESSION_ID_KEY = "__surfonxy_session_id";

export const SURFONXY_SERVICE_WORKER_PATH = "/surfonxy.js";
export const createSurfonxyServiceWorkerPath = (session_id: string) => {
  return `${SURFONXY_SERVICE_WORKER_PATH}?session_id=${session_id}`;
};
