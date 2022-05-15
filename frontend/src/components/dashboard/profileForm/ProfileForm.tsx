import React from "react";

const ProfileForm = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex-auto w-full lg:w-1/4 lg:pr-4">
        <div className="relative flex flex-col mb-8 text-gray-500 bg-white shadow-shadow rounded-xl">
          <div className="flex justify-between flex-auto p-6 pb-0">
            <div className="header-title">
              <h4 className="text-2xl font-medium text-dark">
                Khadetou Dianifabe
              </h4>
            </div>
          </div>
          <div className="p-6">
            <form>
              <div className="mb-4">
                <div className="relative">
                  <div className="w-24 flex items-center justify-center h-24 rounded-full bg-blue-700">
                    <h1 className="text-base font-bold text-white">KD</h1>
                  </div>

                  <div className="image-upload absolute cursor-pointer top-auto w-8 h-8 text-center bg-dark-pink border-2 focus:ring-0-4 border-white focus:ring-0-white rounded-full left-16 -bottom-2">
                    <label htmlFor="file-input">
                      <svg
                        className="inline-block pb-1"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                        ></path>
                      </svg>
                    </label>
                    <input
                      id="file-input"
                      className="hidden file-upload"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </div>
                <div className="mt-4 ">
                  <div className="items-center inline-block">
                    <span>Only</span>
                    <a
                      href="javascript:void();"
                      className="text-blue-400 hover:text-dark-pink"
                    >
                      .jpg
                    </a>
                    <a
                      href="javascript:void();"
                      className="text-blue-400 hover:text-dark-pink"
                    >
                      .png
                    </a>
                    <a
                      href="javascript:void();"
                      className="text-blue-400 hover:text-dark-pink"
                    >
                      .jpeg
                    </a>
                    <span>allowed</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm font-normal text-gray">Number Phone</p>
                <h1 className="text-base font-bold text-dark">
                  +221 786004564
                </h1>
              </div>
              <div className="mb-4">
                <p className="text-sm font-normal text-gray">Email</p>
                <h1 className="text-base font-bold text-dark">
                  khadetou96@gmail.com
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex-auto w-full lg:w-3/4 lg:pl-4 ">
        <div className="relative flex flex-col mb-8 text-gray-500 bg-white shadow-shadow rounded-xl">
          <div className="flex justify-between flex-auto p-6 pb-0">
            <div className="header-title">
              <h4 className="text-2xl font-medium text-dark">
                Upadate Profile
              </h4>
            </div>
          </div>
          <div className="p-6 ">
            <div>
              <form>
                <div className="flex flex-wrap">
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pr-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="fname"
                    >
                      First Name:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="fname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pl-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="lname"
                    >
                      Last Name:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="lname"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="mb-4 md:w-2/4 md:flex-auto md:pr-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="mobno"
                    >
                      Mobile Number:
                    </label>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="mobno"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pl-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-4 md:w-2/4 md:flex-auto md:pr-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="pass"
                    >
                      Password:
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="pass"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4 md:w-2/4 md:flex-auto md:pl-3 ">
                    <label
                      className="inline-block mb-2 text-gray-500"
                      htmlFor="rpass"
                    >
                      Repeat Password:
                    </label>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 placeholder-gray-600 text-base font-normal bg-white border focus:ring-0 rounded outline-none focus:border-dark-pink focus:shadow"
                      id="rpass"
                      placeholder="Repeat Password "
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-block p-2 px-6 py-2 text-base font-normal  text-center text-white transition-all duration-500 ease-in-out bg-dark-pink border focus:ring-0  focus:ring-0-dark-pink rounded-md shadow-md hover:shadow-md hover:bg-pink-800 hover:text-white"
                >
                  Upadete User infos
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
