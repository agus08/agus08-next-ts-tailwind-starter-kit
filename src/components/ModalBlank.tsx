import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import IconClose from '@assets/icons/icon-button-close-modal.svg'
import { Button } from '@components'
interface ModalBlankProps {
  title?: string
  closeModal: () => void
  isOpen: boolean
  children: React.ReactNode
}

const ModalBlank: FC<ModalBlankProps> = ({
  isOpen = false,
  closeModal,
  children,
  title,
}) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex min-h-full items-center justify-center text-center`}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full h-screen transform overflow-hidden rounded-lg text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className={`text-lg font-medium leading-6 text-gray-900 flex justify-between items-center absolute top-8 right-8 z-50`}
                  >
                    <span>{title}</span>
                    <Button
                      Icon={IconClose}
                      size="small"
                      variant="white"
                      onClick={closeModal}
                    />
                  </Dialog.Title>
                  {/* <div className="w-full border border-b-0 border-gray-300 my-4 "></div> */}
                  <div className={`p-0`}>{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModalBlank
