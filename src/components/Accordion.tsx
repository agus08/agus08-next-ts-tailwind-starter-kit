import { FC, useState } from 'react'
import IconArrowCircleDown from '@assets/icons/icon-arrow-circle-down.svg'

interface AccordionProps {
  title: string
  step: string[]
}
const Accordion: FC<AccordionProps> = ({ title, step }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-3 w-full">
      <div
        className="flex flex-row justify-between p-3 bg-white 
      items-center
      rounded-md"
        onClick={() => setOpen(!open)}
      >
        <h6>{title}</h6>
        <span>
          <IconArrowCircleDown />
        </span>
      </div>
      <div className="bg-white p-3">
        <ul>
          {step.map((s, i) => (
            <span key={`step-${i}`}>{s}</span>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Accordion
