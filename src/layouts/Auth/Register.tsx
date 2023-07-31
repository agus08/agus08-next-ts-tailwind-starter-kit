import React, { memo } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Modal, Button } from '@components'
// import IconFacebook from '@assets/icons/icon-button-facebook.svg'
// import IconGoogle from '@assets/icons/icon-button-google.svg'
import AssetRegister from '@assets/images/assetRegister.svg'
import IconNama from '@assets/icons/icon-input-nama.svg'
import IconEmail from '@assets/icons/icon-input-email.svg'
import IconTelepon from '@assets/icons/icon-input-telepon.svg'
import IconPassword from '@assets/icons/icon-input-password.svg'
import { RegisterData, RegisterResponse } from './interface'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import api from './api'
import { Response, ResponseError } from '@interface'
import { toast } from 'react-toastify'
import { useState } from 'react'
import globalStore from '@store'

interface IRegister {
  isOpen: boolean
  closeModal: () => void
  verifikasiEmail: () => void
  openLogin: () => void
}

const schema: Yup.SchemaOf<RegisterData> = Yup.object({
  email: Yup.string().email().required('Masukan email'),
  password: Yup.string().required('Masukan kata sandi'),
  password_confirmation: Yup.string().required('Kata sandi tidak sama'),
  name: Yup.string().required('Masukan Nama'),
  phone: Yup.string()
    .required()
    .matches(/^08[1-9][0-9]{6,9}$/g, {
      message: 'Format nomor tidak valid. Contoh: 08xxxxxxxxxx',
    }),
})

const Register: React.FC<IRegister> = ({
  isOpen,
  closeModal,
  openLogin,
  verifikasiEmail,
}) => {
  const [checked, setChecked] = useState(false)
  const setRegisterEmail = globalStore((s) => s.setRegisterEmail)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterData>({ resolver: yupResolver(schema) })

  const onSuccess = async ({ data }: Response<RegisterResponse>) => {
    if (data?.id) {
      setRegisterEmail(getValues('email'))
      closeModal()
      verifikasiEmail()
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (error: ResponseError) => {
    if (error) {
      toast.error(error.user_message)
    }
  }

  const { isLoading, mutate } = useMutation(
    (values: RegisterData) => api.register(values),
    { onSuccess, onError }
  )

  const onSubmit = (values: RegisterData) => {
    mutate({
      email: values.email,
      name: values.name,
      password: values.password,
      password_confirmation: values.password_confirmation,
      phone: values.phone,
    })
  }

  return (
    <Modal isOpen={isOpen} size={'lg'} closeModal={closeModal}>
      <form
        className="w-full flex flex-row space-x-10 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full h-fit top-0">
          <AssetRegister></AssetRegister>
        </div>
        <div className="w-full flex flex-col items-center gap-5 justify-center">
          <p className="text-primary1 text-3xl font-semibold">
            Selamat datang di [appname]
          </p>
          <p className="text-colorText text-sm text-center">
            Mulai eksplorasi bisnis waralaba bersama{' '}
            <span className="text-primary1">[appname]</span> dan nikmati
            <span className="text-primary1">keuntungan tanpa batas</span>
          </p>
          <div className="flex flex-col w-full gap-8">
            <Input
              id="nama"
              full
              label="Nama Lengkap"
              type="text"
              register={register}
              name="name"
              Icon={IconNama}
              error={!!errors?.name}
              errorMsg={errors.name?.message}
            ></Input>
            <Input
              id="email"
              type="email"
              full
              label="Masukan Email"
              Icon={IconEmail}
              register={register}
              name="email"
              error={!!errors?.email}
              errorMsg={errors.email?.message}
            ></Input>
            <Input
              id="phone"
              type="text"
              full
              label="Nomor Telepon"
              Icon={IconTelepon}
              register={register}
              name="phone"
              error={!!errors?.phone}
              errorMsg={errors.phone?.message}
            ></Input>
            <Input
              id="password"
              type="password"
              Icon={IconPassword}
              full
              label="Masukan Password"
              register={register}
              name="password"
              error={!!errors?.password}
              errorMsg={errors.password?.message}
            ></Input>
            <Input
              id="confirmPassword"
              type="password"
              full
              label="Konfirmasi Password"
              Icon={IconPassword}
              register={register}
              name="password_confirmation"
              error={!!errors?.password_confirmation}
              errorMsg={errors.password_confirmation?.message}
            ></Input>
          </div>
          <div className="">
            <input
              type="checkbox"
              id="faq"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
              className="w-4 h-4 mr-2 text-primary2
               bg-gray-100 rounded border-gray-300
                focus:ring-primary2 dark:focus:ring-primary2
                 dark:ring-offset-primary1 focus:ring-2 dark:bg-primary1 dark:border-primary1"
            />
            <label htmlFor="faq" className="not-italic text-sm text-colorText">
              Saya setuju dengan{' '}
              <span className="text-primary1">Persyaratan [appname]</span>.
              Cari tahu lebih lanjut tentang bagaimana kami menggunakan dan
              melindungi data Anda di{' '}
              <span className="text-primary1">Kebijakan Privasi kami</span>.
            </label>
          </div>
          <Button
            type="submit"
            label="Daftar"
            variant="primary"
            loading={isLoading}
            disabled={!checked}
            full
          ></Button>
          <div className="flex flex-row space-x-2 w-full justify-start">
            <p className="text-colorText">Sudah memiliki akun [appname]?</p>
            <p
              onClick={() => {
                closeModal()
                openLogin()
              }}
              className="underline cursor-pointer text-primary1"
            >
              Masuk Disini
            </p>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default memo(Register)
