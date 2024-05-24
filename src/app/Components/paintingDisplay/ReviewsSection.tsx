import React, { useState } from "react";
import { Label as AceternityLabel } from "@/components/aceternityUi/label";
import { TextArea as AceternityTextArea } from "@/components/aceternityUi/input";
import Image from "next/image";
import { Heart } from "lucide-react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/Constants/constants";
import {
  useWriteContract,
  useAccount,
  useWaitForTransactionReceipt,
} from "wagmi";
import { toast } from "sonner";
interface Review {
  reviewerUsername: string;
  profileImage: string;
  date: string;
  rating: number;
  comment: string;
  likes: number;
}

interface ReviewsSectionProps {
  reviews: Review[];
  reviewCount: number;
  id: number;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  reviewCount,
  id,
}) => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const account = useAccount();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const addReview = () => {
    const currentDate = new Date().toISOString();
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "addReview",
      args: [Number(id), rating, review, currentDate],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addReview();
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
    <section id="reviews" className="py-8 lg:py-16 antialiased">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            Reviews ({reviewCount})
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
              type="submit"
              onSubmit={(e) => {
                handleSubmit(e);
              }}>
              Submit Review &rarr;
              <BottomGradient />
            </button>
            <div>
              {[...Array(5)].map((_, i) => {
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
                          d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </form>
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} id={id} reviewId={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ReviewCardProps {
  review: any;
  id: number;
  reviewId: number;
}

export default ReviewsSection;

const ReviewCard: React.FC<ReviewCardProps> = ({ review, id, reviewId }) => {
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const account = useAccount();
  const likeReview = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "likeReview",
      args: [id, reviewId],
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
    <article className="p-6 text-base rounded-lg border-2 dark:border-white/20 border-black">
      <div className="flex  justify-between items-center mb-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-7">
            <div className="flex items-center ">
              <p className="inline-flex items-center mr-3 text-sm font-semibold">
                <Image
                  className="mr-2 w-6 h-6 rounded-full"
                  width={24}
                  height={24}
                  src={review.profileImage}
                  alt={review.reviewerUsername}
                />
                {review.reviewerUsername}
              </p>
              <p className="text-sm">
                <time dateTime="2022-02-08" title="February 8th, 2022">
                  {review.date}
                </time>
              </p>
            </div>
            <div className="flex gap-1">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-300"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 15l-5.09 2.6 1.27-5.5L1 8.8l5.5-.47L10 3.5l2.5 4.83 5.5.47-3.18 3.3 1.27 5.5L10 15z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p>{review.comment}</p>
      <div className="flex mt-3 items-center gap-2">
        <button>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              likeReview();
            }}>
            Like
          </button>
          <Heart className="w-5 h-5 text-red-900 text-bold hover:scale-125 active:scale-150 ease-in duration-100" />
        </button>
        <span className="text-sm font-semibold">Liked by {review.likes}</span>
      </div>
    </article>
  );
};
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
const LabelInputContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex  flex-col space-y-2 w-full">{children}</div>;
};
