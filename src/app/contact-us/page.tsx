"use client";
import { IconAddressBook } from "@tabler/icons-react";
import React from "react";
export default function index() {
  return (
    <section className="">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <div className="flex items-center justify-center gap-3 mb-4 ">
          <IconAddressBook className="h-9 w-9 text-purple-400" />
          <h2 className="text-3xl tracking-tight font-normal text-purple-400  ">
            Contact Us
          </h2>
        </div>
        <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-transparent dark:focus:ring-primary-500 dark:focus:border-primary-500 placeholder:text-white/70 dark:shadow-sm-light"
              placeholder="satashinakamoto@outlook.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-transparent dark:focus:ring-primary-500 dark:focus:border-primary-500 placeholder:text-white/70 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-transparent dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Send Message
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
