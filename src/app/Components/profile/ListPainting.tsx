import {
  Input as AceternityInput,
  TextArea as AceternityTextArea,
} from "@/components/aceternityUi/input";
import { Input as UIInput } from "@/components/ui/input";
import { Label as AceternityLabel } from "@/components/aceternityUi/label";
import Image from "next/image";
import React from "react";

const options = [
  "Fine Art",
  "Contemprary Art",
  "Old Masters",
  "Decorative Art",
  "Regional And Folk Art",
  "The Spirit of Adventure",
  "Abstract Art",
  "Digital Art",
];
function ListPainting() {
  const [file, setFile] = React.useState<File | null>(null);
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>();
  const [costPerToken, setCostPerToken] = React.useState<number>();
  const [paintingCost, setPaintingCost] = React.useState<number>();
  const [category, setCategory] = React.useState<string>();
  const [numberofTokens, setNumberofTokens] = React.useState<number>();
  const [imageUrl, setImageUrl] = React.useState<string>();

  const submitFile = async () => {
    console.log(file);
  };

  React.useEffect(() => {
    if (numberofTokens && paintingCost) {
      setCostPerToken(paintingCost / numberofTokens);
    }
  }, [numberofTokens, paintingCost]);
  return (
    <div className="mt-12 w-full lg:flex  justify-center gap-2 items-center p-3">
      <div className="flex flex-col items-center justify-center">
        <div className="border-2 p-3 border-purple-500  shadow-violet-300 ">
          <div className="border-2 p-3 border-purple-300 ">
            <Image
              src={"/ArtCategories/imagination.jpg"}
              alt="Painting design"
              width={400}
              height={400}
              className="border-3 object-contain darken shadow-xl"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center gap-6">
          <UIInput
            className="bg-transparent cursor-pointer"
            id="picture"
            onChange={(e) => {
              setFile(e.target.files![0]);
            }}
            type="file"
          />
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-8 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              submitFile();
            }}>
            Upload &rarr;
            <BottomGradient />
          </button>
        </div>
      </div>
      <div className="lg:w-2/5 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent">
        <h2 className="italic text-xl text-purple-400/80 text-center">
          List Your Paiting In a Tokenized Format!
        </h2>
        <form className="my-8 flex flex-col gap-8">
          <LabelInputContainer>
            <AceternityLabel htmlFor="paintingTitle">
              Painting Title
            </AceternityLabel>
            <AceternityInput
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              id="paintingTitle"
              placeholder="Painting Title"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <AceternityLabel htmlFor="Category">Category</AceternityLabel>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              value={category}
              className="flex h-12 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-neutral-400 shadow-input rounded-md px-3 py-2 text-sm  
              file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600">
              <option className="dark:text-white  text-black">
                Please choose one option
              </option>
              {options.map((option, index) => {
                return (
                  <option
                    key={index}
                    className="p-1 font-normal  dark:text-white text-black">
                    {option}
                  </option>
                );
              })}
            </select>
          </LabelInputContainer>
          <LabelInputContainer>
            <AceternityLabel htmlFor="paintingCost">
              Painting Price
            </AceternityLabel>
            <AceternityInput
              id="paintingCost"
              value={paintingCost}
              placeholder="give value in 10**18 terms"
              type="number"
              onChange={(e) => {
                setPaintingCost(Number(e.target.value));
              }}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <AceternityLabel htmlFor="numberOfTokens">
              Number Of Tokens
            </AceternityLabel>
            <AceternityInput
              value={numberofTokens}
              onChange={(e) => {
                setNumberofTokens(Number(e.target.value));
              }}
              id="numberofTokens"
              placeholder="10000"
              type="number"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <AceternityLabel htmlFor="costPerToken">
              Cost Per Token
            </AceternityLabel>
            <AceternityInput
              id="costPerToken"
              value={costPerToken?.toString() + " wei"}
              placeholder="Price Per token"
              type="text"
              readOnly
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <AceternityLabel htmlFor="description">Description</AceternityLabel>
            <AceternityTextArea
              id="password"
              placeholder="Give a description about the painting"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit">
            List your Paining!!
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

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
export default ListPainting;
