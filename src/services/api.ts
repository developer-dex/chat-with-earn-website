import { config } from "../config/config";
import ApiInstance from "./http";
import { apiEndPoints } from "../config/path";
import { getAuthHeader, getHeader, getRefreshTokenHeader } from "../helpers/utils";

interface AuthHeader {
  headers: {
    Accept: string;
    "Accept-Language": string;
  };
}

interface Header {
  headers: {
    Accept: string;
    "Accept-Language": string;
    Authorization: string;
  };
}

export const getApi = async (url: string) => {
  const headers: Header = getHeader();
  const data: any = await ApiInstance.get(`${url}`, headers);
  return data;
};

export const postApi = (url: string, apiData: any) => {
  const headers: Header = getHeader();
  return ApiInstance.post(`${url}`, apiData, headers);
};

export const authPostApi = async (url: string, apiData: any) => {
  const headers: AuthHeader = getAuthHeader();
  try {
    const data: any = await ApiInstance.post(`${url}`, apiData, headers);
    return data;
  } catch (error) {
    throw error;
  }
  // return ApiInstance.post(`${config.apiBaseUrl}${url}`, apiData,headers)
};
export const patchApi = (url: string, apiData?: any) => {
  const headers: Header = getHeader();
  return ApiInstance.patch(`${url}`, apiData, headers);
};

export const putApi = (url: string, apiData: any) => {
  const headers: Header = getHeader();
  return ApiInstance.put(`${url}`, apiData, headers);
};

export const deleteApi = (url: string) => {
  const headers: Header = getHeader();
  return ApiInstance.delete(`${config.apiBaseUrl}${url}`, headers);
};

export async function refreshTokenAPI() {
  const deviceData = {};
  const headers = getRefreshTokenHeader();
  const response = await ApiInstance.patch(apiEndPoints.REFRESH_TOKEN_PATH, deviceData, headers);
  return response;
}