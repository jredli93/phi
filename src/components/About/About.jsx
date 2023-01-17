import React from 'react';

function About() {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl py-32">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            class="bg-stone-900 p-8 md:order-last md:p-12 lg:px-16 lg:py-24"
          >
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-6xl font-bold text-slate-50 md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p class="hidden text-slate-100 sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>

              <div class="mt-4 md:mt-8">
                <a
                  href="#"
                  class="inline-block rounded border border-slate-50 bg-slate-800 px-12 py-3 text-sm font-medium text-gold-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="300"
              alt="Student"
              src="/assets/images/aboutMe.jpg"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-duration="300"
              data-aos-delay="150"
              alt="Student"
              src="/assets/images/aboutMeSecond.jpg"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
