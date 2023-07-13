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
  //ERC-20 approve function call

  it("approving the contract", async () => {
    let delegate_address = accounts[1];
    let _amount = 100;
    const value = await erC20.approve(delegate_address, _amount, {
      from: accounts[0],
    });
    console.log(value);
    var A = await value;
    var B =await A.spender;
    console.log(B)

    expect( B).to.equal(
      "0x6e402b78F98CF9bfb32757dd0EFc50fA056778bc"
    );
  });

//   it("should it setting the right value", async () => {
//     //   const ERC20 = await assignment.deployed();
//     // const contractAssign = await assignment.deployed(ERC20);

//     const value = await stakingcontract.staking(100, "fixed", 100, true, {
//       from: accounts[0],
//       gas: 300000,
//     });
//     console.log(value);
//     expect(await value.toNumber()).to.equal(100, "fixed", 100, true);
//   });
});
