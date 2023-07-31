import React, { Fragment } from 'react'
import { Button } from '@components'
import sessions from '@helpers/sessions'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import IconBeta from '@assets/icons/icon-beta.svg'
interface INavbar {
  register?: () => void
  login?: () => void
}

const Navbar: React.FC<INavbar> = ({ register, login }) => {
  const isSigned = !!sessions.getToken()
  const router = useRouter()

  return (
    <div className="w-full items-center py-3 bg-white px-10 flex">
      <Link href="/" className="w-full">
        <div className="cursor-pointer flex flex-row gap-2 items-center">
          Logo
          <span>
            <IconBeta />
          </span>
        </div>
      </Link>
      <div className="w-full flex justify-end  ">
        <div className="flex flex-row items-center gap-6">
          <button className="bg-bgWarning p-2 rounded-lg text-warning">
            Become Merchant
          </button>
          <span className="h-full border"></span>
          {isSigned ? (
            <div className="flex flex-row gap-5 items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div className="flex h-full items-center">
                  <Menu.Button>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute -right-1 w-40 mt-8 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 divide-y">
                      <Menu.Item disabled>
                        {({ active }) => (
                          <button
                            className={`${active
                              ? 'bg-primary text-primary1'
                              : 'text-gray-300'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Profile
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item disabled>
                        {({ active }) => (
                          <button
                            className={`${active
                              ? 'bg-primary text-primary2'
                              : 'text-gray-300'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Wishlist
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => router.push(`/me/transactions`)}
                            className={`${active
                              ? 'bg-primary text-primary2'
                              : 'text-gray-900'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            List Transaksi
                          </button>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={`${active
                              ? 'bg-primary text-red-700'
                              : 'text-red-500'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                            onClick={() => sessions.logout()}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <>
              <Button label="Login" variant="outline" onClick={login}></Button>
              <Button
                label="Register"
                variant="primary"
                onClick={register}
              ></Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
