// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";
Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import metacoin_artifacts from '../../build/contracts/MetaCoin.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var MetaCoin = contract(metacoin_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts;
var account;
var myadd_account;

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    MetaCoin.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];
      myadd_account = accounts[1];

      self.refreshBalance();
      //self.refreshCounter();
      //self.refreshPercent();
    });
  },

  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  },

  refreshBalance: function() {
    var self = this;

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.getBalance.call(account, {from: account});
    }).then(function(value) {
      var balance_element = document.getElementById("balance");
      balance_element.innerHTML = 10000 - value.valueOf();
      var add_element = document.getElementById("myadd");
      add_element.innerHTML = myadd_account;
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error getting balance; see log.");
    });
  },

  refreshPercent: function() {
    var self = this;

    var dwc = parseInt(document.getElementById("hulk").innerHTML);
    if(parseInt(dwc) === parseInt(0))
    {
      var eta;
      MetaCoin.deployed().then(function(instance) {
        eta = instance;
        return eta.incCount.call();
      }).then(function(value) {
        document.getElementById("hulk").innerHTML = 1;
        if(document.getElementById('flash').innerHTML == 0)
        {
          document.getElementById('chartContainer').style.display = "none";
          return;
        }
        self.sleep(5000).then(() => {
      // Do something after the sleep!
      self.refreshPercent();
  });
      }).catch(function(e) {
        console.log(e);
        self.setStatus("Error updating data reward counter; see log.");
      });
    }
    else if (parseInt(dwc) == 1) {
      var eta;
      MetaCoin.deployed().then(function(instance) {
        eta = instance;
        return eta.incCount.call();
      }).then(function(value) {
        document.getElementById("hulk").innerHTML = 2;
        if(document.getElementById('flash').innerHTML == 0)
        {
          document.getElementById('chartContainer').style.display = "none";
          return;
        }
        self.sleep(5000).then(() => {
      // Do something after the sleep!
      self.refreshPercent();
  });
      }).catch(function(e) {
        console.log(e);
        self.setStatus("Error updating data reward counter; see log.");
      });
    }
    else if (parseInt(dwc) == 2) {
      var eta;
      MetaCoin.deployed().then(function(instance) {
        eta = instance;
        return eta.incCount.call();
      }).then(function(value) {
        document.getElementById("hulk").innerHTML = 3;
        if(document.getElementById('flash').innerHTML == 0)
        {
          document.getElementById('chartContainer').style.display = "none";
          return;
        }
        self.sleep(5000).then(() => {
      // Do something after the sleep!
      self.refreshPercent();
  });
      }).catch(function(e) {
        console.log(e);
        self.setStatus("Error updating data reward counter; see log.");
      });
    }
    else if (parseInt(dwc) == 3) {
      var eta;
      MetaCoin.deployed().then(function(instance) {
        eta = instance;
        return eta.incCount.call();
      }).then(function(value) {
        document.getElementById("hulk").innerHTML = 4;
        if(document.getElementById('flash').innerHTML == 0)
        {
          document.getElementById('chartContainer').style.display = "none";
          return;
        }
        self.sleep(5000).then(() => {
      // Do something after the sleep!
      self.refreshPercent();
  });
      }).catch(function(e) {
        console.log(e);
        self.setStatus("Error updating data reward counter; see log.");
      });
    }
    else if (parseInt(dwc) == 4) {
      var eta;
      MetaCoin.deployed().then(function(instance) {
        eta = instance;
        return eta.setzeroCount.call();
      }).then(function(value) {
        document.getElementById("hulk").innerHTML = 0;
        self.sendCoin();
      /*  self.sleep(5000).then(() => {
      // Do something after the sleep!
      self.refreshPercent();
  }); */
      }).catch(function(e) {
        console.log(e);
        self.setStatus("Error updating data reward counter; see log.");
      });
    }
  },

  sleep: function(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
},

  sendCoin: function() {
    var self = this;

    var amount = document.getElementById('flash').innerHTML * 11;
    var receiver = myadd_account;

    this.setStatus("Initiating transaction... (please wait)");

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.sendCoin(receiver, amount, {from: account});
    }).then(function() {
      self.setStatus("Transaction complete!");
      self.refreshBalance();
      self.refreshPercent();
    }).catch(function(e) {
      console.log(e);
      self.setStatus("Error sending coin; see log.");
    });
  }
};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
  }

  App.start();
});
