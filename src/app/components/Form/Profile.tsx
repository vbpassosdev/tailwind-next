"use client";

export default function Profile() {
  return (
    <>
    <h1 className="text-3xl font-medium text-zinc-900">Profile</h1>
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Teste</h2>
          <span className="text-sm text-zinc-500">
            teste
          </span>          
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50" >Cancel</button>
          <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700" form="settings">Save</button>
        </div>
      </div>


      <form  id="settings" className="mt-6 flex-col w-full gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
          <h1>Profile</h1>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
          <h2>Vanessa</h2>
        </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
        <h3>Passos</h3>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
          <p>Vanessa Passos</p>
        </div>


      </form>
    </div>
    </>
  );
}
