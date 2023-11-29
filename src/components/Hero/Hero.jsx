import React from 'react';

function Hero() {
  return (
    <section class="bg-gray-50 bg-pattern bg-cover h-[91vh]">
      <div class="mx-auto max-w-screen-xl py-32 lg:flex lg:h-[91vh] lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <img class="mx-auto" width={350} src="/assets/images/logo.png" />
          <p class="mt-4 sm:text-xl sm:leading-relaxed">
            Welcome to Magnificent Beauty, where we specialized in providing
            profesional permanent makeup and Micronnedeling services, ensuring
            you look and feel your best.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block  rounded bg-gold-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gold-600 focus:outline-none focus:ring active:bg-gold-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block  border-solid border border-stone-900 hover:border-stone-700 rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
