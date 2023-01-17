import React from 'react';

function Pricing() {
  return (
    <section className="mx-auto max-w-screen-xl py-32 dark:text-gray-100">
      <div className="container mx-auto sm:p-10">
        <div
          className="mb-12 space-y-4 text-center"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
        >
          <h1 className="text-8xl font-semibold leading-tight text-stone-800">
            Pricing
          </h1>

          <h1 className="text-semibold text-stone-700 text-size-2xl">TEST</h1>

          <p className="px-4 text-stone-700 sm:px-8 lg:px-24">
            Sunt suscipit eaque qui iure unde labore numquam iusto alias
            explicabo, pariatur ipsam, cupiditate aliquid modi?
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full"
        >
          <div className="flex flex-col overflow-hidden border-solid border-2 rounded-md dark:dark:border-gray-700">
            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:dark:bg-gray-800">
              <p className="text-lg font-medium">Powder Brows</p>
              <p className="text-5xl font-bold">
                500$
                {/* <span className="text-xl dark:dark:text-gray-400"> /mo</span> */}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 py-8 dark:dark:bg-gray-900">
              <p class="text-slate-50">
                PowderBrows is a semi-permanent make-up technique in which
                pigment is placed under the skin with permanent make-up machine
                . This gives your eyebrows a very natural, soft powder, pixel
                effect. The powderbrow technique is suitable for all skin types
                and has a long shelf life. Save time in the morning, get up with
                a make-up look.
              </p>
              <ul className="self-stretch flex-1 space-y-2">
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
              </ul>
              <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:dark:bg-gold-400 dark:dark:text-gray-900">
                Sign up
              </button>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-aos-delay="100"
            className="flex flex-col overflow-hidden border-solid border-2 rounded-md dark:dark:border-gold-400"
          >
            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:dark:bg-gray-800">
              <p className="text-lg font-medium">Professional</p>
              <p className="text-5xl font-bold">
                8€
                <span className="text-xl dark:dark:text-gray-400"> /mo</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 py-8 dark:dark:bg-gray-900">
              <ul className="self-stretch flex-1 space-y-2">
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
              </ul>
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:dark:bg-gold-400 dark:dark:text-gray-900">
                Sign up
              </button>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-aos-delay="150"
            className="flex flex-col overflow-hidden border-solid border-2 rounded-md dark:dark:border-gray-700"
          >
            <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4 dark:dark:bg-gray-800">
              <p className="text-lg font-medium">Enterprise</p>
              <p className="text-5xl font-bold">
                19€
                <span className="text-xl dark:dark:text-gray-400"> /mo</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center px-2 py-8 dark:dark:bg-gray-900">
              <ul className="self-stretch flex-1 space-y-2">
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
                <li className="flex justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 dark:dark:text-gold-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <span>Lumet consectetur adipisicing</span>
                </li>
              </ul>
              <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:dark:bg-gold-400 dark:dark:text-gray-900">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
