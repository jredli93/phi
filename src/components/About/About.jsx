import React from 'react';

function About() {
  return (
    <section id="about">
      <div class="mx-auto max-w-screen-xl py-32">
        <h1 className="text-8xl font-semibold leading-tight text-stone-800 text-center">
          About Me
        </h1>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="bg-aboutPattern p-8 md:order-last md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-6xl font-bold text-slate-50 md:text-5xl">
                About Me
              </h2>
              <p class="text-slate-100 mt-3">
                My name is Jelena Isajlovic- Lela. I am certified PhiAcademy
                artist in BoldBrows and PowderBrowse technique... After a years
                working as a anesthesia nurse I decide is time for a change. I
                wonted to help people and make them happy but in another way. In
                that time I met my master Boiana and she opened me the door of
                PhiAcademy and beauty industry. I fell in love with brows And
                now I am here helping women's to get the get they life easer and
                feel confident.
              </p>
              <div class="mt-4 md:mt-8">
                <a
                  href="#gallery"
                  class="inline-block rounded border border-slate-50 bg-slate-800 px-12 py-3 text-sm font-medium text-gold-600 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Gallery
                </a>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <img
              alt="Student"
              src="/assets/images/aboutMe.jpg"
              class="h-40 w-full object-cover sm:h-56 md:h-full"
            />

            <img
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
