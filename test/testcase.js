const assignment = artifacts.require("final_assignment_staking_1");
const erc20 = artifacts.require("ERC-20");
const { expect } = require('chai');

contract("final assignment test cases",(accounts) => {

    let erC20;
    let stakingcontract;

    beforeEach(async()=>{
        erC20 =await erc20.new();
        stakingcontract =await assignment.new();
    })
    //ERC-20 approve function call 

    it("approving the contract", async () => {
        let delegate_address ="";
        let _amount = 100;
        const value = await erC20.approve(delegate_address,_amount,{from: accounts[0], gas:300000});
        console.log(value);
        expect(await value.toNumber()).to.equal();
      });

  it("should it setting the right value", async () => {
    //   const ERC20 = await assignment.deployed();
    // const contractAssign = await assignment.deployed(ERC20);
    let 
    const value = await contractAssign.staking(100, "fixed", 100, true,{from: accounts[0], gas:300000});
    console.log(value);
    expect(await value.toNumber()).to.equal(100, "fixed", 100, true);
  });
 
});
