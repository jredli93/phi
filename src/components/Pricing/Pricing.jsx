import React from 'react';
import { FaBeer } from 'react-icons/fa/index';
import { SlCrop } from 'react-icons/sl/index';

function Pricing() {
  return (
    <div class="relative z-10 w-full lg:px-8 my-12" id="pricing">
      <h1
        className="text-8xl font-semibold leading-tight text-stone-800 text-center"
      >
        Pricing
      </h1>
      <div class="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-3 lg:gap-4">
        <div class="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
          <div class="p-8 sm:p-10">
            <h3
              class="text-lg font-semibold leading-8 tracking-tight text-blue-600"
              id="tier-hobby"
            >
              Powder Brows
            </h3>
            <div class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
              $500
              {/* <span class="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                /touch up after 6 weeks, 100$
              </span> */}
            </div>
            <p class="mt-6 text-base leading-7 text-gray-600">
              PowdwrBrows PowderBrows is a semi-permanent make-up technique in
              which pigment is placed under the skin with permanent make-up
              machine . This gives your eyebrows a very natural, soft powder,
              pixel effect. The powderbrow technique is suitable for all skin
              types and has a long shelf life. Save time in the morning, get up
              with a make-up look
            </p>
          </div>
          <div class="flex flex-1 flex-col p-2">
            <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
              <ul role="list" class="space-y-6">
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <FaBeer />
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Duration up to 3h
                  </p>
                </li>

                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <SlCrop />
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Including up to 6 weeks touch up
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Touch up after 6 weeks is 100$
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Private Bookmarks (via DMs) 🚧{' '}
                  </p>
                </li>
              </ul>
              <div class="mt-8">
                <a
                  href="/login"
                  class="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                  aria-describedby="tier-team"
                >
                  Get started today
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
          <div class="p-8 sm:p-10">
            <h3
              class="text-lg font-semibold leading-8 tracking-tight text-blue-600"
              id="tier-team"
            >
              Pro
            </h3>
            <div class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
              $6
              <span class="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                /mo
              </span>
            </div>
            <p class="mt-6 text-base leading-7 text-gray-600">
              For those who expect more.
            </p>
          </div>
          <div class="flex flex-1 flex-col p-2">
            <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
              <ul role="list" class="space-y-6">
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Bookmark Favorites
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Manage and Filter Tags
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Filter by Authors
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Import Bookmarks from Twitter
                  </p>
                </li>
              </ul>
              <div class="mt-8">
                <a
                  href="/billing"
                  class="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                  aria-describedby="tier-team"
                >
                  Get started today
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
          <div class="p-8 sm:p-10">
            <h3
              class="text-lg font-semibold leading-8 tracking-tight text-blue-600"
              id="tier-team"
            >
              Pro
            </h3>
            <div class="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
              $6
              <span class="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                /mo
              </span>
            </div>
            <p class="mt-6 text-base leading-7 text-gray-600">
              For those who expect more.
            </p>
          </div>
          <div class="flex flex-1 flex-col p-2">
            <div class="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
              <ul role="list" class="space-y-6">
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Bookmark Favorites
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Manage and Filter Tags
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Filter by Authors
                  </p>
                </li>
                <li class="flex items-start">
                  <div class="flex-shrink-0">
                    <svg
                      class="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      ></path>
                    </svg>
                  </div>
                  <p class="ml-3 text-sm leading-6 text-gray-600">
                    Import Bookmarks from Twitter
                  </p>
                </li>
              </ul>
              <div class="mt-8">
                <a
                  href="/billing"
                  class="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                  aria-describedby="tier-team"
                >
                  Get started today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
