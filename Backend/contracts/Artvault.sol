// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

contract Artvault {

    // State variables 

    struct Painting {
        uint paintingId;
        address owner;
        uint price;
        string PaintingTitle;
        uint numberOfTokens; 
        string category;
        string images; 
        string description;
        uint eachTokenPrice;
        address[] reviewers;
        string[] reviews; 
    }

    mapping (uint256 => Painting) private paintings;
    uint256 public paintingIndex;

    event PaintingListed(uint indexed id, address indexed owner, uint256 price, uint numberOfTokens);
    event PaintingTokenSold(uint256 indexed id, uint numberOfTokensTransfered, address indexed oldOwner, address indexed newOwner, uint price, uint eachTokenPrice);
    event PaintingTokenResold(uint256 indexed id, address indexed oldOwner, uint numberOfTokensTransfered, address indexed newOwner, uint price);

    // Review Section

    struct Review {
        address reviewer;
        uint256 productId;
        uint rating;
        string comment;
        uint likes;
    }

    struct Product {
        uint productId;
        uint totalRating;
        uint numReviews;
    }

    mapping(uint => Review[]) private reviews;
    mapping(address => uint[]) private userReviews;
    mapping(uint => Product) private products;
    uint public reviewsCounter;

    event ReviewAdded(uint indexed productId, address indexed reviewer, uint256 rating, string comment);
    event ReviewLiked(uint indexed productId, uint indexed reviewIndex, address indexed liker, uint likes);

    function listPainting(address _owner, uint _price, uint _numberOfTokens, string memory _paintingTitle, string memory _category, string memory _images, string memory _description) external returns (uint256) {
        require(_price > 0, "Price must be greater than 0");
        require(_numberOfTokens > 0, "Number of tokens must be greater than 1");
        uint productId = paintingIndex++;
        uint _eachTokenPrice = _price / _numberOfTokens;
        Painting storage painting = paintings[productId];
        painting.paintingId = productId;
        painting.owner = _owner;
        painting.numberOfTokens = _numberOfTokens;
        painting.price = _price;
        painting.PaintingTitle = _paintingTitle;
        painting.category = _category;
        painting.images = _images;
        painting.description = _description;
        painting.eachTokenPrice = _eachTokenPrice;
        emit PaintingListed(productId, _owner, _price, _numberOfTokens);
        return productId;
    }

    function updatePainting(address _owner, uint _productId, uint _price, uint _numberOfTokens, string memory _paintingTitle, string memory _category, string memory _images, string memory _description) external returns (uint) {
        Painting storage painting = paintings[_productId];
        require(painting.owner == _owner, "You are not the owner");
        require(_numberOfTokens > 0, "The number of tokens must be bigger than 0");
        painting.price = _price;
        painting.numberOfTokens = _numberOfTokens;
        painting.PaintingTitle = _paintingTitle;
        painting.category = _category;
        painting.images = _images;
        painting.description=_description;
        painting.eachTokenPrice = _price / _numberOfTokens;
        return _productId;
    }

    function buyPaintingToken(uint256 id, address buyer, uint numberOfTokens) external payable {
        uint amount = msg.value;
        Painting storage painting = paintings[id];
        require(amount >= numberOfTokens * painting.eachTokenPrice, "Insufficient Funds");
        require(numberOfTokens <= painting.numberOfTokens, "Not enough tokens available");
        
        (bool sent, ) = payable(painting.owner).call{value: amount}("");
        require(sent, "Failed to send Ether to painting owner");

        painting.owner = buyer;
        painting.numberOfTokens -= numberOfTokens;
        emit PaintingTokenSold(id, numberOfTokens, painting.owner, buyer, amount, painting.eachTokenPrice);
    }

    function sellPaintingToken(uint256 id, uint numberOfTokens) external {
        Painting storage painting = paintings[id];
        require(msg.sender == painting.owner, "You are not the owner of this painting");
        require(numberOfTokens <= painting.numberOfTokens, "Not enough tokens to sell");

        uint tokenPrice = numberOfTokens * painting.eachTokenPrice;
        payable(msg.sender).transfer(tokenPrice);

        painting.owner = address(this); // Transfers ownership back to the contract
        painting.numberOfTokens += numberOfTokens;
        emit PaintingTokenResold(id, msg.sender, numberOfTokens, address(this), tokenPrice);
    }

function getAllPaintings() external view returns (Painting[] memory) {
    uint itemCount = paintingIndex;
    Painting[] memory items = new Painting[](itemCount);
    for (uint i = 0; i < itemCount; i++) {
        items[i] = paintings[i];
    }
    return items;
}
    function getPainting(uint id) external view returns (uint, uint, uint, uint, address, string memory, string memory, string memory, string memory) {
        Painting memory painting = paintings[id];
        return (painting.paintingId, painting.price, painting.numberOfTokens, painting.eachTokenPrice, painting.owner, painting.PaintingTitle, painting.description, painting.images, painting.category);
    }

function getUserPainting(address user) external view returns (Painting[] memory) {
    uint totalItemCount = paintingIndex;
    uint itemCount = 0;
    uint currentIndex = 0;
    for (uint i = 0; i < totalItemCount; i++) {
        if (paintings[i].owner == user) { // Check if the owner of the painting matches the specified user
            itemCount++;
        }
    }
    Painting[] memory items = new Painting[](itemCount);
    for (uint i = 0; i < totalItemCount; i++) {
        if (paintings[i].owner == user) { // Check if the owner of the painting matches the specified user
            items[currentIndex] = paintings[i];
            currentIndex++;
        }
    }
    return items;
}

    // Reviews Function 

    function addReview(uint productId, uint rating, string calldata comment, address user) external {
        require(rating >= 1 && rating <= 5, "Rating must be between 1 and 5");
        reviewsCounter++;
        Painting storage painting = paintings[productId]; 
        painting.reviewers.push(user);
        painting.reviews.push(comment);
        reviews[productId].push(Review(user, productId, rating, comment, 0));
        userReviews[user].push(productId);
        products[productId].totalRating += rating;
        products[productId].numReviews++;
        emit ReviewAdded(productId, user, rating, comment);
    }

    function getPaintingsReview(uint productId) external view returns (Review[] memory) {
        return reviews[productId];
    }

    function getUserReviews(address user) external view returns (Review[] memory) {
        uint totalReviews = userReviews[user].length;
        Review[] memory userProductReviews = new Review[](totalReviews);
        for (uint i = 0; i < totalReviews; i++) {
            uint productId = userReviews[user][i];
            Review[] memory productReviews = reviews[productId];
            for (uint j = 0; j < productReviews.length; j++) {
                if (productReviews[j].reviewer == user) {
                    userProductReviews[i] = productReviews[j];
                }
            }
        }
        return userProductReviews;
    }

    function likeReview(uint256 productId, uint256 reviewIndex, address user) external {
        Review storage review = reviews[productId][reviewIndex];
        review.likes++;
        emit ReviewLiked(productId, reviewIndex, user, review.likes);
    }

    function getHighestRatedPainting() external view returns (uint256) {
        uint256 highestRating = 0;
        uint256 highestRatedProductId = 0;
        for (uint256 i = 0; i < paintingIndex; i++) {
            uint256 productId = i + 1;
            if (products[productId].numReviews > 0) {
                uint256 avgRating = products[productId].totalRating / products[productId].numReviews;
                if (avgRating > highestRating) {
                    highestRating = avgRating;
                    highestRatedProductId = productId;
                }
            }
        }
        return highestRatedProductId;
    }
}