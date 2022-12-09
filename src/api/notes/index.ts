import { NOTES_ENDPOINT, NOTE_BY_ID_ENDPOINT } from "./endpoints";
import httpClient from "../../config/HttpClient";
import {
  NotesPayload,
  NoteByIdPayload,
  UpdateNotePayload,
} from "./notes.types";

const axiosInstance = httpClient();

// TODO
export const handleAPIError = (error: Error) => {
  return error;
};

export const fetchNotesAPIRequest = async ({ session }: NotesPayload) => {
  try {
    const response = await axiosInstance.get(NOTES_ENDPOINT(session));
    return response.data;
  } catch (error) {
    throw handleAPIError(error as Error);
  }
};

export const fetchNoteByIdAPIRequest = async ({
  session,
  id,
}: NoteByIdPayload) => {
  try {
    const response = await axiosInstance.get(NOTE_BY_ID_ENDPOINT(session, id));
    return response.data;
  } catch (error) {
    throw handleAPIError(error as Error);
  }
};

export const updateNoteAPIRequest = async ({
  session,
  id,
  body,
}: UpdateNotePayload) => {
  try {
    const response = await axiosInstance.put(NOTE_BY_ID_ENDPOINT(session, id), {
      body,
    });
    console.log("updateNoteAPIRequest response = ", response);
    return response.data;
  } catch (error) {
    throw handleAPIError(error as Error);
  }
};

export const createNoteAPIRequest = async ({ session }: NotesPayload) => {
  try {
    const response = await axiosInstance.post(NOTES_ENDPOINT(session), {
      body: " ",
    });
    return response;
  } catch (error) {
    throw handleAPIError(error as Error);
  }
};
