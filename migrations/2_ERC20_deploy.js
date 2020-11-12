const BananaFinance = artifacts.require("BananaFinance");

module.exports = async function(deployer) {

  await deployer.deploy(BananaFinance, "Banana Finance", "BFI", 100000);
  
  let instance = await BananaFinance.deployed();

  await instance.mint(accounts[0], 100);  

  await instance.mint(accounts[1], 100);  

  await instance.mint(accounts[2], 100);  
};
