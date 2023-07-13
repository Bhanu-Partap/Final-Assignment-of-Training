
const demo = artifacts.require("final_assignment_staking_1");

module.exports = function (deployer){
    deployer.deploy(demo, "0xd9145CCE52D386f254917e481eB44e9943F39138");
};