import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export const Control = (props: ControlProps) => {
  return <input className="sr-only" id="photo" type="file" {...props} />
}
