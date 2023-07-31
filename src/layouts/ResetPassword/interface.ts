export interface ResetNewPasswordRequest {
  reset_token?: string | string[]
  password?: string
  password_confirmation?: string
}
