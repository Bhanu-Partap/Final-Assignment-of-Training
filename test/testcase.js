const assignment = artifacts.require("final_assignment_staking_1");
const erc20 = artifacts.require("ERC-20");
const { expect } = require("chai");

contract("final assignment test cases", (accounts) => {
  let erC20;
  let stakingcontract;

  beforeEach(async () => {
    erC20 = await erc20.new();
    stakingcontract = await assignment.new(erC20.address);
  });
  //ERC-20 approve allowance function call

  it("approving the contract", async () => {
    let delegate_address = accounts[1];
    let _amount = 100;
    let Owner= accounts[0];
    const value = await erC20.approve(delegate_address, _amount, {
      from: accounts[0]
    });
    console.log(value);
    expect( await value).to.equal(delegate_address);
    expect(await erC20.allowance(Owner,delegate_address)).to.equal(_amount);
  });

//   it("should it setting the right value", async () => {

//     const value = await stakingcontract.staking(100, "fixed", 100, true, {
//       from: accounts[0]
//     });
//     console.log(value);
//     expect(await value.toNumber()).to.equal(100, "fixed", 100, true);
//   });
});
