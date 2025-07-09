export default function Settings() {
  return (
    <>
    <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
    <div className="mt-6 flex flex-col">
      <div className="flex items-center justify-between pb-5 border-b border-zinc-200">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal inf</h2>
          <span className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </span>          
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border-zinc-300 text-zinc-700 hover:bg-zinc-50" >Cancel</button>
          <button type="submit" className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700" form="settings">Save</button>
        </div>
      </div>


      <form  id="settings" className="mt-6 flex-col w-full gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Oliva"
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Rhye"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Email address  
          </label>
          <input
          type="email"
          id="email"
          name="email"
          placeholder="olivia@untitledui.com"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
        <label className="block text-sm font-medium text-gray-700">Your photo</label>
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xl">
            👤
          </div>
          <div>
            <label
              htmlFor="photo-upload"
              className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline"
            >
              Click to upload
            </label>
            <input type="file" id="photo-upload" className="hidden" />
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 800×400px)</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            Role  
          </label>
          <input
          type="role"
          id="role"
          name="role"
          placeholder="Software Engineer"
          className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          id="country"
          name="country"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option>United States</option>
          <option>Brazil</option>
          <option>Australia</option>
          <option>Germany</option>
        </select>
      </div>

      {/* Timezone */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
          Timezone
        </label>
        <select
          id="timezone"
          name="timezone"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option>Pacific Standard Time (PST) UTC−08:00</option>
          <option>Brasília Time (BRT) UTC−03:00</option>
          <option>Central European Time (CET) UTC+01:00</option>
        </select>
      </div>

      {/* Bio */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-between pb-5 border-b border-zinc-200">
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Bio
        </label>
        <p className="text-sm text-gray-500 mb-1">Write a short introduction.</p>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          placeholder="I'm a Product Designer based in Melbourne..."
          className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        <p className="text-xs text-gray-400 mt-1">275 characters left</p>
      </div>


      </form>
    </div>
    </>
  );
}
