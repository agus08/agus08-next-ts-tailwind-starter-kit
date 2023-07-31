import React from 'react'
import IconEmail from '@assets/icons/icon-email.svg'
import IconTelepon from '@assets/icons/icon-number.svg'
import IconLinkedin from '@assets/icons/icon-linkedin.svg'
import IconInstagram from '@assets/icons/icon-instagram.svg'
import IconFacebook from '@assets/icons/icon-facebook.svg'
import AssetsFooter from '@assets/images/assetFooter.svg'
const Footer = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto p-10">
      <div className="w-full flex flex-row gap-10 justify-between items-center">
        <div className="flex flex-col max-w-xs container  justify-between space-y-10">
          Logo here
          <div className="space-y-2">
            <div className="flex flex-row gap-3">
              <IconEmail></IconEmail>
              <p>hello@[appdomain]</p>
            </div>
            <div className="flex flex-row gap-3">
              <IconTelepon></IconTelepon>
              <p>[companynumber]</p>
            </div>
          </div>
          <p className="underline text-primary1">
            [companyaddress]
          </p>
          <div className="w-full  flex justify-around">
            sponsor here
          </div>
        </div>
        <div className="flex flex-row gap-10 justify-start">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-primary1">[appname]</p>
            <div className="text-primary1 flex flex-col gap-2">
              <p>Tentang [appname]</p>
              <p>Affiliate Program</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-primary1">Karir</p>
            <div className="text-primary1 flex flex-col gap-2">
              <p>Karir</p>
              <p>Acara</p>
              <p>Inspirasi</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-medium text-primary1">
              Bantuan dan Panduan
            </p>
            <div className="text-primary1 flex flex-col gap-2">
              <p>Kebijakan Privasi </p>
              <p>[appname] Care</p>
              <p>Syarat dan ketentuan</p>
            </div>
          </div>
        </div>
        <div className="">
          <AssetsFooter></AssetsFooter>
        </div>
      </div>
      <div className="w-full border  border-primary1"></div>
      <div className="w-full flex pt-2  justify-between flex-row">
        <p className="text-sm  text-primary1">
          © [appyear] [appname] | [companyname]
        </p>
        <div className="space-x-5 flex flex-row">
          <IconLinkedin></IconLinkedin>
          <IconInstagram></IconInstagram>
          <IconFacebook></IconFacebook>
        </div>
      </div>
    </div>
  )
}

export default Footer
