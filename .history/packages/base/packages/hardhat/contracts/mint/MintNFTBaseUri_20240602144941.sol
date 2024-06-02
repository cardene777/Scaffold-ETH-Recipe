// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721URIStorage } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import { ERC721Burnable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

contract MintNFTBaseUri is
	ERC721,
	ERC721URIStorage,
	ERC721Burnable,
	Ownable
{
	uint256 private _nextTokenId;
	string public baseURI;

	// =============================================================
	//                          CONSTRUCTOR
	// =============================================================

	constructor(
		string memory _baseUri
	) ERC721("ScaffoldRecipeNFTBaseUri", "SRNBU") Ownable(msg.sender) {
		setBaseUri(_baseUri);
	}

	// =============================================================
	//                         EXTERNAL WRITE
	// =============================================================

	/// @notice Mint a token
	/// @param to The address to mint the token to
	/// @param uri The URI of the token
	function safeMint(address to, string memory uri) public {
		uint256 tokenId = _nextTokenId++;
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, uri);
	}

	/// @notice Set the base URI
	/// @param uri The base URI
	/// @dev Only the owner can call this function
	function setBaseUri(string memory uri) public onlyOwner {
		baseURI = uri;
	}

	// =============================================================
	//                         EXTERNAL VIEW
	// =============================================================

	/// @notice Get the token URI
	/// @param tokenId The token ID
	/// @return The token URI
	function tokenURI(
		uint256 tokenId
	) public view override(ERC721, ERC721URIStorage) returns (string memory) {
		return super.tokenURI(tokenId);
	}

	/// @notice Check if the contract supports the interface
	/// @param interfaceId The interface ID
	/// @return True if the contract supports the interface, false otherwise
	function supportsInterface(
		bytes4 interfaceId
	) public view override(ERC721, ERC721URIStorage) returns (bool) {
		return super.supportsInterface(interfaceId);
	}
}
