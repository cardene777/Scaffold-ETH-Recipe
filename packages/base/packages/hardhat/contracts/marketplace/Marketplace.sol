// SPDX-License-Identifier: Apache-2.0
pragma solidity 0.8.23;

import { MarketplaceV3 } from "@thirdweb-dev/contracts/prebuilts/marketplace/entrypoint/MarketplaceV3.sol";

contract Marketplace is MarketplaceV3 {
    // New state variables
    mapping(address => uint256) private userBalances;

    // Constructor for the Marketplace
    constructor(MarketplaceConstructorParams memory _params)
        MarketplaceV3(_params)
    {}

    // New initializer for Marketplace
    function initialize(
        address _defaultAdmin,
        string memory _contractURI,
        address[] memory _trustedForwarders,
        address _platformFeeRecipient,
        uint16 _platformFeeBps
    ) external initializer {
        // Call the parent contract's initialize function
        MarketplaceV3.initialize(
            _defaultAdmin,
            _contractURI,
            _trustedForwarders,
            _platformFeeRecipient,
            _platformFeeBps
        );

        // Additional initialization logic if needed
    }

    // New function to add balance to user account
    function addBalance() external payable {
        userBalances[msg.sender] += msg.value;
    }

    // New function to withdraw balance from user account
    function withdrawBalance(uint256 _amount) external nonReentrant {
        require(userBalances[msg.sender] >= _amount, "Insufficient balance");
        userBalances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }

    // Function to get user balance
    function getUserBalance(address _user) external view returns (uint256) {
        return userBalances[_user];
    }
}
