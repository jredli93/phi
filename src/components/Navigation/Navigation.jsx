import React from 'react';

function Navigation() {
  return (
    <div class="bg-stone-900 sticky top-0 lg:h-[8vh]">
      <nav class="flex mx-auto max-w-screen-xl h-full items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/assets/images/logo.png" width="36px" height="54px" class="w-9" alt="logo" />
        </div>
        <div class="block lg:hidden">
          <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <a
              href="#about"
              class="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
            >
              About Me
            </a>
            <a
              href="#faq"
              class="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
            >
              Faq
            </a>
            <a
              href="#gallery"
              class="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
            >
              Gallery
            </a>
            <a
              href="#pricing"
              class="block mt-4 lg:inline-block lg:mt-0 text-neutral-50 hover:text-white mr-4"
            >
              Pricing
            </a>
          </div>
          <div class="transition-all border border-solid border-slate-50 rounded-md hover:border-gold-600 hover:text-gold-500 hover:bg-gold-500">
            <a
              href="#contact"
              class="inline-block text-sm px-4 py-2 leading-none border border-gray-50 rounded text-slate-50 mt-4 lg:mt-0"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
