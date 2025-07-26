import axios, { AxiosRequestHeaders, Method } from "axios";

export interface ApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data?: any;
  errors?: {
    field: string;
    error: string;
  }[];
}

interface HttpRequestOptions {
  method: Method;
  url: string;
  params?: Record<string, any>; // params is optional, can be an object
  data?: any; // data is optional, can be any type
  headers?: any; // headers is optional, and Axios has a type for headers
}

const Http_Request = async ({
  url,
  method,
  data,
  params,
  headers,
}: HttpRequestOptions) => {
  try {
    const options = { method, url, params, data, headers };
    const response = await axios.request(options);
    return response;
  } catch (error) {
    console.error("Error in HTTP request:", error);
    throw error;
  }
};

export default Http_Request;
