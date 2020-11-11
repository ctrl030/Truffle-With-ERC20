const BananaFinance = artifacts.require("BananaFinance");

module.exports = function(deployer) {
  deployer.deploy(BananaFinance).then(function(instance){
    instance.mint(0xa544a66E7CAB70271D120CB1C4bAe595CCb33fa5, 100)        
  });
};
