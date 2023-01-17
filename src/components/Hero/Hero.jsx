import React from 'react';

function Hero() {
  return (
    <section class="bg-gray-50 bg-pattern">
      <div class="mx-auto max-w-screen-xl py-32 lg:flex lg:h-[92vh] lg:items-center">
        <div class="mx-auto max-w-xl text-center">
          <h1
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
          >
            Understand User Flow.
            <span class="text-stone-400 drop-shadow-md sm:block">
              Increase Conversion.
            </span>
          </h1>

          <p
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            class="mt-4 sm:text-xl sm:leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div
            data-aos="flip-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="450"
            class="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              class="block w-full rounded bg-gold-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gold-600 focus:outline-none focus:ring active:bg-gold-500 sm:w-auto"
              href="/get-started"
            >
              Get Started
            </a>

            <a
              class="block w-full border-solid border border-stone-900 hover:border-stone-700 rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
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
