import React from 'react';
import { FaBeer } from 'react-icons/fa/index';
import { SlCrop } from 'react-icons/sl/index';

function Pricing() {
  return (
    <div
      class="bg-darkPattern bg-cover xl:p-20 relative z-10 w-full lg:px-8 mt-12"
      id="pricing"
    >
      <h1 className="text-8xl font-semibold leading-tight text-slate-50 text-center">
        Pemanent Makeup Services
      </h1>

      <div class="mx-auto max-w-screen-xl grid-cols-1 sm:grid md:grid-cols-3 ">
        <div class="mx-3 mt-6 flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <img class="aspect-[3/3.5]" src="/assets/images/phi20.jpeg" />
          <div class="p-6">
            <h3 class="mb-2 text-5xl font-medium text-neutral-800 dark:text-neutral-50">
              Powder Brows
            </h3>

            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              PowderBrows is a semi-permanent make-up technique in which pigment
              is placed under the skin with permanent make-up machine . This
              gives your eyebrows a very natural, soft powder, pixel effect. The
              powderbrow technique is suitable for all skin types and has a long
              shelf life. Save time in the morning, get up with a make-up look.
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
            <small>Duration up to 3h</small>
          </div>
        </div>
        <div class="mx-3 mt-6 flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <img class="aspect-[3/3.5]" src="/assets/images/phi6.jpeg" />
          <div class="p-6">
            <h3 class="mb-2 text-5xl font-medium text-neutral-800 dark:text-neutral-50">
              Bold Brows
            </h3>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              BoldBrows treatment provides a hyper-realistic eyebrow look. The
              BoldBrows technique is based on following the natural direction of
              hair growth. Colour pigment is chosen to match your natural
              colour, creating the most natural look possible. the BoldBrows
              technique gives the eyebrows a much fuller volume. Microblading
              technique is suitable for normal and dry skin.
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
            <small>Duration up to 2-3h</small>
          </div>
        </div>
        <div class="mx-3 mt-6 flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <img class="aspect-[3/3.5]" src="/assets/images/phi7.jpeg" />
          <div class="p-6">
            <h3 class="mb-2 text-5xl font-medium text-neutral-800 dark:text-neutral-50">
              Microblading and shading combination
            </h3>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Microblading and shading combination is perfect for you if you
              have little or no eyebrow hair. Combo adds powdered effect between
              the microbladed hair stroke to achieve softer and fuller brows.
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
            <small>Duration up to 3h</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
