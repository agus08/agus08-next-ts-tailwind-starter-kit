import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ImageResetPassword from '@assets/images/image-set-new-password.svg'
import IconPassword from '@assets/icons/icon-input-password.svg'
import { BaseLayout, Button, Input } from '@components'
import { useRouter } from 'next/router'
import { ResetNewPasswordRequest } from './interface'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import api from './api'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ResponseError } from '@interface'
import sessions from '@helpers/sessions'

const schema: Yup.SchemaOf<ResetNewPasswordRequest> = Yup.object({
  reset_token: Yup.string(),
  password: Yup.string().required('Masukan kata sandi'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Password harus sama'
  ),
})

const ResetPassword = () => {
  const [isSuccess, setSuccess] = useState(false)
  const router = useRouter()
  const { token } = router.query
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetNewPasswordRequest>({ resolver: yupResolver(schema) })

  const { mutate, isLoading } = useMutation(
    (values: ResetNewPasswordRequest) => api.resetPassword(values),
    {
      onSuccess() {
        setSuccess(true)
      },
      onError(error: ResponseError) {
        toast.error(error.user_message)
      },
    }
  )

  const onSubmit = (values: ResetNewPasswordRequest) => {
    mutate({
      reset_token: token,
      password: values.password,
      password_confirmation: values.password_confirmation,
    })
  }

  useEffect(() => {
    if (sessions.getToken()) {
      router.push('/')
    }
  }, [sessions.getToken()])

  return (
    <BaseLayout>
      <form
        className="w-full flex justify-center pb-14 pt-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="max-w-sm container flex justify-center  items-center flex-col space-y-10">
          <ImageResetPassword />
          {isSuccess ? (
            <>
              <h1 className="text-2xl font-medium">Sukses</h1>
              <p className="text-colorText text-sm text-center">
                Password berhasil diganti.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-medium">Lupa Password</h1>
              <p className="text-colorText text-sm text-center">
                Silakan masukkan alamat email terdaftar Anda, kami akan
                mengirimkan instruksi untuk membantu mengatur ulang kata sandi
                Anda
              </p>
              <Input
                id="password"
                type="password"
                full
                register={register}
                name="password"
                label="Password Baru"
                Icon={IconPassword}
                error={!!errors.password}
                errorMsg={errors.password?.message}
              />
              <Input
                id="password_confirmation"
                type="password"
                full
                register={register}
                name="password_confirmation"
                label="Konfirmasi Password Baru"
                Icon={IconPassword}
                error={!!errors.password_confirmation}
                errorMsg={errors.password_confirmation?.message}
              />
              <Button
                type="submit"
                loading={isLoading}
                variant="primary"
                label="Ganti Passowrd"
                full
              ></Button>
            </>
          )}
        </div>
      </form>
    </BaseLayout>
  )
}

export default ResetPassword
