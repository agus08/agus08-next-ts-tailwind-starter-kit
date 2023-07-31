import Cookies from 'js-cookie'

const isProduction = process.env.NODE_ENV === 'production'
const tokenStorage = isProduction
  ? 'AppNameDevelopmentUserToken'
  : 'AppNameUserToken'

const sessions = {
  getToken(): string | null {
    return Cookies.get(tokenStorage) || null
  },
  setToken(token: string, expires_in: number): void {
    Cookies.set(tokenStorage, token, {
      expires: new Date(new Date().getTime() + expires_in * 60 * 1000),
    })
  },
  logout() {
    Cookies.remove(tokenStorage)
    Cookies.remove('urlHandler')
    window.location.replace(`/`)
  },
}
export default sessions
