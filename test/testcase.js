const assignment = artifacts.require("final_assignment_staking_1");

contract("final assignment test cases", async ()=>{
    beforeEach(async()=>{
        const contr = await assignment.deployed();  
    })
    it("should it setting the right value", async()=>{
        
    })
})