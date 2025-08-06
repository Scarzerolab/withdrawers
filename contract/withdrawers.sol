// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import "hardhat/console.sol";

contract withdrawers{
    uint256 public unlockedTime;
    address payable public owner;

    event Withdrawals(uint256 amount, uint256 time);
}