import { USERS_ENDPOINT, MOST_MENTIONED_USERS_ENDPOINT } from "./endpoints";
import httpClient from "@config/HttpClient";

const axiosInstance = httpClient();

// TODO
export const handleAPIError = (error: Error) => {
  return error;
};

export const fetchUsersAPIRequest = async () => {
  try {
    const response = await axiosInstance.get(USERS_ENDPOINT);
    return response;
  } catch (error) {
    throw handleAPIError(error as Error);
  }
};

export const fetchMostMentionedUsersAPIRequest = async () => {
  try {
    const response = await axiosInstance.get(MOST_MENTIONED_USERS_ENDPOINT);
    return response;
  } catch (error) {
    throw handleAPIError(error as Error);
  }
};
