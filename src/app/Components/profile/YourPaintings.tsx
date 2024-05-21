import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

function YourPaintings() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-3">
        {Array(1)
          .fill(null)
          .map((_, i) => (
            <CardContainer key={i} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold  text-neutral-600 dark:text-white">
                  Shiva
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  The god who is the god of all others
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src="/temp/download.jpeg"
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="mt-2 flex flex-col items-start gap-4">
                  <div className="flex gap-4 justify-around ">
                    <CardItem
                      translateZ={20}
                      as="text"
                      className="rounded-xl text-sm font-normal">
                      Total Tokens : 1600000
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="text"
                      className="rounded-xl text-sm font-normal">
                      Tokens Owned : 80000
                    </CardItem>
                  </div>
                  <div className="flex gap-4 justify-around">
                    <CardItem
                      translateZ={20}
                      as="text"
                      className="rounded-xl text-sm font-normal">
                      Price per Token : 0.00000001 ETH
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="text"
                      className="rounded-xl text-sm font-normal">
                      Your costing : 0.8ETH
                    </CardItem>
                  </div>
                  <div className="flex gap-4 justify-around">
                    <CardItem
                      translateZ={20}
                      as="text"
                      className="rounded-xl text-sm font-normal">
                      Total Cost : 2.1 ETH
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="text"
                      className="rounded-xl text-sm font-normal">
                      Author : @jasmine
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
      </div>
    </div>
  );
}

export default YourPaintings;
