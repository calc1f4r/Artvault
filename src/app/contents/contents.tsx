import Image from "next/image";
import { IconPaint } from "@tabler/icons-react";
export const Categorieswords = [
  {
    text: "Art's",
  },
  {
    text: "Kaleidoscope:",
    className: "text-purple-400 ",
  },
  {
    text: "with",
  },
  {
    text: "Artvault!",
    className: "text-purple-400 dark:text-purple-400 italic",
  },
];
export const featureswords = [
  {
    text: "Why",
  },
  {
    text: "Choose",
  },
  {
    text: "Artvault?",
    className: "text-purple-400 dark:text-purple-400 italic",
  },
];

export const paintingsWords = [
  {
    text: "Checkout",
  },
  {
    text: "Various",
  },
  {
    text: "Artvault!",
    className: "text-purple-400 dark:text-purple-400 italic",
  },
];
export const items = [
  {
    title: "Fine Art",
    description:
      "where creativity meets mastery, transcending time with each stroke.",
    header: (
      <div className="flex items-center justify-center min-h-[6rem] w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/fineart.jpg"
          alt="fineart"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/",
  },
  {
    title: "Contemporary Art",
    description:
      "the mirror reflecting today's world, pushing boundaries and provoking thought.ive power of technology.",
    header: (
      <div className="flex items-center justify-center  w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/ContemporaryArt.jpg"
          alt="Contemporary Art"
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/",
  },
  {
    title: "Old Masters: ",
    description: "Timeless treasures echoing the mastery of bygone eras.",
    header: (
      <div className="flex items-center justify-center min-h-[6rem] w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/oldmasters.jpg"
          alt="Old Masters"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/",
  },
  {
    title: "Decorative Art",
    description:
      " Where beauty meets function, adding soul to everyday spaces.",
    header: (
      <div className="flex items-center justify-center w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/decorativeArt.jpg"
          alt="decorative Art"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/",
  },
  {
    title: "Regional and Folk Art",
    description:
      "Cultural narratives painted with the colors of tradition and heritage.",
    header: (
      <div className="flex items-center justify-center w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/regional.jpg"
          alt="Regional and Folk Art"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/",
  },
  {
    title: "The Joy of Creation",
    description: "Where imagination dances on the canvas of possibility",
    header: (
      <div className="flex items-center justify-center w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/imagination.jpg"
          alt="Regional and Folk Art"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/",
  },
  {
    title: "The Spirit of Adventure",
    description: "Where the brush explores uncharted realms of creativity",
    header: (
      <div className="flex items-center justify-center w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/adventureofsprit.jpg"
          alt="Regional and Folk Art"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/",
  },

  {
    title: "Abstract Art",
    description: "Where form and color create a language of their own.",
    header: (
      <div className="flex items-center justify-center w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/abstract.jpg"
          alt="Abstract Art"
          width={400}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/abstract-art",
  },
  {
    title: "Digital Art",
    description:
      "Art that leverages digital technology as an essential part of the creative process.",
    header: (
      <div className="flex items-center justify-center w-full h-full rounded-xl flex-1">
        <Image
          src="/ArtCategories/digitalart.jpg"
          alt="Digital Art"
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    icon: <IconPaint className="h-4 w-4 text-neutral-500" />,
    href: "/digital-art",
  },
];

export const checkoutwords = [
  {
    text: "Discover",
  },
  {
    text: "the",
  },
  {
    text: "Latest:",
    className: "text-purple-400 ",
  },
  {
    text: "Vaults!",
    className: "text-purple-400 dark:text-purple-400 italic",
  },
];

export const Paintings: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Fine Art",
    href: "/docs/primitives/alert-dialog",
    description:
      "where creativity meets mastery, transcending time with each stroke.",
  },
  {
    title: "Contemporary Art",
    href: "/docs/primitives/hover-card",
    description:
      "the mirror reflecting today's world, pushing boundaries and provoking thought.ive power of technology.",
  },
  {
    title: "Old Masters",
    href: "/docs/primitives/progress",
    description: "Timeless treasures echoing the mastery of bygone eras.",
  },
  {
    title: "Decorative Art",
    href: "/docs/primitives/scroll-area",
    description:
      "Where beauty meets function, adding soul to everyday spaces..",
  },
  {
    title: "Regional and Folk Art",
    href: "/docs/primitives/tabs",
    description:
      "Cultural narratives painted with the colors of tradition and heritage.",
  },
  {
    title: "The Joy of Creation",
    href: "/docs/primitives/tooltip",
    description: "Where imagination dances on the canvas of possibility",
  },
  {
    title: "The Spirit of Adventure",
    href: "/docs/primitives/tooltip",
    description: "Where the brush explores uncharted realms of creativity",
  },
  {
    title: "Digital Art",
    href: "/docs/primitives/tooltip",
    description:
      "Art that leverages digital technology as an essential part of the creative process.",
  },
];
