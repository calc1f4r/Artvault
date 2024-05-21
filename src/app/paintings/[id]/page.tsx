"use client";
import React from "react";
import { Label as AceternityLabel } from "@/components/aceternityUi/label";
import { TextArea as AceternityTextArea } from "@/components/aceternityUi/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  CircleDollarSign,
  HandCoins,
  Heart,
  PiggyBank,
  Brush,
  Coins,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

function Painting({ params }: any) {
  const [review, setReview] = React.useState<string>("");
  const [token_number, setTokenNumber] = React.useState<number>(8000 / 2);
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  return (
    <>
      <section className="py-8 md:py-16  antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink max-w-md lg:max-w-lg mx-auto rounded-lg">
              <Image
                src="/temp/download.jpeg"
                height="600"
                width="600"
                className="rounded-lg"
                alt="thumbnail"
              />
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                Lord Shiva painting by Jasmine made using acrylic colors{" "}
                {params.id}
              </h1>

              <div className="flex gap-2 mt-3">
                <p className="font-semibold text-normal italic">By</p>
                <div className="flex gap-1 items-center justify-start">
                  <div className="border-[1px] border-purple-200 p-[1px] rounded-full">
                    <Image
                      alt="pfp"
                      src={"/temp/pfp.jpg"}
                      width={20}
                      className="rounded-full object-cover"
                      height={20}
                    />
                  </div>
                  <p className="text-sm italic font-semibold text-purple-400/80">
                    @Jasmine
                  </p>
                </div>
              </div>
              <div className="mt-4 items-center sm:gap-4 sm:flex lg:flex flex">
                <Image
                  src={"/matic-logo.png"}
                  alt="matic-log"
                  width={25}
                  height={25}></Image>
                <p className="font-bold text-gray-900 text-2xl sm:text-normal dark:text-white">
                  1 Matic / Token
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                    345 Reviews
                  </a>
                </div>
              </div>

              <div className="flex-col flex gap-5">
                <div className=" mt-5 flex flex-col gap-2">
                  <div className="flex  gap-3 items-center">
                    <div className=" flex justify-center gap-1 items-center ">
                      <CircleDollarSign className="h-4 w-4" />
                      <p className="font-bold">Total Tokens Issued :</p>
                    </div>
                    <p className="text-sm font-normal">1600000</p>
                  </div>
                  <div className="flex  item  gap-3 items-center">
                    <div className=" flex justify-center gap-1 items-center ">
                      <HandCoins className="h-4 w-4" />
                      <p className="font-bold">Available Tokens :</p>
                    </div>
                    <p className="text-sm font-normal">8000</p>
                  </div>
                  <div className="flex  gap-3 items-center">
                    <div className=" flex justify-center gap-1 items-center ">
                      <PiggyBank className="h-4 w-4" />
                      <p className="font-bold">Painting Cost:</p>
                    </div>
                    <p className="text-sm font-normal">10 Matics</p>
                  </div>
                  <div className="flex  gap-3 items-center">
                    <div className=" flex justify-center gap-1 items-center ">
                      <Brush className="h-4 w-4 " />
                      <p className="font-bold">Category :</p>
                    </div>
                    <p className="text-sm font-normal">Abstract Art</p>
                  </div>
                  <div className="mt-5">
                    <div className="flex gap-2 justify-start">
                      <Coins className="w-6 h-6" />
                      <label
                        htmlFor="small-range"
                        className="block mb-2 text-sm text-gray-900 dark:text-white font-bold">
                        Number of Tokens
                      </label>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Slider
                        defaultValue={[8000 / 2]}
                        min={0}
                        onValueChange={(e) => {
                          setTokenNumber(e[0]);
                        }}
                        value={[token_number]}
                        max={8000}
                        step={1}
                        className="mt-3 range-sm"
                      />
                      <Input
                        type="text"
                        placeholder="Number Of tokens"
                        className="w-20"
                        value={token_number}
                        onChange={(e) => {
                          setTokenNumber(Number(e.target.value));
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Buy Tokens for 1 Matic
                </Button>
              </div>

              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

              <p className="mb-6 ">
                Studio quality three mic array for crystal clear calls and voice
                recordings. Six-speaker sound system for a remarkably robust and
                high-quality audio experience. Up to 256GB of ultrafast SSD
                storage.
              </p>

              <p>
                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse
                with Magic Keyboard or Magic Keyboard with Touch ID.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-8 lg:py-16 antialiased">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Reviews (20)
            </h2>
          </div>
          <form className="mb-6">
            <LabelInputContainer>
              <AceternityLabel htmlFor="Review">Write a review</AceternityLabel>
              <AceternityTextArea
                id="password"
                rows={5}
                className="placeholder:italic "
                placeholder="Write a review"
                value={review}
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
            </LabelInputContainer>
            <div className="flex gap-4 items-center">
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 mt-2 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-3"
                type="submit">
                Submit Review &rarr;
                <BottomGradient />
              </button>
              <div>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <button
                      key={i}
                      type="button"
                      className="mt-3 transition duration-200 ease-in-out"
                      onClick={() => setRating(ratingValue)}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(0)}>
                      {ratingValue <= (hover || rating) ? (
                        <svg
                          width="15"
                          height="15"
                          className="w-5 h-5 text-yellow-300"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                            fill="currentColor"></path>
                        </svg>
                      ) : (
                        <svg
                          width="15"
                          height="15"
                          className="w-5 h-5"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"></path>
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </form>
          <article className="p-6 text-base rounded-lg border-2 dark:border-white/20 border-black">
            <div className="flex justify-between items-center mb-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-7">
                  <div className="flex items-center ">
                    <p className="inline-flex items-center mr-3 text-sm font-semibold">
                      <Image
                        className="mr-2 w-6 h-6 rounded-full"
                        width={24}
                        height={24}
                        src="/temp/pfp.jpg"
                        alt="Michael Gough"
                      />
                      Michael Gough
                    </p>
                    <p className="text-sm">
                      <time dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Very straight-to-point article. Really worth time reading. Thank
              you! But tools are just the instruments for the UX designers. The
              knowledge of the design tools are as important as the creation of
              the design strategy.
            </p>
            <div className="flex mt-3 items-center gap-2">
              <button>
                <Heart className="w-5 h-5 text-red-900 text-bold hover:scale-125 active:scale-150 ease-in duration-100" />
              </button>
              <span className="text-sm font-semibold">Liked by 37 others</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex  flex-col space-y-2 w-full">{children}</div>;
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
export default Painting;
