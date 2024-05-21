"use client";
import React from "react";

import EditProfile from "@/app/Components/profile/EditProfile";
import ListPainting from "../Components/profile/ListPainting";
import YourPaintings from "@/app/Components/profile/YourPaintings";
import ListedPaintings from "@/app/Components/profile/ListedPaintings";
import { useAccount } from "wagmi";
import { Wallet } from "lucide-react";

function Profile() {
  const account = useAccount();

  const [section, setSection] = React.useState("profile");
  return account.address ? (
    <main className="flex flex-col items-center h-screen">
      <div className="mt-5 flex gap-3 border rounded-full p-3">
        <button
          disabled={!account}
          className="relative inline-flex h-8 w-24 sm:h-12 sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => setSection("profile")}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
            Profile
          </span>
        </button>
        <button
          className="relative inline-flex h-8 w-24 sm:h-12 sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => setSection("paintings")}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
            Your Paintings
          </span>
        </button>
        <button
          className="relative inline-flex h-8 w-24 sm:h-12 sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={() => setSection("listPainting")}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
            List Painting
          </span>
        </button>
        <button
          className="relative inline-flex h-8 w-24 sm:h-12 sm:w-32 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 p- focus:ring-offset-slate-50"
          onClick={() => setSection("listedPaintings")}>
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl">
            Listed Paintings
          </span>
        </button>
      </div>
      {section === "profile" ? (
        <EditProfile />
      ) : section === "paintings" ? (
        <YourPaintings />
      ) : section === "listPainting" ? (
        <ListPainting />
      ) : section === "listedPaintings" ? (
        <ListedPaintings />
      ) : null}
    </main>
  ) : (
    <div className="h-screen flex gap-3 items-center justify-center">
      <p className="text-2xl">|| Connect your wallet</p> <Wallet /> ||
    </div>
  );
}

export default Profile;
