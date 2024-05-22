import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

import {
  CircleDollarSign,
  Ghost,
  HandCoins,
  PiggyBank,
  Banknote,
  Text,
} from "lucide-react";
import { useReadContract, useAccount } from "wagmi";
import React from "react";

import { PaintingInterface } from "@/utils/Allinterfaces";

function ListedPaintings() {
  const [paintingsIds, setPaintingsIds] = React.useState<number[]>([]);
  const [paintings, setPaintings] = React.useState<PaintingInterface[]>([]);
  // const { address, isConnecting } = useAccount();
  //   let { id }: any = useReadContract({
  //   abi: CONTRACT_ABI,
  //   address: CONTRACT_ADDRESS,
  //   functionName: "getUserListedPaintingIds",
  //   account: address,
  // });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-2  overflow-hidden">
      <PaintingCard />
    </div>
  );
}

export default ListedPaintings;
const PaintingCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
        <CardItem
          className="font-bold translate-z-20 italic text-neutral-600 rounded-2xl dark:text-white/80 p-2 text-sm  mt-3 "
          as="text"
          translateZ="20">
          0.01/Token
        </CardItem>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <CardItem
              className="text-3xl font-bold translate-z-20 italic text-neutral-600 dark:text-white  "
              as="text"
              translateZ="20">
              Shiva
            </CardItem>
            <CardItem
              as="text"
              translateZ="20"
              className="text-neutral-500 font-normal max-w-sm dark:text-neutral-300 italic">
              By
              <span className="font-bold ml-1">@jasmine</span>
            </CardItem>
          </div>
          <div className="flex mb-4">
            <CardItem as="text" className=" font-xl italic  ">
              <div className="flex gap-2 items-center">
                <Text className="w-4 h-4" />
                The one who is god of all the others
              </div>
            </CardItem>
          </div>
          <div className="lg:flex items-center  justify-around">
            <CardItem
              translateZ={20}
              as="text"
              className=" rounded-xl font-bold">
              <div className="flex justify-center gap-3 items-center">
                <div className=" flex justify-center gap-1 items-center ">
                  <CircleDollarSign className="h-4 w-4" />
                  <p className="font-bold">Total Tokens :</p>
                </div>
                <p className="text-sm font-normal">1600000</p>
              </div>
            </CardItem>
            <CardItem
              translateZ={20}
              as="text"
              className="rounded-xl font-normal">
              <div className="flex justify-center gap-3 items-center">
                <div className=" flex justify-center gap-1 items-center ">
                  <HandCoins className="h-4 w-4" />
                  <p className="font-bold">Tokens Owned :</p>
                </div>
                <p className="text-sm font-normal">8000</p>
              </div>
            </CardItem>
          </div>
          <div className="lg:flex items-center justify-around">
            <CardItem
              translateZ={20}
              as="text"
              className="rounded-xl font-normal">
              <div className="flex justify-center gap-3 items-center">
                <div className=" flex justify-center gap-1 items-center ">
                  <PiggyBank className="h-4 w-4" />
                  <p className="font-bold">Your costing :</p>
                </div>
                <p className="text-sm font-normal">0.8 ETH</p>
              </div>
            </CardItem>
            <CardItem
              translateZ={20}
              as="text"
              className="rounded-xl font-normal">
              <div className="flex justify-center gap-3 items-center">
                <div className=" flex justify-center gap-1 items-center ">
                  <Banknote className="h-4 w-4" />
                  <p className="font-bold">Total Cost :</p>
                </div>
                <p className="text-sm font-normal">2.1 ETH</p>
              </div>
            </CardItem>
          </div>

          <div className="flex flex-col items-center justify-center">
            <CardItem
              translateZ={20}
              as="text"
              className="rounded-xl font-normal">
              <div className="flex justify-center gap-3 items-center">
                <div className=" flex justify-center gap-1 items-center ">
                  <Ghost className="h-4 w-4" />
                  <p className="font-bold">Owner :</p>
                </div>
                <p className="text-sm font-normal">
                  0x0000000000000000000000000
                </p>
              </div>
            </CardItem>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <CardItem
            translateZ={20}
            as="text"
            className="rounded-xl font-normal">
            <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Checkout &rarr;
              </span>
            </button>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
