import { Popover } from '@headlessui/react'
import IconInfoCircle from '@assets/icons/icon-info-circle.svg'
const TooltipInfo = () => {
  return (
    <Popover className="">
      <Popover.Button>
        <IconInfoCircle />
      </Popover.Button>

      <Popover.Panel className="absolute z-10 top-0 right-0">
        <div className="flex flex-col gap-2 bg-white p-3 rounded-lg border">
          <h3 className="font-semibold text-small">
            Layanan Pencarian Lokasi oleh [appname]
          </h3>
          <p className="text-small text-colorText">
            [appname] dapat membantu kamu untuk mencari lokasi yang tepat,
            potensial, dan strategis untuk bisnis kamu.
          </p>
        </div>
      </Popover.Panel>
    </Popover>
  )
}

export default TooltipInfo
