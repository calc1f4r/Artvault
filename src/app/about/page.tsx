import React from "react";
import Image from "next/image";
function About() {
  return (
    <div className="sm:flex items-center max-w-screen h-screen">
      <div className="sm:w-1/2 p-10">
        <div className="image flex items-center justify-center object-center text-center">
          <Image
            src="/aboutUs.png"
            className="rounded-3xl bg-blend-darken shadow-3xl"
            width={600}
            height={600}
            alt="Artvault"
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl italic sm:text-4xl ">
            About <span className="text-purple-400">Artvault</span>
          </h2>
          <div className="mr-7 flex flex-col gap-3">
            <p className="text-sm leading-5 tracking-wide">
              ArtVault is more than just a platform; it is a movement that seeks
              to redefine the art market. Our mission is to make art ownership
              accessible to all, increase transparency, and promote liquidity by
              utilizing blockchain technology.{" "}
            </p>
            <p>
              We believe that art should be available to everyone, irrespective
              of their financial status or background. At ArtVault, we are
              creating an inclusive and dynamic community where artists,
              collectors, investors, and enthusiasts can come together to
              explore, engage, and invest in the beauty of art.
            </p>
            <p>
              Join us on our journey to unlock the true potential of art and
              revolutionize the art market for the better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
