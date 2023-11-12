export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  token: string;
}

export type UrlItem = {
  id: string;
  fullUrl: string;
  shortUrl: string;
};
