const Home = ({ user }) => {
  return (
    <>
      <div className="isolate h-100vh bg-white px-2 sm:py-32 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <form className="mx-auto  h-100 max-w-xl sm:mt-0">
          <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block font-serif text-sm font-semibold leading-6 text-gray-900"
              >
                نام
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  name="givenName"
                  id="first-name"
                  readOnly={true}
                  value={user?.givenName}
                  autoComplete="given-name"
                  className="block w-full font-sans bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  focus:ring-0 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-serif leading-6 text-gray-900 font-sans"
              >
                نام خانوادگی
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  name="familyName"
                  id="last-name"
                  readOnly={true}
                  value={user.familyName}
                  autoComplete="given-name"
                  className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  focus:ring-0 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="displayName"
                className="block text-sm font-serif leading-6 text-gray-900"
              >
                نام کاربری
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="displayName"
                  id="displayName"
                  readOnly={true}
                  value={user.displayName}
                  autoComplete="organization"
                  className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  focus:ring-0 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-serif leading-6 text-gray-900"
              >
                ایمیل
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  readOnly={true}
                  value={user.email}
                  id="email"
                  autoComplete="email"
                  className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  focus:ring-0 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
