import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export const Textarea = (props: TextareaProps) => {
  return (
    <textarea
      className="min-h-32 w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
