const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("withdrawers", function () {
    it("deploying check", async function () {
        const lockedAmount = hre.ethers.parseEther("1");
        const one_Years_In_Second = 365 * 24 * 60 * 60; //days, hours, minutes, seconds
        const unlockTime = (await time.latest()) + one_Years_In_Second;

        console.log(unlockTime);

        // const withdrawers = await hre.ethers.deployContract("withdrawers", [unlockTime], {
        //     value: lockedAmount,
        // });

        // expect(await withdrawers.unlockedTime()).to.equal(unlockTime);
        // await expect(withdrawers.Withdraw()).to.be.revertedWith("fund is still locked");
    })
})