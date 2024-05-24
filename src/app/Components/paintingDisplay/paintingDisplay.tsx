"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  CircleDollarSign,
  HandCoins,
  PiggyBank,
  Brush,
  Coins,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useWaitForTransactionReceipt } from "wagmi";
import { useWriteContract, useAccount } from "wagmi";
import { toast } from "sonner";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/Constants/constants";
import { parseEther } from "ethers/utils";

interface PaintingDisplayProps {
  paintingId: number;
  paintingTitle: string;
  artistUsername: string;
  artistImage: string;
  paintingImage: string;
  tokenPrice: number;
  totalTokens: number;
  availableTokens: number;
  paintingCost: number;
  category: string;
  description: string;
  rating: number;
  reviewsCount: number;
}

const PaintingDisplay: React.FC<PaintingDisplayProps> = ({
  paintingId,
  paintingTitle,
  artistUsername,
  artistImage,
  paintingImage,
  tokenPrice,
  totalTokens,
  availableTokens,
  paintingCost,
  category,
  description,
  rating,
  reviewsCount,
}) => {
  console.log("available tokens");
  const [tokenNumber, setTokenNumber] = React.useState<number>(
    Number(availableTokens / 2)
  );
  React.useEffect(() => {
    setTokenNumber(Number(availableTokens / 2));
  }, [availableTokens]);
  const { address, isConnecting } = useAccount();
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const buyPainting = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "buyPaintingToken",
      args: [BigInt(paintingId), BigInt(tokenNumber)],
      value: parseEther((0.01 * 100000).toString()),
    });
  };

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });
  React.useEffect(() => {
    if (isConfirming) {
      toast.info("Transaction is being confirmed!");
    } else if (isConfirmed) {
      toast.success("Transaction has been confirmed!");
    }
  }, [isConfirming, isConfirmed]);

  return (
    <section className="py-8 md:py-16  antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink max-w-md lg:max-w-lg mx-auto rounded-lg">
            <Image
              src={paintingImage}
              height="1000"
              width="1000"
              className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {paintingTitle}
            </h1>

            <div className="flex gap-2 mt-3">
              <p className="font-semibold text-normal italic">By</p>
              <div className="flex gap-1 items-center justify-start">
                <div className="border-[1px] border-purple-200 p-[1px] rounded-full">
                  <Image
                    alt="pfp"
                    src={artistImage}
                    width={20}
                    className="rounded-full object-cover"
                    height={20}
                  />
                </div>
                <p className="text-sm italic font-semibold text-purple-400/80">
                  @{artistUsername}
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
                {tokenPrice} wei / Token
              </p>

              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < rating ? "text-yellow-300" : "text-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  ({rating.toFixed(1)})
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                  {reviewsCount} Reviews
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
                  <p className="text-sm font-normal">{totalTokens}</p>
                </div>
                <div className="flex  item  gap-3 items-center">
                  <div className=" flex justify-center gap-1 items-center ">
                    <HandCoins className="h-4 w-4" />
                    <p className="font-bold">Available Tokens :</p>
                  </div>
                  <p className="text-sm font-normal">{availableTokens}</p>
                </div>
                <div className="flex  gap-3 items-center">
                  <div className=" flex justify-center gap-1 items-center ">
                    <PiggyBank className="h-4 w-4" />
                    <p className="font-bold">Painting Cost:</p>
                  </div>
                  <p className="text-sm font-normal">{paintingCost} Wei</p>
                </div>
                <div className="flex  gap-3 items-center">
                  <div className=" flex justify-center gap-1 items-center ">
                    <Brush className="h-4 w-4 " />
                    <p className="font-bold">Category :</p>
                  </div>
                  <p className="text-sm font-normal">{category}</p>
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
                      defaultValue={[availableTokens / 2]}
                      min={0}
                      onValueChange={(e) => {
                        setTokenNumber(e[0]);
                      }}
                      value={[tokenNumber]}
                      max={availableTokens}
                      step={1}
                      className="mt-3 range-sm"
                    />
                    <Input
                      type="text"
                      placeholder="Number Of tokens"
                      className="w-20"
                      value={tokenNumber}
                      onChange={(e) => {
                        setTokenNumber(Number(e.target.value));
                      }}
                    />
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  buyPainting();
                }}>
                Buy Tokens for {tokenPrice * tokenNumber} wei
              </Button>
            </div>

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <p className="mb-6 ">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingDisplay;
