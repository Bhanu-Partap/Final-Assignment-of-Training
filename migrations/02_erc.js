
const demo = artifacts.require("ERC-20");

module.exports = function (deployer){
    deployer.deploy(demo);
};