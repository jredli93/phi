import React from 'react';

function Contact() {
  return (
    <div class="mx-auto w-full bg-stone-800 py-32 mt-32" id="certification">
      <div class="mx-auto text-center">
        <h1
          className="text-8xl font-semibold leading-tight text-gold-100 text-center"
        >
          Let's talk Brows
        </h1>
        <p
          class="mt-2 text-lg leading-8 text-slate-100"
        >
          Book a free consultation
        </p>
        <p
          class="mt-1 text-md leading-4 text-slate-100"
        >
          I will be happy to help you choose the eyebrow service that suits you
          best and answer any questions you have regarding treatments.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        class="mx-auto max-w-screen-md mt-16 sm:mt-20"
      >
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              for="first-name"
              class="block text-sm font-semibold leading-6 text-slate-100"
            >
              Name
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="phone"
              class="block text-sm font-semibold leading-6 text-slate-100"
            >
              Phone
            </label>
            <div class="mt-2.5">
              <input
                type="text"
                name="phone"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="email"
              class="block text-sm font-semibold leading-6 text-slate-100"
            >
              Email
            </label>
            <div class="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block text-sm font-semibold leading-6 text-slate-100"
            >
              Message
            </label>
            <div class="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button
            type="submit"
            class="block w-full rounded-md bg-gold-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gold-600 focus:outline-none focus:ring active:bg-gold-500"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
