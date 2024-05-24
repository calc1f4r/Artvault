"use client";
import React from "react";
import ReviewsSection from "@/app/Components/paintingDisplay/ReviewsSection";
import PaintingDisplay from "@/app/Components/paintingDisplay/paintingDisplay";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/Constants/constants";
import { useReadContract, useAccount } from "wagmi";
interface PaintingInfo {
  artistImage: string;
  availableTokens: bigint;
  category: string;
  description: string;
  eachTokenPrice: bigint;
  images: string;
  originalOwner: string;
  originalOwnerUsername: string;
  paintingId: bigint;
  paintingTitle: string;
  rating: bigint;
  totalCostOfPainting: bigint;
  totalTokens: bigint;
}
interface Review {
  reviewerUsername: string;
  profileImage: string;
  date: string;
  rating: number;
  comment: string;
  likes: number;
}

function Painting({ params }: any) {
  const [paintingInfo, setPaintingsInfo] = React.useState<PaintingInfo>({});
  const [reviews, setReviews] = React.useState<Review[]>([]);
  const { address, isConnecting } = useAccount();

  const { data: reviewData } = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "getAllReviews",
    args: [Number(params.id)],
    account: address,
  });

  console.log(reviewData);
  let { data: painting }: any = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "getPaintingInfo",
    args: [Number(params.id)],
    account: address,
  });

  React.useEffect(() => {
    if (painting) {
      setPaintingsInfo(painting);
    }
  }, [painting]);

  console.log(reviews);
  React.useEffect(() => {
    if (reviewData) {
      setReviews(reviewData);
    }
  }, [reviewData]);

  const reviewCount = reviews.length;
  return (
    <>
      <PaintingDisplay
        paintingId={Number(params.id)}
        paintingTitle={paintingInfo.paintingTitle}
        artistUsername={paintingInfo.originalOwnerUsername}
        artistImage={paintingInfo.artistImage}
        paintingImage={paintingInfo.images}
        tokenPrice={Number(paintingInfo.eachTokenPrice)}
        totalTokens={Number(paintingInfo.totalTokens)}
        availableTokens={Number(paintingInfo.availableTokens)}
        paintingCost={Number(paintingInfo.totalCostOfPainting)}
        category={paintingInfo.category}
        description={paintingInfo.description}
        rating={Number(paintingInfo.rating)}
        reviewsCount={Number(paintingInfo.rating)}
      />
      <ReviewsSection reviews={reviews} reviewCount={reviewCount} id={1} />
    </>
  );
}

export default Painting;
