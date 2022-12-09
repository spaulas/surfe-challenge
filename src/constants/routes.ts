export const NOTES = "/notes";
export const NOTES_BY_ID_PATH = (session: string, id?: string) =>
  `${session}${NOTES}/${typeof id !== "undefined" ? id : ""}`;
