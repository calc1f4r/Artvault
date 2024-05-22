export const CONTRACT_ADDRESS = "0xe1842488e99d33927c9824ffe5ba1556719ba5ac";
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
        name: "numberOfTokensTransferred",
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
        name: "numberOfTokensTransferred",
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
    name: "UserCreated",
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
    name: "UserUpdated",
    type: "event",
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
    name: "buyPaintingToken",
    outputs: [],
    stateMutability: "payable",
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
        name: "profileImage",
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
    name: "getAllPaintings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokensOwnedByViewer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCostOfPainting",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "originalOwner",
            type: "address",
          },
          {
            internalType: "string",
            name: "originalOwnerUsername",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "paintingId",
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
            internalType: "uint256",
            name: "eachTokenPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "paintingTitle",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableTokens",
            type: "uint256",
          },
        ],
        internalType: "struct Artvault.PaintingInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPaintingsListedByUser",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokensOwnedByViewer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCostOfPainting",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "originalOwner",
            type: "address",
          },
          {
            internalType: "string",
            name: "originalOwnerUsername",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "paintingId",
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
            internalType: "uint256",
            name: "eachTokenPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "paintingTitle",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableTokens",
            type: "uint256",
          },
        ],
        internalType: "struct Artvault.PaintingInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPaintingsOwnedByUser",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokensOwnedByViewer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalCostOfPainting",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "originalOwner",
            type: "address",
          },
          {
            internalType: "string",
            name: "originalOwnerUsername",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "paintingId",
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
            internalType: "uint256",
            name: "eachTokenPrice",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "paintingTitle",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalTokens",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableTokens",
            type: "uint256",
          },
        ],
        internalType: "struct Artvault.PaintingInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProfileImage",
    outputs: [
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
            name: "profileImage",
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
