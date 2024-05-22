import React from "react";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { paintingsWords } from "@/app/contents/contents";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { MoveRight } from "lucide-react";
import { Cat } from "lucide-react";

import { PiggyBank } from "lucide-react";
function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={paintingsWords} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-2  overflow-hidden">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
            <CardItem translateZ="100" className="w-full mt-4 mb-3">
              <div className=" border-purple-300 rounded-xl p-2 hover:border-2">
                <Image
                  src="/temp/download.jpeg"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </div>
            </CardItem>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <CardItem
                  className="text-normal font-bold translate-z-20  text-neutral-600 dark:text-white/80  "
                  as="text"
                  translateZ="20">
                  Shiva
                </CardItem>
                <CardItem
                  className="font-bold  translate-z-20 italic  text-neutral-600 rounded-2xl dark:text-white/80 p-2 text-xs  "
                  as="text"
                  translateZ="20">
                  0.01/Token
                </CardItem>
              </div>
              <div>
                <CardItem
                  as="text"
                  translateZ="20"
                  className="text-neutral-500 font-normal max-w-sm dark:text-neutral-300/80 ">
                  <div className="flex gap-3 items-center">
                    <div className=" flex justify-center gap-1 items-center ">
                      <PiggyBank className="h-4 w-4" />
                      <p className="font-bold">Cost :</p>
                    </div>
                    <p className="text-sm">0.8 ETH</p>
                  </div>
                </CardItem>
              </div>
              <div>
                <CardItem
                  as="text"
                  translateZ="20"
                  className="text-neutral-500 font-normal max-w-sm dark:text-neutral-300/80 ">
                  <div className="flex gap-3 items-center">
                    <div className=" flex justify-center gap-1 items-center ">
                      <Cat className="h-4 w-4" />
                      <p className="font-bold">Category :</p>
                    </div>
                    <p className="text-sm">Abstract Art</p>
                  </div>
                </CardItem>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <button className="px-8 py-2 mt-3 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                <div className="flex items-center justify-center gap-1">
                  Checkout <MoveRight className="w-3 h-3" />
                </div>
              </button>
            </div>
          </CardBody>
        </CardContainer>
      </div>
      {/* <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border-[1px] border-purple-100/80 p-3">
          <Link href="">
            <Image
              src="/paintings/1.jpg"
              className="rounded-3xl bg-blend-darken shadow-3xl"
              width={500}
              height={500}
              alt="Artvault"
            />
            <div className="px-4 py-3 w-72">
              <span className="mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm cursor-auto ml-2">$199</p>
                </del>
              </div>
            </div>
          </Link>
        </div>
        <Card className="w-[350px]"></Card>
        <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/paintings/2.jpg"
              className="rounded-3xl shadow-3xl"
              width={600}
              height={600}
              alt="Artvault"
            />
            <div className="px-4 py-3 w-72">
              <span className="mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/paintings/3.jpg"
              className="rounded-3xl shadow-3xl"
              width={600}
              height={600}
              alt="Artvault"
            />
            <div className="px-4 py-3 w-72">
              <span className="mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/paintings/4.jpg"
              className="rounded-3xl shadow-3xl"
              width={600}
              height={600}
              alt="Artvault"
            />
            <div className="px-4 py-3 w-72">
              <span className="mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/paintings/5.jpg"
              className="rounded-3xl shadow-3xl"
              width={600}
              height={600}
              alt="Artvault"
            />
            <div className="px-4 py-3 w-72">
              <span className="mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-72 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="#">
            <Image
              src="/paintings/6.jpg"
              className="rounded-3xl shadow-3xl"
              width={600}
              height={600}
              alt="Artvault"
            />
            <div className="px-4 py-3 w-72">
              <span className="mr-3 uppercase text-xs">Brand</span>
              <p className="text-lg font-bold truncate block capitalize">
                Product Name
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold cursor-auto my-3">$149</p>
                <del>
                  <p className="text-sm cursor-auto ml-2">$199</p>
                </del>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-bag-plus"
                    viewBox="0 0 16 16">
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div> */}
    </>
  );
}

export default Page;
