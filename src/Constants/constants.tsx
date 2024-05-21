export const CONTRACT_ADDRESS = "0xd8c622e7506d18a1b6e107293bce885477d8ec1d";
export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "PaintingListed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfTokensTransfered",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "PaintingTokenResold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfTokensTransfered",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eachTokenPrice",
        type: "uint256",
      },
    ],
    name: "PaintingTokenSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "reviewer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rating",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "comment",
        type: "string",
      },
    ],
    name: "ReviewAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "reviewIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "liker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "likes",
        type: "uint256",
      },
    ],
    name: "ReviewLiked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "userCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "userid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "lastname",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "firstname",
        type: "string",
      },
    ],
    name: "userUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rating",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "comment",
        type: "string",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "addReview",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "buyPaintingToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPaintings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "paintingId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "PaintingTitle",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "numberOfTokens",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "images",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "eachTokenPrice",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "reviewers",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "reviews",
            type: "string[]",
          },
        ],
        internalType: "struct Artvault.Painting[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHighestRatedPainting",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getPainting",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
    ],
    name: "getPaintingsReview",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "reviewer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "productId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rating",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
        ],
        internalType: "struct Artvault.Review[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUser",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userid",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "string",
            name: "bio",
            type: "string",
          },
          {
            internalType: "string",
            name: "firstname",
            type: "string",
          },
          {
            internalType: "string",
            name: "lastname",
            type: "string",
          },
        ],
        internalType: "struct Artvault.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserPainting",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "paintingId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "PaintingTitle",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "numberOfTokens",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "images",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "eachTokenPrice",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "reviewers",
            type: "address[]",
          },
          {
            internalType: "string[]",
            name: "reviews",
            type: "string[]",
          },
        ],
        internalType: "struct Artvault.Painting[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserReviews",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "reviewer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "productId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "rating",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "comment",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "likes",
            type: "uint256",
          },
        ],
        internalType: "struct Artvault.Review[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reviewIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "likeReview",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numberOfTokens",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_paintingTitle",
        type: "string",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "string",
        name: "_images",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "listPainting",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paintingIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reviewsCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numberOfTokens",
        type: "uint256",
      },
    ],
    name: "sellPaintingToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_productId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numberOfTokens",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_paintingTitle",
        type: "string",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "string",
        name: "_images",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    name: "updatePainting",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "string",
        name: "firstname",
        type: "string",
      },
      {
        internalType: "string",
        name: "lastname",
        type: "string",
      },
      {
        internalType: "string",
        name: "bio",
        type: "string",
      },
    ],
    name: "updateUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "userIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
