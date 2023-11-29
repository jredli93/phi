import React from 'react';

function Price() {
  return (
    <section class="bg-slate-50">
      <div class="container  px-6 py-8 mx-auto">
        <h1 className="text-8xl font-semibold leading-tight text-slate-900 text-center">
          Price Plan
        </h1>

        <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div class="w-full p-8 space-y-8 text-left border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-800 rounded-lg">
            <p class="break-words font-medium text-gray-500 text-3xl dark:text-gray-300">
              Bold Brows(microblading)
            </p>
            <ul>
              <li>
                First treatment - $400 (touch up up to 6 weeks included in
                price)
              </li>
              <li>late touch up after 6 weeks $100 </li>
              <li>Touch up 6-12 months – $250</li>
              <li>Touch up 12-24 months – $375</li>
            </ul>
          </div>
          <div class="w-full p-8 space-y-8 text-left border  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-800 rounded-lg">
            <p class="font-medium text-gray-500 text-3xl dark:text-gray-300">
              Powder Brows
            </p>
            <ul>
              <li>
                First treatment - $400 (touch up up to 6 weeks included in
                price)
              </li>
              <li>late touch up after 6 weeks $100 </li>
              <li>Touch up 6-12 months – $250</li>
              <li>Touch up 12-24 months – $375</li>
              <li>Color correction from previous work frpm $600 </li>
            </ul>
          </div>

          <div class="w-full p-8 space-y-8 text-left border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-800 rounded-lg">
            <p class="break-words font-medium text-gray-500 text-3xl dark:text-gray-300">
              Combo Brows(microblading)
            </p>
            <ul>
              <li>
                First treatment - $450 (touch up up to 6 weeks included in
                price)
              </li>
              <li>late touch up after 6 weeks $100 </li>
              <li>Touch up 6-12 months – $300</li>
              <li>Touch up 12-24 months – $400</li>
            </ul>
          </div>
          <div class="w-full p-8 space-y-8 text-left border shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-gray-800 rounded-lg">
            <p class="font-medium text-gray-500 text-3xl dark:text-gray-300">
              Microneedeling
            </p>
            <ul>
              <li> Face treatment $250</li>
              <li> Face treatment package of 5 treatments $1000</li>
              <li>Hair growth package of 5 treatment $1000</li>
              <li>Scare package of 5 treatment $1000</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price;
