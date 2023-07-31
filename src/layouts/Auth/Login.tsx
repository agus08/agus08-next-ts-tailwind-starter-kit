import React, { memo } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Modal, Button } from '@components'
import AssetLogin from '@assets/images/assetLogin.svg'
import IconEmail from '@assets/icons/icon-input-email.svg'
import IconPassword from '@assets/icons/icon-input-password.svg'
import { LoginData, LoginResponse } from './interface'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import api from './api'
import sessions from '@helpers/sessions'
import { toast } from 'react-toastify'
import { Response, ResponseError } from '@interface'
import Router from 'next/router'
import useStore from '@store'

interface ILogin {
  isOpen: boolean
  closeModal: () => void
  showForgotPassword: () => void
}

const schema: Yup.SchemaOf<LoginData> = Yup.object({
  email: Yup.string().email().required('Masukan email'),
  password: Yup.string().required('Masukan kata sandi'),
})

const Login: React.FC<ILogin> = ({
  isOpen,
  closeModal,
  showForgotPassword,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) })

  const setShowModalRegister = useStore((s) => s.setShowModalRegister)

  const onSuccess = async ({ data }: Response<LoginResponse>) => {
    if (data?.access_token) {
      sessions.setToken(data?.access_token, data?.expires_in)
      closeModal()
      Router.reload()
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (error: ResponseError) => {
    if (error) {
      toast.error(error.user_message)
    }
  }

  const { isLoading, mutate } = useMutation(
    (values: LoginData) => api.login(values),
    { onSuccess, onError }
  )

  const onSubmit = (values: LoginData) => {
    mutate({ email: values.email, password: values.password })
  }

  return (
    <Modal isOpen={isOpen} size={'lg'} closeModal={closeModal}>
      <form
        className="w-full flex justify-center items-center flex-row"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <AssetLogin></AssetLogin>
        </div>
        <div className="w-full px-16 flex flex-col items-center space-y-5 justify-center">
          <p className="text-primary1 text-center  text-3xl font-semibold">
            Selamat datang di [appname]
          </p>
          <p className="text-colorText text-sm text-center">
            Mulai eksplorasi bisnis waralaba bersama{' '}
            <span className="text-primary1">[appname]</span> dan nikmati
            <span className="text-primary1">keuntungan tanpa batas</span>
          </p>

          <div className="flex flex-col gap-10 w-full pt-5">
            <Input
              id="email"
              type="email"
              full
              register={register}
              name="email"
              label="Masukan Email"
              error={!!errors.email}
              errorMsg={errors?.email?.message}
              Icon={IconEmail}
            ></Input>

            <Input
              id="password"
              type="password"
              Icon={IconPassword}
              full
              register={register}
              error={!!errors.password}
              errorMsg={errors?.password?.message}
              name="password"
              label="Masukan Password"
            ></Input>
          </div>
          <div className="flex flex-1 w-full justify-end">
            <span
              className="font-medium text-base cursor-pointer"
              onClick={() => {
                closeModal()
                setTimeout(() => {
                  showForgotPassword()
                }, 1000)
              }}
            >
              Lupa Passowrd?
            </span>
          </div>
          <Button
            loading={isLoading}
            type="submit"
            label="Login"
            variant="primary"
            full
          ></Button>
          <div className="flex flex-row space-x-2 w-full justify-start">
            <p className="text-colorText">Belum memiliki akun [appname]?</p>
            <p
              className="underlined text-primary1 cursor-pointer"
              onClick={() => {
                closeModal()
                setTimeout(() => {
                  setShowModalRegister(true)
                }, 800)
              }}
            >
              Daftar Disini
            </p>
          </div>
        </div>
      </form>
    </Modal>
  )
}

export default memo(Login)
