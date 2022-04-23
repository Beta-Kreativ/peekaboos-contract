const Peekaboos = artifacts.require("Peekaboos");

module.exports = function (deployer) {
  deployer.deploy(
    Peekaboos,
    "https://us-central1-peekaboos-492bb.cloudfunctions.net/app/token/"
  );
};
