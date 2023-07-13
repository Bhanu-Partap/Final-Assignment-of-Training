const assignment = artifacts.require("final_assignment_staking_1");
const { expect } = require('chai');

contract("final assignment test cases", async () => {
  it("should it setting the right value", async () => {
    const contr = await assignment.deployed();

    const value = await contr.staking(100, "fixed", 100, true);
    console.log(value);
    expect(await value.toNumber()).to.equal(100, "fixed", 100, true);
  });
});
