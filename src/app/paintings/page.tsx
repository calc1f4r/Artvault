"use client";
import React from "react";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { paintingsWords } from "@/app/contents/contents";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/Constants/constants";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Cat } from "lucide-react";
import { useReadContract } from "wagmi";
import { PiggyBank } from "lucide-react";
interface Painting {
  availableTokens: bigint;
  category: string;
  description: string;
  eachTokenPrice: bigint;
  images: string;
  originalOwner: string;
  originalOwnerUsername: string;
  paintingId: bigint;
  paintingTitle: string;
  totalCostOfPainting: bigint;
  totalTokens: bigint;
}

function Painting() {
  const [paintings, setPaintings] = React.useState<Painting[]>([]);
  let { data }: any = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "getAllPaintings",
  });
  if (data == undefined) {
    data = [];
  }
  React.useEffect(() => {
    if (data) {
      setPaintings(data);
    }
  }, [paintings, data]);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={paintingsWords} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-2  overflow-hidden">
        {paintings.map((painting, index) => (
          <ArtCard
            key={index}
            id={Number(painting.paintingId)}
            title={painting.paintingTitle}
            tokenPrice={Number(painting.eachTokenPrice)}
            cost={Number(painting.totalCostOfPainting)}
            category={painting.category}
            imageUrl={painting.images}
          />
        ))}
      </div>
    </>
  );
}

export default Painting;

interface ArtCardProps {
  id: number;
  title: string;
  tokenPrice: number;
  cost: number;
  category: string;
  imageUrl: string;
}

const ArtCard: React.FC<ArtCardProps> = ({
  id,
  title,
  tokenPrice,
  cost,
  category,
  imageUrl,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
        <CardItem translateZ="100" className="w-full mt-4 mb-3">
          <div className=" border-purple-300 rounded-xl p-2 hover:border-2">
            <Image
              src={imageUrl}
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
              {title}
            </CardItem>
            <CardItem
              className="font-bold  translate-z-20 italic  text-neutral-600 rounded-2xl dark:text-white/80 p-2 text-xs  "
              as="text"
              translateZ="20">
              {tokenPrice}/Token
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
                <p className="text-sm">{cost} Wei</p>
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
                <p className="text-sm">{category}</p>
              </div>
            </CardItem>
          </div>
        </div>
        <div className="flex flex-col mt-3 items-center w-full justify-center">
          <Link href={`/paintings/${id}`}>
            <button className="px-8 py-2 w-full bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
              Checkout &rarr;
            </button>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
};
