import { BaseLayout, Button, Input } from '@components'
import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import sessions from '@helpers/sessions'
import { useMutation } from 'react-query'
import api from './api'
import ImageVerifikasiEmail from '@assets/images/image-verifikasi-email.svg'
import { toast } from 'react-toastify'
import IconEmail from '@assets/icons/icon-input-email.svg'
import { ResponseError } from '@interface'

const Verify: FC = () => {
  const router = useRouter()
  const { token } = router.query
  const [email, setEmail] = useState<string>('')
  const { data, mutate } = useMutation((token: string) =>
    api.verify(String(token || ''))
  )
  const { isLoading, mutate: resend } = useMutation(
    () => api.resendEmail(String(email || '')),
    {
      onSuccess() {
        toast.success('Email terkirim, silahkan cek kembali')
        router.push('/')
      },
      onError(error: ResponseError) {
        if (error) {
          toast.error(error.user_message)
        }
      },
    }
  )

  useEffect(() => {
    if (sessions.getToken()) {
      router.push('/')
    }
  }, [sessions.getToken()])

  useEffect(() => {
    mutate(String(token))
  }, [token, mutate])

  return (
    <>
      <BaseLayout>
        <div className="w-full flex justify-center pb-14 pt-20">
          <div className="max-w-sm container flex justify-center  items-center flex-col space-y-5">
            <ImageVerifikasiEmail />
            <h1>
              {data?.code === 200 ? 'Registrasi Sukses' : 'Registrasi Gagal'}
            </h1>
            <p className="text-colorText text-sm text-center">
              {data?.code === 200
                ? 'Selamat, akun kamu telah terdaftar.'
                : 'Proses registrasi gagal silahkan kirim ulang email. Periksa folder spam kamu jika kamu tidak melihatnya'}
            </p>
            {data?.code !== 200 && (
              <div className="flex flex-col gap-2">
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
                  onClick={() => resend()}
                  disabled={!email}
                  variant="primary"
                  label="Kirim ulang email"
                  loading={isLoading}
                />
              </div>
            )}
          </div>
        </div>
      </BaseLayout>
    </>
  )
}

export default Verify
