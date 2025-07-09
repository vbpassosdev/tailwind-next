import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://avatars.githubusercontent.com/u/178447135?s=400&u=4cfd3ae50c84e6e8e1ab4bbf46cb6478545a624f&v=4"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Vanessa Passos
        </span>
        <span className="truncate text-sm text-zinc-500">
          passos.vanessa@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
