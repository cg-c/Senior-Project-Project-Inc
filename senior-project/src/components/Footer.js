import React from 'react';
import { Link } from 'react-router-dom';

//images
import UFlogo_small from '../images/UF-logo-small.png';

function Footer() {
  return (
    
  <footer class="bg-blue-800">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
              <a href="https://www.ufl.edu/" target="_blank" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                  <img src={UFlogo_small} class="h-12" alt="UF Logo" />
              </a>
              <ul class="flex flex-wrap items-center mb-6 text-lg font-medium text-white sm:mb-0">
                  <li>
                      <a href="https://one.ufl.edu/" target="_blank" class="hover:underline me-4 md:me-6">ONE.UF</a>
                  </li>
                  <li>
                      <a href="https://elearning.ufl.edu/" target="_blank" class="hover:underline me-4 md:me-6">eLearning</a>
                  </li>
                  <li>
                      <a href="https://catalog.ufl.edu/UGRD/dates-deadlines/" target="_blank" class="hover:underline me-4 md:me-6">Calendar</a>
                  </li>
                  <li>
                      <a href="https://ufalert.ufl.edu/" target="_blank" class="hover:underline">UF Alerts</a>
                  </li>
              </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span class="block text-sm text-white sm:text-center">© 2024 UF</span>
      </div>
  </footer>


  );
}

export default Footer;
