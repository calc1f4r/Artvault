import React from "react";
import Image from "next/image";
import { IconDecimal } from "@tabler/icons-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import { Landmark } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import { BadgeEuro } from "lucide-react";

import { Categorieswords, items, featureswords } from "@/app/contents/contents";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useTheme } from "next-themes";

export default function Page() {
  return (
    <div className="relative">
      <main>
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="absolute inset-0 z-0"
          particleColor={"#f2e6fe"}
        />
        <div className="flex w-full flex-col overflow-hidden relative">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white italic">
                  {"Art's Tokenized Revolution with"} <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-purple-400">
                    Artvault
                  </span>
                </h1>
              </>
            }>
            <Image
              src={`/hero.png`}
              alt="hero"
              height={900}
              width={1800}
              className="mx-auto rounded-2xl object-cover h-full object-left-right"
              draggable={false}
            />
          </ContainerScroll>
        </div>

        <section className="relative">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r   from-purple-100 via-violet-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-3xl">
                Platform to Sell Paintings in a Tokenized Format
                <span className="sm:block">Discover, Buy, and Trade</span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed italic">
                solves the problem of inaccessible art ownership by allowing
                users to own fractions of paintings, democratizing the art
                market and providing liquidity for art assets.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-zinc-950 rounded-md group-hover:bg-opacity-0">
                    Checkout Paintings
                  </span>
                </button>

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-950 rounded-md group-hover:bg-opacity-0">
                    List Paintings
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="relative flex flex-col items-center ">
          <TypewriterEffectSmooth words={featureswords} />
          <div className=" mt-5 relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 items-center justify-between">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-900/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-30rem sm:w-[30rem]  rounded-xl px-8 py-6 border h-[10rem] ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white">
                  <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 text-transparent bg-clip-text">
                    {" "}
                    <Landmark className="h-5 w-5  text-green-400" />
                    Say Goodbye to Big Auction Houses:
                  </div>
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300  ">
                  Experience a revolutionary approach to art ownership, where
                  anyone can invest in and trade fractional shares of valuable
                  artworks.
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-900/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-30rem sm:w-[30rem]  rounded-xl px-8 py-6 border h-[10rem] ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white">
                  <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-purple-500 to-pink-500 text-transparent bg-clip-text group-hover:from-purple-500 group-hover:to-pink-500">
                    {" "}
                    <IconDecimal className="h-5 w-5 text-purple-400" />
                    Diverse Art Forms:
                  </div>
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  supports a wide range of painting styles and mediums, from
                  classical oil paintings to contemporary digital art, ensuring
                  there &apos s something for every art lover.
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-900/[0.3] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-30rem sm:w-[30rem]  rounded-xl px-8 py-6 border h-[10rem] ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white">
                  <div className="flex items-center justify-center gap-3 bg-gradient-to-br from-cyan-500 to-blue-500 text-transparent bg-clip-text group-hover:from-cyan-500 group-hover:to-blue-500">
                    {" "}
                    <BadgeEuro className="h-5 w-5 text-cyan-500" />
                    Resale Marketplace:
                  </div>
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  Easily resell your tokenized art pieces on our secure
                  marketplace, allowing collectors to trade and invest in
                  digital masterpieces.
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className="mt-20">
            <div className="flex items-center justify-center">
              <TypewriterEffectSmooth words={Categorieswords} />
            </div>
            <BentoGrid className="relative z-10 mt-2 max-w-5xl mx-auto p-4">
              {items.map((item, i) => (
                <Link key={i} href={item.href}>
                  <BentoGridItem
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                  />
                </Link>
              ))}
            </BentoGrid>
          </div>
        </div>
      </main>
    </div>
  );
}
