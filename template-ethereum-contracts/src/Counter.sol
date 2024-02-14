// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Counter {
    uint public count = 100;

    // Function to get the current count
    function get() public view returns (uint) {
        return count;
    }

    // Function to increment count by 1
    function inc() external {
        count += 1;
    }

    // Function to decrement count by 1
    function dec() external {
        // This function will fail if count = 0
        count -= 1;
    }
}