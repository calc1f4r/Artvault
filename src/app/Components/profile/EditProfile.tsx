"use client";

import React from "react";
import { Input as UIInput } from "@/components/ui/input";
import Arweave from "arweave";
import {
  Input as AceternityInput,
  TextArea as AceternityTextArea,
} from "@/components/aceternityUi/input";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/Constants/constants";
import { Label as AceternityLabel } from "@/components/aceternityUi/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useWriteContract, useReadContract, useAccount } from "wagmi";
import { useWaitForTransactionReceipt } from "wagmi";
import { toast } from "sonner";
import { JWKInterface } from "arweave/node/lib/wallet";

function EditProfile() {
  const [file, setFile] = React.useState<File | null>(null);
  const [imageUrl, setImageUrl] = React.useState<string>("/temp/pfp.jpg");
  const [username, setUsername] = React.useState("");
  const [bio, setBio] = React.useState("");
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const { address, isConnecting } = useAccount();
  let { data }: any = useReadContract({
    abi: CONTRACT_ABI,
    address: CONTRACT_ADDRESS,
    functionName: "getUser",
    account: address,
  });

  // Arweave initializations
  const initOptionsLocal = {
    host: "localhost",
    port: 1984,
    protocol: "http",
    timeout: 20000,
    logging: true,
  };

  const arweave = Arweave.init(initOptionsLocal);

  const handleSubmission = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    try {
      const contentType = "image/png";
      const reader = new FileReader();
      reader.onload = async () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        console.log(arrayBuffer);
        // Load your wallet key file (replace with your own method of loading the key)
        const wallet = JSON.parse(
          process.env.NEXT_PUBLIC_ARWEAVE_PRIVATE_KEY!
        ) as JWKInterface;

        // Upload the file
        const value = await arweaveUpload(wallet, arrayBuffer, contentType);

        if (value) {
          const imageUrl: string = `http://localhost:1984/${value.id}`;
          console.log(imageUrl);
          setImageUrl(imageUrl);
        }
      };
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error(error);
    }
  };

  const arweaveUpload = async (
    key: any,
    data: any,
    contentType: string = "image/png",
    isUploadByChunk = false
  ) => {
    try {
      // Get wallet address and balance
      const arweaveWallet = await arweave.wallets.jwkToAddress(key);

      // Sign transaction
      const arweaveWalletBalance = await arweave.wallets.getBalance(
        arweaveWallet
      );

      const tokens = arweave.ar.arToWinston("90");

      await arweave.api.get(`/mint/${arweaveWallet}/${tokens}`);

      const tx = await arweave.createTransaction({ data: data }, key);
      tx.addTag("Content-Type", contentType[1]);

      await arweave.transactions.sign(tx, key);
      // Post transaction
      const response = await arweave.transactions.post(tx);

      // Get transaction status
      const status = await arweave.transactions.getStatus(tx.id);
      if (status.status === 200) {
        toast.success("File has been Uploaded successfully!");
      } else {
        toast.error("Transaction has failed!");
      }
      return tx;
    } catch (error) {
      console.error("Error in upload :", error);
    }
  };

  if (data == undefined) {
    data = {};
  }

  React.useEffect(() => {
    if (data) {
      if (data.username) {
        setUsername(data.username);
      }
      setLastName(data.lastname);
      if (data.profileImage) {
        setImageUrl(data.profileImage);
      }
      setBio(data.bio);
      setFirstName(data.firstname);
    }
  }, [data]);

  const updateuser = () => {
    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: "updateUser",
      args: [username, firstname, imageUrl, lastname, bio],
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
    <>
      <main className="mt-12 w-full lg:flex justify-center gap-7 items-center p-3">
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className="border-2 p-3 border-purple-500 rounded-full shadow-violet-300 ">
              <div className="border-2 p-3 border-purple-300 rounded-full ">
                <Image
                  src={imageUrl}
                  alt="pfp"
                  width={200}
                  height={200}
                  className="rounded-full border-3 darken shadow-xl"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col justify-center items-center gap-6">
              <UIInput
                onChange={(e) => {
                  setFile(e.target.files![0]);
                }}
                className="bg-transparent cursor-pointe "
                id="picture"
                type="file"
              />
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-950 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-900 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
                onClick={(e) => {
                  handleSubmission();
                }}>
                Upload &rarr;
                <BottomGradient />
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent">
          <form className="my-8 flex flex-col gap-5">
            <LabelInputContainer>
              <AceternityLabel htmlFor="firstname">First name</AceternityLabel>
              <AceternityInput
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required={true}
                value={firstname}
                id="firstname"
                placeholder="Tyler"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <AceternityLabel htmlFor="lastname">Last name</AceternityLabel>
              <AceternityInput
                required={true}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastname}
                id="lastname"
                placeholder="Durden"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <AceternityLabel htmlFor="username">Username</AceternityLabel>
              <AceternityInput
                required={true}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                id="username"
                placeholder="@calc1f4r"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <AceternityLabel htmlFor="address">Address</AceternityLabel>
              <AceternityInput
                readOnly
                id="walletAdress"
                placeholder="0x000000000000000000000000"
                value={address}
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <AceternityLabel htmlFor="address">Bio</AceternityLabel>
              <AceternityTextArea
                id="bio"
                onChange={(e) => {
                  setBio(e.target.value);
                }}
                value={bio}
                placeholder="Tell us about yourself!"
                className="text-sm flex items-start justify-start"
              />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-950 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-900 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                updateuser();
              }}>
              Update Profile &rarr;
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
      </main>
    </>
  );
}

export default EditProfile;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
