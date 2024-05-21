import React from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { paintingsWords } from "@/app/contents/contents";
import Image from "next/image";
import Link from "next/link";
function FilterMenu() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={paintingsWords} />
      </div>
      <div>
        <div
          className="relative z-40 lg:hidden"
          role="dialog"
          aria-modal="true">
          <div className="fixed inset-0  bg-opacity-25"></div>
          <div className="fixed inset-0 z-40 flex">
            <div className="relative ml-auto flex h-full w-full max-w-7xl flex-col overflow-y-auto  py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium 900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md  p-2 400">
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium 900">
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Totes
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Backpacks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Travel Bags
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Hip Bags
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-2 py-3">
                      Laptop Sleeves
                    </a>
                  </li>
                </ul>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between  px-2 py-3 400 hover:500"
                      aria-controls="filter-section-mobile-0"
                      aria-expanded="false">
                      <span className="font-medium 900">Color</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-mobile-0">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-0"
                          className="ml-3 min-w-0 flex-1 500">
                          White
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-1"
                          className="ml-3 min-w-0 flex-1 500">
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          checked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-2"
                          className="ml-3 min-w-0 flex-1 500">
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-3"
                          className="ml-3 min-w-0 flex-1 500">
                          Brown
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-4"
                          className="ml-3 min-w-0 flex-1 500">
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-color-5"
                          className="ml-3 min-w-0 flex-1 500">
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between  px-2 py-3 400 hover:500"
                      aria-controls="filter-section-mobile-1"
                      aria-expanded="false">
                      <span className="font-medium 900">Category</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-mobile-1">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-0"
                          className="ml-3 min-w-0 flex-1 500">
                          New Arrivals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-1"
                          className="ml-3 min-w-0 flex-1 500">
                          Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-2"
                          className="ml-3 min-w-0 flex-1 500">
                          Travel
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-3"
                          className="ml-3 min-w-0 flex-1 500">
                          Organization
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-mobile-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-mobile-category-4"
                          className="ml-3 min-w-0 flex-1 500">
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
            <h1 className="text-4xl font-bold tracking-tight 900">
              New Arrivals
            </h1>
            <div className="flex items-center">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="group inline-flex justify-center text-sm font-medium 700 hover:900"
                    id="menu-button"
                    aria-expanded="false"
                    aria-haspopup="true">
                    Sort
                    <svg
                      className="-mr-1 ml-1 h-5 w-5 400 group-hover:500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.93l3.71-3.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className="hidden origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl  ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}>
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="font-medium 900 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0">
                      Most Popular
                    </a>
                    <a
                      href="#"
                      className="500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-1">
                      Best Rating
                    </a>
                    <a
                      href="#"
                      className="500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-2">
                      Newest
                    </a>
                    <a
                      href="#"
                      className="500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-3">
                      Price: Low to High
                    </a>
                    <a
                      href="#"
                      className="500 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-4">
                      Price: High to Low
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="-m-2 p-2 400 hover:500 sm:ml-6 lg:hidden">
                <span className="sr-only">Filters</span>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M3 5.75A.75.75 0 013.75 5h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.75zM3 10a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10zm0 4.25a.75.75 0 01.75-.75h12.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <aside>
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium 900">
                  <li>
                    <a href="#">Totes</a>
                  </li>
                  <li>
                    <a href="#">Backpacks</a>
                  </li>
                  <li>
                    <a href="#">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#">Laptop Sleeves</a>
                  </li>
                </ul>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between  py-3 text-sm 400 hover:500"
                      aria-controls="filter-section-0"
                      aria-expanded="false">
                      <span className="font-medium 900">Color</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-color-0"
                          name="color[]"
                          value="white"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-0"
                          className="ml-3 text-sm 600">
                          White
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-1"
                          name="color[]"
                          value="beige"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-1"
                          className="ml-3 text-sm 600">
                          Beige
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-2"
                          name="color[]"
                          value="blue"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-2"
                          className="ml-3 text-sm 600">
                          Blue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-3"
                          name="color[]"
                          value="brown"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-3"
                          className="ml-3 text-sm 600">
                          Brown
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-4"
                          name="color[]"
                          value="green"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-4"
                          className="ml-3 text-sm 600">
                          Green
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-color-5"
                          name="color[]"
                          value="purple"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-color-5"
                          className="ml-3 text-sm 600">
                          Purple
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between  py-3 text-sm 400 hover:500"
                      aria-controls="filter-section-1"
                      aria-expanded="false">
                      <span className="font-medium 900">Category</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-category-0"
                          name="category[]"
                          value="new-arrivals"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-category-0"
                          className="ml-3 text-sm 600">
                          New Arrivals
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-1"
                          name="category[]"
                          value="sale"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-category-1"
                          className="ml-3 text-sm 600">
                          Sale
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-2"
                          name="category[]"
                          value="travel"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-category-2"
                          className="ml-3 text-sm 600">
                          Travel
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-3"
                          name="category[]"
                          value="organization"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-category-3"
                          className="ml-3 text-sm 600">
                          Organization
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-category-4"
                          name="category[]"
                          value="accessories"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-category-4"
                          className="ml-3 text-sm 600">
                          Accessories
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200 py-6">
                  <h3 className="-my-3 flow-root">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between  py-3 text-sm 400 hover:500"
                      aria-controls="filter-section-2"
                      aria-expanded="false">
                      <span className="font-medium 900">Size</span>
                      <span className="ml-6 flex items-center">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <input
                          id="filter-size-0"
                          name="size[]"
                          value="2l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-size-0"
                          className="ml-3 text-sm 600">
                          2L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-1"
                          name="size[]"
                          value="6l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-size-1"
                          className="ml-3 text-sm 600">
                          6L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-2"
                          name="size[]"
                          value="12l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-size-2"
                          className="ml-3 text-sm 600">
                          12L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-3"
                          name="size[]"
                          value="18l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-size-3"
                          className="ml-3 text-sm 600">
                          18L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-4"
                          name="size[]"
                          value="20l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-size-4"
                          className="ml-3 text-sm 600">
                          20L
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="filter-size-5"
                          name="size[]"
                          value="40l"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor="filter-size-5"
                          className="ml-3 text-sm 600">
                          40L
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              <div className="lg:col-span-3">
                <div className="border-2 border-gray-200 rounded-lg h-96 lg:h-full p-6"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default FilterMenu;
