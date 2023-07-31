import React, { memo, useState } from 'react'
import { Navbar, Topbar, Footer } from '@components'
import Register from '@layouts/Auth/Register'
import Login from '@layouts/Auth/Login'
import VerifikasiEmail from '@layouts/Auth/EmailVerifSent'
import Head from 'next/head'
import globalStore from '@store'
import { useEffect } from 'react'
import ForgotPassword from '@layouts/Auth/ForgotPassword'

interface IBaseLayout {
  topbar?: boolean
  navbar?: boolean
  footer?: boolean
  children?: React.ReactNode
  withPadding?: boolean
}

const BaseLayout: React.FC<IBaseLayout> = ({
  children,
  topbar = true,
  navbar = true,
  footer = true,
  withPadding = false,
}) => {
  const [verifikasiEmail, setVerifikasiEmail] = useState(false)
  const [showFP, setShowFP] = useState(false)
  const [
    setShowModalRegister,
    showModalRegister,
    registerEmail,
    showModalLogin,
    setShowModalLogin,
  ] = globalStore((s) => [
    s.setShowModalRegister,
    s.showModalRegister,
    s.registerEmail,
    s.showModalLogin,
    s.setShowModalLogin,
  ])

  useEffect(() => {
    if (registerEmail && !verifikasiEmail) setVerifikasiEmail(true)
  }, [registerEmail, verifikasiEmail])


  return (
    <div className="w-full relative flex bg-white flex-col">
      <Head>
        <title>[appname]</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCI88NurJi5-t155LF8-7UAeX22ZJx77fM&libraries=places`}
          async
        ></script>
      </Head>
      <div className={`${topbar ? 'block' : 'hidden'} sticky top-0 z-20`}>
        <Topbar></Topbar>
      </div>
      <div
        className={`${navbar ? 'block' : 'hidden'} sticky top-12 border-b z-20`}
      >
        <Navbar
          register={() => setShowModalRegister(true)}
          login={() => setShowModalLogin(true)}
        ></Navbar>
      </div>
      <div className={`h-full ${withPadding ? 'px-10' : 'px-0'}`}>
        {children}
      </div>
      <div className={`${footer ? 'block' : 'hidden'}`}>
        <Footer></Footer>
      </div>
      <Register
        verifikasiEmail={() => setVerifikasiEmail(true)}
        openLogin={() => setShowModalLogin(true)}
        isOpen={showModalRegister || false}
        closeModal={() => setShowModalRegister(false)}
      ></Register>
      <VerifikasiEmail
        isOpen={verifikasiEmail}
        closeModal={() => setVerifikasiEmail(false)}
      ></VerifikasiEmail>
      <Login
        isOpen={showModalLogin || false}
        closeModal={() => setShowModalLogin(false)}
        showForgotPassword={() => setShowFP(true)}
      ></Login>
      <ForgotPassword
        isOpen={showFP}
        closeModal={() => {
          setShowFP(false)
        }}
      />
    </div>
  )
}

export default memo(BaseLayout)
