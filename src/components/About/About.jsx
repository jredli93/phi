import React from 'react';

function About() {
  return (
    <section id="about">
      <div class="mx-auto max-w-screen-xl py-32">
        <h1 className="text-8xl font-semibold leading-tight text-stone-800 text-center">
          About Me
        </h1>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div class="bg-stone-900 p-8 md:order-last md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center">
              <h2 class="text-6xl font-bold text-slate-50 md:text-5xl">
                Catering to people’s health, both physical and mental, has been
                my professional commitment for years.
              </h2>
              <p class="text-slate-100 mt-3">
                As a medical worker, working across multiple healthcare
                settings, I realized that the famous saying:”A healthy person
                has 1000 wishes…” holds so much truth. For many of us, those
                wishes would revolve around satisfaction of self-image we
                perceive form our own mirror reflection! When we like what we
                see in the mirror reflection, we believe that the whole World is
                ours, right? That's the discovery that has changed my life. I
                found my new vocation, my mission, goal, career commitment, and
                everything is this line with my habit of helping people feel
                better, healthier, and let's add more beautiful. Miami, the
                United States capital of beauty and vibrant living gave me an
                opportunity to learn and master my craft of permanent makeup and
                facial enhancements. If you are willing to place your trust in
                me and my craft, together we can bring you the satisfaction of
                looking at your own reflection and loving it. Hi,
              </p>
              <p class="hidden text-slate-100 sm:mt-4 sm:block">
                I'm Jelena, a proud representative of Phi Academy, and below you
                can see some of my works.
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
