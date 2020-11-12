const BananaFinance = artifacts.require("BananaFinance");

module.exports = async function(deployer, network, accounts) {

  await deployer.deploy(BananaFinance, "Banana Finance", "BFI", 100000);
  
  const instance = await BananaFinance.deployed();

  await instance.mint(accounts[0], 100);  

  await instance.mint(accounts[1], 100);  

  await instance.mint(accounts[2], 100);  
};
