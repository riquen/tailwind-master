import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export const InputPrefix = (props: InputPrefixProps) => {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export const InputControl = (props: InputControlProps) => {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export const InputRoot = (props: InputRootProps) => {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  )
}
