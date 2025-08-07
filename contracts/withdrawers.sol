// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "hardhat/console.sol";

contract withdrawers{
    uint256 public unlockedTime;
    address payable public owner;

    event Withdrawals(uint256 amount, uint256 time);

    constructor(uint256 _unlockedTime) payable{
        require(block.timestamp < _unlockedTime, "incorect time input");

        unlockedTime = _unlockedTime;
        owner = payable(msg.sender);
    }

    function Withdraw() public{
        require(block.timestamp >= unlockedTime, "fund is still locked");
        require(msg.sender == owner, "You are not the owner");

        owner.transfer(address(this).balance);

        emit Withdrawals(address(this).balance, block.timestamp);
    }
}