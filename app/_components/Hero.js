
import React from 'react'
import Departments from "./Departments";

function Hero() {
  return (
<section class="bg-gray-900 text-white">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Students of Faculty.

        <span class="sm:block"> Computers And Informtion. </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
      This site helps you learn
       about the Courses of each Department and what subject will it open?
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class=" transition ease-in-out duration-300  block w-full rounded border border-blue-600 bg-teal-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="#Departments"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="https://www.eelu.edu.eg/"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
  <Departments />
</section>

  )
}

export default Hero
