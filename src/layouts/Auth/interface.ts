export interface LoginData {
  email: string
  password: string
}

export interface LoginResponse {
  access_token: string
  token_type: string
  expires_in: number
  expired_at: number
}

export interface RegisterData {
  email: string
  password: string
  password_confirmation: string
  name: string
  phone: string
}

export interface RegisterResponse {
  name: string
  phone: string
  updated_at: Date
  created_at: Date
  id: number
}

export interface ResetPasswordRequest {
  email: string
  reset_page: string
}
