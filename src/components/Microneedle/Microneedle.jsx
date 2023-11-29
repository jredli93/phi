import React from 'react';
import { FaBeer } from 'react-icons/fa/index';
import { SlCrop } from 'react-icons/sl/index';

function Microneedle() {
  return (
    <div
      class="bg-pattern bg-cover xl:p-20 relative z-10 w-full lg:px-8"
      id="pricing"
    >
      <h1 className="text-8xl font-semibold leading-tight text-stone-800 text-center">
        Microneedeling
      </h1>

      <div class="mx-auto max-w-screen-xl grid-cols-1 sm:grid md:grid-cols-3 ">
        <div class="mx-3 mt-6 flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
          <img class="aspect-[3/3.5]" src="/assets/images/phi20.jpeg" />
          <div class="p-6">
            <h3 class="mb-2 text-5xl font-medium text-neutral-800 dark:text-slate-900">
              Micronnedeling for Hair Growth
            </h3>

            <p class="mb-4 text-base text-neutral-600 dark:text-slate-900">
              This process stimulates the production of collagen and increases
              blood circulation, promoting hair growthMicroneedling hair growth
              treatment is suitable for both men and women experiencing hair
              thinning or hair loss. It is a non-invasive procedure that
              requires minimal downtime, making it a convenient option for those
              with busy lifestyles. Multiple sessions are required to achieve
              optimal results
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-slate-900">
            <small>Duration up to 1.5h</small>
          </div>
        </div>
        <div class="mx-3 mt-6 flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
          <img class="aspect-[3/3.5]" src="/assets/images/phi6.jpeg" />
          <div class="p-6">
            <h3 class="mb-2 text-5xl font-medium text-neutral-800 dark:text-slate-900">
              Scare or Stretch Mark Micronnedeling
            </h3>
            <p class="mb-4 text-base text-neutral-600 dark:text-slate-900">
              Microneedling works by creating controlled micro-injuries on the
              skin's surface, stimulating collagen production and promoting skin
              rejuvenation. This process can help reduce the appearance of scars
              by encouraging the growth of new, healthier skin cells. To achieve
              the best possible results multiple treatment are require.
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-slate-900">
            <small>Duration up to 1-2h depending on size</small>
          </div>
        </div>
        <div class="mx-3 mt-6 flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
          <img class="aspect-[3/3.5]" src="/assets/images/phi7.jpeg" />
          <div class="p-6">
            <h3 class="mb-2 text-5xl font-medium text-neutral-800 dark:text-slate-900">
              Face Microneedeling
            </h3>
            <p class="mb-4 text-base text-neutral-600 dark:text-slate-900">
              The PhiBright Microneedeling is is an upgraded microneedling
              technique that is very simple, safe, efficient and minimally
              invasive therapeutic treatment. A palette of 15 different
              Phibright serums gives a different personalized treatment for each
              client. Improving your skin texture, reducing wrinkles,
              hyperpigmentation, pores...
            </p>
          </div>
          <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-slate-900">
            <small>Duration 1h</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Microneedle;
