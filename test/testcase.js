const assignment = artifacts.require("final_assignment_staking_1");
const { expect } = require('chai');

contract("final assignment test cases", async () => {
  it("should it setting the right value", async () => {
    const contr = await assignment.deployed();

    const value = await contr.staking(100, "fixed", 100, true,{from:"0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", gas:300000});
    console.log(value);
    expect(await value.toNumber()).to.equal(100, "fixed", 100, true);
  });
});
