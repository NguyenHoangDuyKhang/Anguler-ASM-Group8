import {APP_CONFIG} from "./app.config";
import {IAPIEndpoint} from "../interfaces";

export const API_BASE_URL = APP_CONFIG.apiBaseUrl;

export const API_ENDPOINT: IAPIEndpoint = {
  auth: {
    base: API_BASE_URL + '/' + 'auth',
    login: '/auth/login',
    logout: '/auth/logout',
  },
  user: {
    getAllUsers :  '/api/users',
    new : '/api/users/new',
    update : '/api/users/',
    getOneUser : '/api/users/',
    delete : '/api/users/',
  }
};
