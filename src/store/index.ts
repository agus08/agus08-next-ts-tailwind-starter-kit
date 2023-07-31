import { MyOutlet, Useraccount } from '@interface'
import create from 'zustand'

interface Store {
  userProfile?: Useraccount
  setUserProfile: (userProfile: Useraccount) => void
  userOutlet: MyOutlet[]
  setUserOutelet: (userOutlet: MyOutlet[]) => void
  registerEmail?: string
  setRegisterEmail: (registerEmail: string) => void
  showModalRegister?: boolean
  setShowModalRegister: (showModalRegister: boolean) => void
  showModalLogin?: boolean
  setShowModalLogin: (showModalLogin: boolean) => void
  showModalInterest?: boolean
  setShowModalInterest: (showModalLogin: boolean) => void
}

const useStore = create<Store>((set) => ({
  userProfile: undefined,
  setUserProfile: (userProfile) => set(() => ({ userProfile })),
  userOutlet: [],
  setUserOutelet: (userOutlet) => set(() => ({ userOutlet })),
  registerEmail: '',
  setRegisterEmail: (registerEmail) => set(() => ({ registerEmail })),
  showModalRegister: false,
  setShowModalRegister: (showModalRegister) =>
    set(() => ({ showModalRegister })),
  showModalLogin: false,
  setShowModalLogin: (showModalLogin) => set(() => ({ showModalLogin })),
  showModalInterest: false,
  setShowModalInterest: (showModalInterest) =>
    set(() => ({ showModalInterest })),
}))

export default useStore
