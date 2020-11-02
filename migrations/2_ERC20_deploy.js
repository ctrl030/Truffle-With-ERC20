const BananaCoin = artifacts.require("BananaCoin");

module.exports = function(deployer) {
  deployer.deploy(BananaCoin);
};
