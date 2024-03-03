import { LogOut } from 'lucide-react'

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        className="h-10 w-10 rounded-full"
        src="https://github.com/riquen.png"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Henrique Nunes
        </span>
        <span className="truncate text-sm text-zinc-500">
          henri.arantes1@gmail.com
        </span>
      </div>
      <button className="ml-auto rounded-md p-2 hover:bg-zinc-50" type="button">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
