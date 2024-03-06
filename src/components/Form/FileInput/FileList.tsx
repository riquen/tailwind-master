'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export const FileList = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(({ name, size }) => (
        <FileItem key={name} state="complete" name={name} size={size} />
      ))}
    </div>
  )
}
