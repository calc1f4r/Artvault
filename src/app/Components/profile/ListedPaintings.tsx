import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/Constants/constants";
import {
  CircleDollarSign,
  Ghost,
  HandCoins,
  PiggyBank,
  Banknote,
  Rabbit,
  Text,
} from "lucide-react";
import { useReadContract, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Link from "next/link";

import { PaintingInfo } from "@/utils/Allinterfaces";

function ListedPaintings() {
  const { address, isConnecting } = useAccount();
  const [paintings, setPaintings] = useState<PaintingInfo[]>([]);
  let { data }: any = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "getPaintingsListedByUser",
    account: address,
  });
  if (data == undefined) {
    data = [];
  }
  useEffect(() => {
    if (data) {
      setPaintings(data);
      console.log(data);
    }
  }, [paintings, data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-2  overflow-hidden">
      {paintings.map((painting, index) => (
        <PaintingCard
          key={index}
          imageUrl={painting.images}
          category={painting.category}
          tokenPrice={Number(painting.eachTokenPrice)}
          title={painting.paintingTitle}
          artistUsername={painting.originalOwnerUsername}
          description={painting.description}
          totalTokens={Number(painting.totalTokens)}
          tokensOwned={Number(painting.tokensOwnedByViewer)}
          yourCosting={
            Number(painting.eachTokenPrice) *
            Number(painting.tokensOwnedByViewer)
          }
          totalCost={Number(painting.totalCostOfPainting)}
          ownerAddress={painting.originalOwner}
          id={Number(painting.paintingId)}
        />
      ))}
    </div>
  );
}
interface PaintingCardProps {
  imageUrl: string;
  tokenPrice: number;
  category: string;
  title: string;
  artistUsername: string;
  description: string;
  totalTokens: number;
  tokensOwned: number;
  yourCosting: number;
  totalCost: number;
  ownerAddress: string;
  id: number;
}

export default ListedPaintings;
const PaintingCard: React.FC<PaintingCardProps> = ({
  imageUrl,
  tokenPrice,
  category,
  title,
  artistUsername,
  description,
  totalTokens,
  tokensOwned,
  yourCosting,
  totalCost,
  ownerAddress,
  id,
}) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
        <CardItem
          className="font-bold translate-z-20 italic text-neutral-600 rounded-2xl dark:text-white/80 p-2 text-sm  mt-3 "
          as="text"
          translateZ="20">
          {tokenPrice}/Token
        </CardItem>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <CardItem
              className="text-3xl font-bold translate-z-20 italic text-neutral-600 dark:text-white  "
              as="text"
              translateZ="20">
              {title}
            </CardItem>
            <CardItem
              as="text"
              translateZ="20"
              className="text-neutral-500 font-normal max-w-sm dark:text-neutral-300 italic">
              By
              <span className="font-bold ml-1">@{artistUsername}</span>
            </CardItem>
          </div>
          <div className="flex mb-4">
            <CardItem as="text" className=" font-xl italic  ">
              <div className="flex gap-2 items-center">
                <Text className="w-4 h-4" />
                {description}
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
                <p className="text-sm font-normal">{totalTokens}</p>
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
                <p className="text-sm font-normal">{tokensOwned}</p>
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
                <p className="text-sm font-normal">{yourCosting}</p>
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
                <p className="text-sm font-normal">{totalCost}</p>
              </div>
            </CardItem>
          </div>

          <div className="flex flex-col items-center gap-6 justify-center">
            <CardItem
              translateZ={20}
              as="text"
              className="rounded-xl font-normal">
              <div className="flex justify-center gap-3 items-center">
                <div className=" flex justify-center gap-1 items-center ">
                  <Rabbit className="h-4 w-4" />
                  <p className="font-bold">Category :</p>
                </div>
                <p className="text-sm font-normal">{category}</p>
              </div>
            </CardItem>
            <CardItem
              translateZ={20}
              as="text"
              className="rounded-xl font-normal">
              <div className="flex justify-center gap-3 items-center">
                <div className=" flex justify-center gap-1 items-center ">
                  <Ghost className="h-4 w-4" />
                  <p className="font-bold">Owner :</p>
                </div>
                <p className="text-sm font-normal">{ownerAddress}</p>
              </div>
            </CardItem>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <CardItem
            translateZ={20}
            as="text"
            className="rounded-xl font-normal">
            <Link href={`/paintings/${id}`}>
              <button className="px-8 py-2 w-full bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                Checkout &rarr;
              </button>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};
