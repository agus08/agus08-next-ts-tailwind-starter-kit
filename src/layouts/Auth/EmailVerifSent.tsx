import React, { memo } from 'react'
import { Button, Modal } from '@components'
import ImageVerifikasiEmail from '@assets/images/image-verifikasi-email.svg'
import store from '@store'
import { useMutation } from 'react-query'
import api from './api'
import { toast } from 'react-toastify'

interface IVerifikasiEmail {
  isOpen: boolean
  closeModal: () => void
}

const VerifikasiEmail: React.FC<IVerifikasiEmail> = ({
  isOpen,
  closeModal,
}) => {
  const registerEmail = store((s) => s.registerEmail)

  const { isLoading, mutate: resend } = useMutation(
    () => api.resendEmail(String(registerEmail || '')),
    {
      onSuccess() {
        toast.success('Email terkirim, silahkan cek kembali')
      },
    }
  )

  return (
    <Modal isOpen={isOpen} size={'md'} closeModal={closeModal}>
      <div className="w-full flex justify-center pb-14 ">
        <div className="max-w-sm container flex justify-center  items-center flex-col space-y-5">
          <ImageVerifikasiEmail></ImageVerifikasiEmail>
          <p className="text-colorText text-sm text-center">
            Kami telah mengirim email ke{' '}
            <span className="text-primary1">{registerEmail}</span> Harap
            verifikasi bahwa itu Anda
          </p>
          <p className="text-colorText text-sm text-center">
            <span className="text-primary1">Periksa folder spam</span> Anda jika
            Anda tidak melihatnya
          </p>
          <Button
            variant="primary"
            label="Kirim ulang email"
            full
            loading={isLoading}
            onClick={() => resend()}
          />
        </div>
      </div>
    </Modal>
  )
}

export default memo(VerifikasiEmail)
