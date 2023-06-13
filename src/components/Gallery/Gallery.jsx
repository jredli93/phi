import React from 'react';

function Gallery() {
  return (
    <div class="w-full py-32 " id="gallery">
      <h1
        className="text-8xl font-semibold leading-tight text-stone-800 text-center"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="300"
      >
        Gallery
      </h1>
      <section className="mx-auto max-w-screen-xl text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="50"
            src="/assets/images/phi1.jpeg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="100"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi2.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="150"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi3.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="200"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi4.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="250"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi5.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="300"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi6.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="350"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi7.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="400"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi8.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="450"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="/assets/images/phi9.jpeg"
          />
          <img
            loading="lazy"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="500"
            src="/assets/images/phi10.jpeg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
