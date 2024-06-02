// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import { ERC721Burnable } from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract ScaffoldRecipeNFTOnchain is
	ERC721,
	ERC721Burnable,
	Ownable
{
	uint256 private _nextTokenId;
	mapping(uint256 => string) private _tokenURIs;

	// =============================================================
	//                          CONSTRUCTOR
	// =============================================================

	constructor() ERC721("ScaffoldRecipeNFTOnchain", "SRNO") Ownable(msg.sender) {}

	// =============================================================
	//                         EXTERNAL WRITE
	// =============================================================

	/// @notice Mint a token
	/// @param to The address to mint the token to
	/// @param uri The URI of the token
	function safeMint(address to, string memory uri) public {
		uint256 tokenId = _nextTokenId++;
		_safeMint(to, tokenId);
		_tokenURIs[tokenId] = uri;
	}

	// =============================================================
	//                         EXTERNAL VIEW
	// =============================================================

	/// @notice Get the token URI
	/// @param tokenId The token ID
	/// @return The token URI
	function tokenURI(
		uint256 tokenId
	) public view override(ERC721) returns (string memory) {
		return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                            abi.encodePacked(
                                '{"name": "ScaffoldRecipeNFTOnchain #',
                                Strings.toString(tokenId),
                                '", "description": "ScaffoldRecipeNFTOnchain NFT", "image": "',
                                _tokenURIs[tokenId],
                                '"}'
                            )
                        )
                    )
                )
            );
	}

	/// @notice Check if the contract supports the interface
	/// @param interfaceId The interface ID
	/// @return True if the contract supports the interface, false otherwise
	function supportsInterface(
		bytes4 interfaceId
	) public view override(ERC721) returns (bool) {
		return super.supportsInterface(interfaceId);
	}
}
