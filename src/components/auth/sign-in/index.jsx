const SignIn = () => {
  // const [agreed, setAgreed] = useState(false);
  return (
    <>
      <div className="isolate bg-white px-2 sm:py-32 lg:px-8">
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

        <form action="#" method="POST" className="mx-auto  max-w-xl sm:mt-0">
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
                  name="first-name"
                  id="first-name"
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
                  name="last-name"
                  id="last-name"
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
                  id="email"
                  autoComplete="email"
                  className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  focus:ring-0 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block font-serif text-sm font-semibold leading-6 text-gray-900"
              >
                رمز عبور
              </label>
              <div className="mt-1.5">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="given-name"
                  className="block w-full font-sans bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  focus:ring-0 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="passwordConfirm"
                className="block text-sm font-serif leading-6 text-gray-900 font-sans"
              >
                تایید رمز عبور
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  autoComplete="given-name"
                  className="block w-full bg-white rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500  focus:ring-0 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="btnGoogle w-full font-display rounded-md hover:bg-gradient-to-l  bg-gradient-to-r from-slate-50 to-slate-100 px-3.5 py-2.5 text-center text-sm font-semibold text-cyan-950 border  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="35px"
                  height="35px"
                >
                  <path d="M 50 15 C 30.681866 15 15 30.68188 15 50 C 15 69.31812 30.681866 85 50 85 C 69.318134 85 85 69.31812 85 50 C 85 30.68188 69.318134 15 50 15 z M 50 17 C 68.237254 17 83 31.762758 83 50 C 83 68.237242 68.237254 83 50 83 C 31.762746 83 17 68.237242 17 50 C 17 31.762758 31.762746 17 50 17 z M 50 21 C 33.989776 21 21 33.989776 21 50 C 21 66.010224 33.989776 79 50 79 C 56.257603 79 62.057391 77.015569 66.796875 73.642578 A 0.50005 0.50005 0 1 0 66.216797 72.828125 C 64.02537 74.387717 61.595952 75.628533 59 76.509766 L 59 67.654297 C 59 65.362555 57.875049 63.332743 56.197266 62 L 56.949219 62 C 64.125169 62 69.955078 56.217233 69.955078 49.039062 C 69.955078 45.680566 68.634131 42.648229 66.541016 40.341797 C 66.917166 38.069441 66.871804 35.037218 65.972656 32.341797 A 0.50005 0.50005 0 0 0 65.498047 32 C 60.908282 32 57.379304 35.29733 56.632812 36 L 44.166016 36 C 43.470527 35.335798 40.090535 32 35.5 32 A 0.50005 0.50005 0 0 0 35.025391 32.341797 C 34.228287 34.734105 33.953379 37.468413 34.160156 39.599609 C 31.643771 41.968046 30.046875 45.309801 30.046875 49.039062 C 30.046875 56.217233 35.876881 61.998047 43.052734 61.998047 L 44.046875 61.998047 C 42.68886 62.982838 41.623099 64.293745 41.212891 65.96875 C 40.286771 65.95965 39.243539 65.92719 38.279297 65.677734 C 37.220658 65.403858 36.304039 64.919165 35.734375 64.064453 C 34.484775 62.190053 33.555191 61.211167 32.710938 60.6875 C 31.866682 60.163833 31.1145 60.150391 30.5 60.150391 C 30.109167 60.150391 29.748902 60.250351 29.474609 60.476562 C 29.200317 60.702776 29.046002 61.048332 29.027344 61.392578 C 28.990024 62.081071 29.368159 62.786127 30.046875 63.464844 C 31.276875 64.694844 31.182109 64.565391 32.412109 67.025391 C 33.489153 69.181137 36.234373 70.834325 41 70.955078 L 41 76.513672 C 29.950742 72.766267 22 62.319434 22 50 C 22 34.530224 34.530224 22 50 22 C 65.469776 22 78 34.530224 78 50 C 78 52.885591 77.564291 55.669322 76.753906 58.287109 A 0.50005 0.50005 0 1 0 77.708984 58.582031 C 78.5486 55.869818 79 52.986409 79 50 C 79 33.989776 66.010224 21 50 21 z M 35.886719 33.068359 C 39.907048 33.268403 43.032917 36.284719 43.652344 36.865234 A 0.50005 0.50005 0 0 0 43.994141 37 L 56.796875 37 A 0.50005 0.50005 0 0 0 57.138672 36.863281 C 57.71237 36.323732 61.066829 33.276043 65.099609 33.070312 C 65.832243 35.542279 65.90584 38.369116 65.544922 40.376953 A 0.50005 0.50005 0 0 0 65.673828 40.808594 C 67.704625 42.959471 68.955078 45.849047 68.955078 49.039062 C 68.955078 55.676893 63.589269 61 56.949219 61 L 54.5 61 A 0.50005 0.50005 0 0 0 54.291016 61.955078 C 56.436878 62.938714 58 65.142453 58 67.654297 L 58 76.822266 C 55.463784 77.577774 52.783033 78 50 78 C 47.218912 78 44.535356 77.590149 42 76.835938 L 42 70.5 A 0.50005 0.50005 0 0 0 41.5 70 C 36.611467 70 34.2132 68.39393 33.306641 66.578125 C 32.076641 64.118125 31.983906 63.987813 30.753906 62.757812 C 30.202623 62.20653 30.01466 61.681273 30.027344 61.447266 C 30.033644 61.330262 30.059378 61.290897 30.111328 61.248047 C 30.163288 61.205197 30.275833 61.150391 30.5 61.150391 C 31.1145 61.150391 31.540598 61.138281 32.183594 61.537109 C 32.82659 61.935942 33.691944 62.803541 34.902344 64.619141 C 35.64968 65.740428 36.824732 66.333408 38.027344 66.644531 C 39.229955 66.955655 40.484833 66.998047 41.5 66.998047 A 0.50005 0.50005 0 0 0 41.994141 66.580078 C 42.328173 64.526464 43.842569 62.807595 45.708984 61.953125 A 0.50005 0.50005 0 0 0 45.5 60.998047 L 43.052734 60.998047 C 36.412588 60.998047 31.046875 55.676894 31.046875 49.039062 C 31.046875 45.513478 32.571391 42.361995 34.990234 40.166016 A 0.50005 0.50005 0 0 0 35.150391 39.736328 C 34.933645 37.881846 35.208061 35.307415 35.886719 33.068359 z M 36.171875 41.974609 A 0.50005 0.50005 0 0 0 35.832031 42.132812 C 34.939977 43.05849 34.246587 44.123814 33.775391 45.28125 A 0.50005 0.50005 0 1 0 34.701172 45.658203 C 35.123975 44.619639 35.746789 43.662495 36.552734 42.826172 A 0.50005 0.50005 0 0 0 36.171875 41.974609 z M 33.634766 47.021484 A 0.50005 0.50005 0 0 0 33.169922 47.449219 C 33.087872 47.969906 33.046875 48.501021 33.046875 49.039062 C 33.046875 49.567907 33.087865 50.089628 33.167969 50.597656 A 0.50005 0.50005 0 1 0 34.154297 50.441406 C 34.082397 49.985435 34.046875 49.516219 34.046875 49.039062 C 34.046875 48.553105 34.084255 48.074781 34.158203 47.605469 A 0.50005 0.50005 0 0 0 33.634766 47.021484 z M 34.195312 51.980469 A 0.50005 0.50005 0 0 0 33.726562 52.669922 C 34.985945 55.8963 37.872171 58.311364 41.373047 58.90625 A 0.50005 0.50005 0 1 0 41.539062 57.921875 C 38.389939 57.386761 35.79082 55.208262 34.658203 52.306641 A 0.50005 0.50005 0 0 0 34.195312 51.980469 z M 76.509766 59.935547 A 0.50005 0.50005 0 0 0 76.0625 60.257812 C 75.074305 62.767592 73.732636 65.099497 72.099609 67.195312 A 0.50028355 0.50028355 0 1 0 72.888672 67.810547 C 74.579645 65.640363 75.968382 63.225221 76.992188 60.625 A 0.50005 0.50005 0 0 0 76.509766 59.935547 z M 70.763672 68.988281 A 0.50005 0.50005 0 0 0 70.425781 69.152344 C 69.754741 69.867597 69.045712 70.546718 68.302734 71.189453 A 0.50005 0.50005 0 1 0 68.957031 71.945312 C 69.726054 71.280047 70.459338 70.576684 71.154297 69.835938 A 0.50005 0.50005 0 0 0 70.814453 68.988281 A 0.50005 0.50005 0 0 0 70.763672 68.988281 z" />
                </svg>
                GIT HUB
              </button>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="btnGoogle w-full    font-display rounded-md hover:bg-gradient-to-l   bg-gradient-to-r from-purple-500 to-pink-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="30px"
                  height="30px"
                >
                  <path
                    fill="#f9e65c"
                    d="M84.467,44H50v13h20.856C67.931,65.717,59.702,72,50,72c-12.15,0-22-9.85-22-22s9.85-22,22-22	c4.799,0,9.235,1.541,12.851,4.149l9.269-9.269C66.091,17.956,58.391,15,50,15c-19.33,0-35,15.67-35,35s15.67,35,35,35	s35-15.67,35-35C85,47.952,84.806,45.951,84.467,44z"
                  />
                  <path
                    fill="#78a2d2"
                    d="M50,57h20.856c-1.577,4.699-4.704,8.679-8.763,11.36l9.87,8.884C79.911,70.828,85,61.01,85,50	c0-2.048-0.194-4.049-0.533-6H50V57z"
                  />
                  <path
                    fill="#60be92"
                    d="M62.093,68.36C58.622,70.653,54.472,72,50,72c-8.997,0-16.727-5.403-20.137-13.139L18.818,65.89	C24.609,77.23,36.393,85,50,85c8.32,0,15.957-2.908,21.963-7.756L62.093,68.36z"
                  />
                  <path
                    fill="#f15b6c"
                    d="M29.677,41.569C32.985,33.603,40.837,28,50,28c4.799,0,9.235,1.541,12.851,4.149l9.269-9.269	C66.091,17.956,58.391,15,50,15c-13.772,0-25.681,7.958-31.394,19.524L29.677,41.569z"
                  />
                  <path
                    fill="#1f212b"
                    d="M50,86c-19.851,0-36-16.149-36-36s16.149-36,36-36c8.271,0,16.353,2.878,22.753,8.105	c0.219,0.179,0.352,0.442,0.366,0.724c0.014,0.282-0.092,0.558-0.292,0.757l-9.269,9.269c-0.347,0.347-0.895,0.391-1.292,0.104	C58.675,30.369,54.433,29,50,29c-11.579,0-21,9.42-21,21s9.421,21,21,21c8.563,0,16.196-5.168,19.417-13H50c-0.553,0-1-0.448-1-1V44	c0-0.552,0.447-1,1-1h34.467c0.486,0,0.902,0.35,0.985,0.829C85.815,45.922,86,47.999,86,50C86,69.851,69.851,86,50,86z M50,16	c-18.748,0-34,15.252-34,34s15.252,34,34,34s34-15.252,34-34c0-1.624-0.129-3.302-0.384-5H51v11h19.856	c0.322,0,0.624,0.155,0.812,0.416c0.188,0.261,0.239,0.597,0.137,0.902C68.657,66.698,59.895,73,50,73c-12.683,0-23-10.318-23-23	s10.317-23,23-23c4.569,0,8.954,1.329,12.735,3.851l7.883-7.883C64.72,18.467,57.442,16,50,16z"
                  />
                  <path
                    fill="#1f212b"
                    d="M71.5,78c-0.119,0-0.239-0.042-0.335-0.128l-4-3.6c-0.205-0.185-0.222-0.501-0.037-0.706	c0.187-0.205,0.502-0.221,0.707-0.037l4,3.6c0.205,0.185,0.222,0.501,0.037,0.706C71.772,77.944,71.637,78,71.5,78z"
                  />
                  <path
                    fill="#1f212b"
                    d="M65.5,72.6c-0.119,0-0.239-0.042-0.335-0.128l-1.777-1.6c-0.205-0.185-0.222-0.501-0.037-0.706	c0.187-0.205,0.502-0.221,0.707-0.037l1.777,1.6c0.205,0.185,0.222,0.501,0.037,0.706C65.772,72.544,65.637,72.6,65.5,72.6z"
                  />
                  <path
                    fill="#1f212b"
                    d="M27.929,60c-0.165,0-0.326-0.082-0.422-0.231c-0.148-0.233-0.079-0.542,0.153-0.69l1.571-1	c0.231-0.146,0.541-0.08,0.69,0.153c0.148,0.233,0.079,0.542-0.153,0.69l-1.571,1C28.114,59.975,28.021,60,27.929,60z"
                  />
                  <path
                    fill="#1f212b"
                    d="M23.5,62.818c-0.165,0-0.326-0.082-0.422-0.231c-0.148-0.233-0.079-0.542,0.153-0.69l2-1.273	c0.231-0.146,0.541-0.081,0.69,0.153c0.148,0.233,0.079,0.542-0.153,0.69l-2,1.273C23.686,62.793,23.593,62.818,23.5,62.818z"
                  />
                  <path
                    fill="#1f212b"
                    d="M18.5,66c-0.165,0-0.326-0.082-0.422-0.231c-0.148-0.233-0.079-0.542,0.153-0.69l3-1.909	c0.23-0.146,0.541-0.08,0.69,0.153c0.148,0.233,0.079,0.542-0.153,0.69l-3,1.909C18.686,65.975,18.593,66,18.5,66z"
                  />
                  <path
                    fill="#1f212b"
                    d="M24.5,38.182c-0.093,0-0.186-0.025-0.269-0.078l-5-3.182c-0.232-0.148-0.302-0.458-0.153-0.69	c0.149-0.233,0.46-0.299,0.69-0.153l5,3.182c0.232,0.148,0.302,0.458,0.153,0.69C24.826,38.1,24.665,38.182,24.5,38.182z"
                  />
                  <path
                    fill="#1f212b"
                    d="M27.5,40.091c-0.093,0-0.186-0.025-0.269-0.078l-1-0.636c-0.232-0.148-0.302-0.458-0.153-0.69	c0.15-0.233,0.46-0.299,0.69-0.153l1,0.636c0.232,0.148,0.302,0.458,0.153,0.69C27.826,40.009,27.665,40.091,27.5,40.091z"
                  />
                </svg>
                GOOGLE
              </button>
            </div>
          </div>
          <div className="mx-auto px-0 max-w-2xl my-0 text-center mt-3">
            <button
              href="/sign-in"
              className="my-2 w-full font-display rounded-md bg-indigo-200 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </button>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full font-display rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ثبت اطلاعات
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
