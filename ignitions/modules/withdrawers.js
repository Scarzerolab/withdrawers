const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules")

const timeLocked = 1786188295;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("withdrawersModule", (m) => {
    const unlockTime = m.getParameter("unlockTime", timeLocked);
    const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

    const withdrawers = m.contract("withdrawers", [unlockTime], {
        value: lockedAmount,
    })
// ignitions/modules/withdrawers.js
    return {withdrawers};
})