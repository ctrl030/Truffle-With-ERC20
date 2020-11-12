const BananaFinance = artifacts.require("BananaFinance");

module.exports = async function(deployer) {

  await deployer.deploy(BananaFinance, "Banana Finance", "BFI", 10000);
  let instance = await deployer.deploy(BananaFinance);

  await instance.mint(0xa544a66E7CAB70271D120CB1C4bAe595CCb33fa5, 100);      
  
 
};
