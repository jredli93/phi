import React from 'react';

function Gallery() {
  return (
    <div class="w-full py-32 mt-32 bg-slate-100">
      <section className="mx-auto max-w-screen-xl text-gray-50">
        <div
          className="mb-12 space-y-4 text-center"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
        >
          <h1 className="text-8xl font-semibold text-stone-800">Gallery</h1>
          <p class="text-stone-700">
            Sunt suscipit eaque qui iure unde labore numquam iusto
          </p>
        </div>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="50"
            src="https://source.unsplash.com/random/301x301/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="100"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?0"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="150"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?1"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="200"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?2"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="250"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?3"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="300"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?4"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="350"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?5"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="400"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?6"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="450"
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square"
            src="https://source.unsplash.com/random/200x200/?7"
          />
          <img data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="300"
            data-delay="500"
            src="https://source.unsplash.com/random/302x302/"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
