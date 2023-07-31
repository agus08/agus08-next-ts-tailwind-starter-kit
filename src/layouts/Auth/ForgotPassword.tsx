import React, { memo } from 'react'
import { Button, Input, Modal } from '@components'
import ImageForgotPassword from '@assets/images/image-forgot-password.svg'
import IconEmail from '@assets/icons/icon-input-email.svg'
import { useState } from 'react'
import { useMutation } from 'react-query'
import api from './api'
import Link from 'next/link'
import { ResponseError } from '@interface'
import { toast } from 'react-toastify'

interface IForgotPassword {
  isOpen: boolean
  closeModal: () => void
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
const ForgotPassword: React.FC<IForgotPassword> = ({ isOpen, closeModal }) => {
  const [email, setEmail] = useState<string>('')
  const [isSuccess, setSuccess] = useState<boolean>(false)

  const { mutate, isLoading } = useMutation(
    () =>
      api.requestResetPassword({
        email,
        reset_page: `${APP_URL}/resetPassword`,
      }),
    {
      onSuccess() {
        setSuccess(true)
      },
      onError(error: ResponseError) {
        toast.error(error.user_message)
      },
    }
  )

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    mutate()
  }

  return (
    <Modal isOpen={isOpen} size={'md'} closeModal={closeModal}>
      <div className="w-full flex justify-center pb-14">
        <form
          className="max-w-sm container flex justify-center  items-center flex-col space-y-5"
          onSubmit={submit}
        >
          <ImageForgotPassword></ImageForgotPassword>
          {isSuccess ? (
            <>
              <h1 className="text-2xl font-medium">Reset Password Terkirim</h1>
              <p className="text-colorText text-sm text-center">
                Email yang berisi instruksi untuk mengatur ulang kata sandi Anda
                telah dikirim ke{' '}
                <span className="font-medium text-gray-700">{email}</span>
              </p>
              <p className="text-colorText text-sm text-center">
                Jika kamu tidak menerima email, tolong
                <Link href={'/contact'}>
                  <span className="text-primary2 px-1">hubungi kami</span>
                </Link>{' '}
                untuk mengirim ulang
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
                id="email"
                type="email"
                full
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label="Masukan Email"
                Icon={IconEmail}
              />
              <Button
                type="submit"
                variant="primary"
                label="Kirim instruksi"
                full
                disabled={!email}
                loading={isLoading}
              ></Button>
            </>
          )}
        </form>
      </div>
    </Modal>
  )
}

export default memo(ForgotPassword)
