/* eslint-disable @next/next/no-img-element */
import React from "react";

const VendorExamsTable = () => {
  return (
    <section class="py-4 overflow-hidden">
      <div class="container px-4 mx-auto">
        <div class="py-5 bg-neutral-50 border border-neutral-100 rounded-xl">
          <div class="px-6">
            <h3 class="font-heading pb-8 text-lg text-neutral-600 font-semibold">
              Transaction History
            </h3>
            <div class="mb-5 w-full overflow-x-auto">
              <table class="w-full min-w-max">
                <thead>
                  <tr class="text-left">
                    <th class="pb-3.5 border-b border-neutral-100">
                      <a
                        class="inline-flex items-center text-sm text-gray-500 font-medium uppercase"
                        href="#"
                      >
                        <span class="mr-1.5">Id</span>
                      </a>
                    </th>
                    <th class="pb-3.5 border-b border-neutral-100">
                      <a
                        class="inline-flex items-center text-sm text-gray-500 font-medium"
                        href="#"
                      >
                        <span class="mr-1.5">Name</span>
                      </a>
                    </th>
                    <th class="pb-3.5 border-b border-neutral-100">
                      <a
                        class="inline-flex items-center text-sm text-gray-500 font-medium"
                        href="#"
                      >
                        <span class="mr-1.5">Price</span>
                      </a>
                    </th>
                    <th class="pb-3.5 border-b border-neutral-100">
                      <a
                        class="inline-flex items-center text-sm text-gray-500 font-medium"
                        href="#"
                      >
                        <span class="mr-1.5">Product</span>
                      </a>
                    </th>
                    <th class="pb-3.5 border-b border-neutral-100">
                      <a
                        class="inline-flex items-center text-sm text-gray-500 font-medium"
                        href="#"
                      >
                        <span class="mr-1.5">Purchase Time</span>
                      </a>
                    </th>
                    <th class="pb-3.5 border-b border-neutral-100">
                      <a
                        class="inline-flex items-center text-sm text-gray-500 font-medium"
                        href="#"
                      >
                        <span class="mr-1.5">Status</span>
                      </a>
                    </th>
                    <th class="pb-3.5 border-b border-neutral-100"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">29506</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <div class="flex flex-wrap items-center">
                        <img
                          class="mr-3 h-9"
                          src="dashy-assets/images/avatar5.png"
                          alt=""
                        />
                        <span class="font-semibold">Darrell Steward</span>
                      </div>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">$17.84</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">
                        Playstation 4 Limited Edition
                      </span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="text-neutral-500 font-medium">
                        15 May 2020 9:00 pm
                      </span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
                        Confirmed
                      </span>
                    </td>
                    <td class="py-2.5 border-b border-neutral-100">
                      <a class="inline-flex py-2.5 pr-0" href="#">
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">29506</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <div class="flex flex-wrap items-center">
                        <img
                          class="mr-3 h-9"
                          src="dashy-assets/images/avatar6.png"
                          alt=""
                        />
                        <span class="font-semibold">Bessie Cooper</span>
                      </div>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">$17.84</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">Gopro Hero 7</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="text-neutral-500 font-medium">
                        15 May 2020 8:00 pm
                      </span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="px-2.5 py-1 text-sm font-medium text-red-500 bg-red-500 bg-opacity-10 rounded-full">
                        Canceled
                      </span>
                    </td>
                    <td class="py-2.5 border-b border-neutral-100">
                      <a class="inline-flex py-2.5 pr-0" href="#">
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">29506</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <div class="flex flex-wrap items-center">
                        <img
                          class="mr-3 h-9"
                          src="dashy-assets/images/avatar7.png"
                          alt=""
                        />
                        <span class="font-semibold">Annette Black</span>
                      </div>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">$6.48</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">DJI Mavic Pro 2</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="text-neutral-500 font-medium">
                        15 May 2020 7:00 pm
                      </span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
                        Confirmed
                      </span>
                    </td>
                    <td class="py-2.5 border-b border-neutral-100">
                      <a class="inline-flex py-2.5 pr-0" href="#">
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">29506</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <div class="flex flex-wrap items-center pl-12">
                        <span class="font-semibold">Darlene Robertson</span>
                      </div>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">$14.81</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">Brand New Bike</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="text-neutral-500 font-medium">
                        15 May 2020 6:00 pm
                      </span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
                        Confirmed
                      </span>
                    </td>
                    <td class="py-2.5 border-b border-neutral-100">
                      <a class="inline-flex py-2.5 pr-0" href="#">
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">29506</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <div class="flex flex-wrap items-center">
                        <img
                          class="mr-3 h-9"
                          src="dashy-assets/images/avatar8.png"
                          alt=""
                        />
                        <span class="font-semibold">Jane Cooper</span>
                      </div>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">$8.99</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">Coach Tabby 26</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="text-neutral-500 font-medium">
                        15 May 2020 11:00 pm
                      </span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full">
                        Pending
                      </span>
                    </td>
                    <td class="py-2.5 border-b border-neutral-100">
                      <a class="inline-flex py-2.5 pr-0" href="#">
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">29506</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <div class="flex flex-wrap items-center">
                        <img
                          class="mr-3 h-9"
                          src="dashy-assets/images/avatar9.png"
                          alt=""
                        />
                        <span class="font-semibold">Cameron Williamson</span>
                      </div>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">$17.84</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="font-medium">Dell Computer Monitor</span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="text-neutral-500 font-medium">
                        15 May 2020 5:00 pm
                      </span>
                    </td>
                    <td class="py-2.5 pr-4 border-b border-neutral-100">
                      <span class="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
                        Confirmed
                      </span>
                    </td>
                    <td class="py-2.5 border-b border-neutral-100">
                      <a class="inline-flex py-2.5 pr-0" href="#">
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="py-2.5 pr-4">
                      <span class="font-medium">29506</span>
                    </td>
                    <td class="py-2.5 pr-4">
                      <div class="flex flex-wrap items-center">
                        <img
                          class="mr-3 h-9"
                          src="dashy-assets/images/avatar10.png"
                          alt=""
                        />
                        <span class="font-semibold">Esther Howard</span>
                      </div>
                    </td>
                    <td class="py-2.5 pr-4">
                      <span class="font-medium">$5.22</span>
                    </td>
                    <td class="py-2.5 pr-4">
                      <span class="font-medium">iPad Pro 2017 Model</span>
                    </td>
                    <td class="py-2.5 pr-4">
                      <span class="text-neutral-500 font-medium">
                        15 May 2020 10:00 pm
                      </span>
                    </td>
                    <td class="py-2.5 pr-4">
                      <span class="px-2.5 py-1 text-sm font-medium text-green-500 bg-green-500 bg-opacity-10 rounded-full">
                        Confirmed
                      </span>
                    </td>
                    <td class="py-2.5">
                      <a class="inline-flex py-2.5 pr-0" href="#">
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full"></span>
                        <span class="w-1 h-1 bg-neutral-200 rounded-full"></span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex flex-wrap items-center justify-between -m-2">
              <div class="w-auto p-2">
                <div class="flex flex-wrap -m-0.5">
                  <div class="w-auto p-0.5">
                    <a
                      class="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <svg
                        width="7"
                        height="12"
                        viewbox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 10.6666L1.33333 5.99998L6 1.33331"
                          stroke="#71717A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="w-auto p-0.5">
                    <a
                      class="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <span class="text-sm text-neutral-400 font-semibold">
                        1
                      </span>
                    </a>
                  </div>
                  <div class="w-auto p-0.5">
                    <a
                      class="flex items-center justify-center w-9 h-9 border border-neutral-600 rounded-sm"
                      href="#"
                    >
                      <span class="text-sm font-semibold">2</span>
                    </a>
                  </div>
                  <div class="w-auto p-0.5">
                    <a
                      class="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <span class="text-sm text-neutral-400 font-semibold">
                        3
                      </span>
                    </a>
                  </div>
                  <div class="w-auto p-0.5">
                    <a
                      class="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <span class="text-sm text-neutral-400 font-semibold">
                        4
                      </span>
                    </a>
                  </div>
                  <div class="w-auto p-0.5">
                    <a
                      class="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <svg
                        width="7"
                        height="12"
                        viewbox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.33335L5.66667 6.00002L1 10.6667"
                          stroke="#71717A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div class="w-auto p-0.5">
                    <a
                      class="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                      href="#"
                    >
                      <svg
                        width="7"
                        height="12"
                        viewbox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.33335L5.66667 6.00002L1 10.6667"
                          stroke="#71717A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <svg
                        width="7"
                        height="12"
                        viewbox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.33335L5.66667 6.00002L1 10.6667"
                          stroke="#71717A"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="w-auto p-2">
                <p class="text-sm text-neutral-400">
                  Showing 1 of 20 out of 157 results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorExamsTable;
