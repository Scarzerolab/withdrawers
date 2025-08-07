const hre = require("hardhat");

async function main() {
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const one_Years_In_Second = 365 * 24 * 60 * 60;
    const unlockedTime = currentTimestampInSeconds + one_Years_In_Second;

    const lockedAmount = hre.ethers.parseEther("1");
    // console.log(lockedAmount);

    const withdrawers = await hre.ethers.getContractFactory("withdrawers");
    const deployWithdrawers = await withdrawers.deploy(unlockedTime, { value: lockedAmount });
    await deployWithdrawers.waitForDeployment();
    console.log(`Contract contain 1 ether & address: ${deployWithdrawers.target}`);

    // console.log(currentTimestampInSeconds);
    // console.log(one_Years_In_Second);
    // console.log(unlockedTime);
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})