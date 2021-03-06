# EvnCoin

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<space><space><space><space> ![alt text](https://media.giphy.com/media/l4FGC3dPGy2VJJsIw/giphy.gif "Logo Title Text 1")
### Battling Pollution || Bringing Profits


## Description
This Ethereum based blockchain project for EvnCoin was made with the motivation of reducing the amount of pollution in the air we breath, and combat pollution in a general sense. Today major metropolitan cities like Delhi face a situation where the air is extremely polluted, way beyond the "safe-levels" sanctioned by the UN. Many of the polluting plants and factories largely responsible for the degrading quality of air in their vicinity simply escape punishment due to the current non transparent system.

# The Concept

We propose to build a new private blockchain which will consist of four types of participants:

1. Common Citizens
2. Data Companies
3. Government
4. Factories/ Manufacturing Plants

The blockchain will accomodate 3 levels of transactions

1. Level I : Between Common Citizens and Data Companies.
2. Level II: Between Data Companies and the Governments or other Companies seeking the data for commercial purposes.
3. Level III: Between Government and Defaulters.

## Participating Parties
Let us look into the role of each participating party individually.

### 1. Common Citizens
The Common people can install air monitoring sensors in their homes and use IoT wearables to collect data about the pollution levels in their vicinity.
They can connect to our private blockchain and continuously sell their data to the data buying Companies. All the transactions will be done via a smart contract and the end user will get a certain amount of EvnCoins according to the number of sensors he/she has installed. Thus the end users can earn as well well as help improve the quality of air in their vicinity.

### 2. Data Companies
These are the Companies which can analyse and use the bought data. They can use the bought data to try and pinpoint a polluting plant and notify the government to gain benefits in the form of the fine paid by the polluting party and/or greater tax relaxations/returns. It also can use this data to help assist the Government bodies monitor the levels of pollution or sell it to interested NGOs.

### 3.Government
The Government is another direct benefactory of this system. The Government is responsible for legislature and execution of laws which punish the industries responsible for polluting the air. By joining our private blockchain, they can easily get analysed data from the data companies,in return for an appropriate amount of EvnCoin Tokens. Thus now they have access to a motherload of analysed data and can easily work to punish the factories/plants violating the pollution norms. Whenever they fine a polluting plant which was detected by the provided data, they can give rewards to the participating data companies in form of the fine itself paid in EvnCoins.

### 4.Factories/Manufacturing Plants
All the Factories/Manufacturing(F/M) Plants can be forced to join the private blockchain by law. Clean F/Ms can be easily convinced as they can prove their efforts to reduce pollution and verifying the accusations laid by other parties by taking advantage of the immutable nature of the blockchain.Thus an innocent M/F can save itself from scrutiny of the public and the law by importing the data from the blockchain and proving their innocence.
If a polluting F/M is caught however, they can be directly fined via the blockchain. Thus the data companies can always confirm whether or not a polluting F/M was fined by the government as they hold a stake in the fines. Thus they can always verify whether or not the government is acting on the analysed data provided by them

## Levels of Transaction

Now let us observe the transactions occurring and the smart contracts governing these transactions

### Level I  Between Common Citizens and Data Companies.
<space> Components:
 1. Dashboard for the common citizens to connect to the blockchain, Send data to the data companies and gain rewards for the same.
 A screenshot of the dashboard is given below.
![alt text](https://raw.githubusercontent.com/Anirudh-Murali/Evn/master/Screenshot%20from%202017-12-18%2009-34-10.png)

2. Smart Contract I
 The Smart contract governing this transaction has the following functions
  *Ensure the consistency of the data: The smart contract will ensure that no fraudulent transactions are occurring and that no user is sending randomly generated data by correlating the data being received by the neighbouring users. If found guilty, the user can be fined.
  ![alt text](https://raw.githubusercontent.com/Anirudh-Murali/Evn/master/Level_1.png)
  *Ensure each user is awarded for the amount of data he/she is selling (or basically for the number of sensors installed)

 ### Level II: Between Data Companies and the Governments or other Companies seeking the data for commercial purposes.
In the second level, data companies can analyse the data and help pinpoint defaulters. It can also use it for commercial purposes or sell it to the government for further analysis. In this level the companies can also demand for tax benefits or EvnCoins from the government whenever it catches a polluting M/P which was earlier pinpointed by the data company. It will thus also pressurize the government to act, whenever a polluting M/P has been discovered so that it can get it's reward.
Components
1. Dashboard/ Portal to carry out the transactions.
   <space> A screenshot of the dashboard is given below.
   ![alt text](https://github.com/Anirudh-Murali/Evn/blob/master/Screenshot%20from%202017-12-18%2009-39-22.png?raw=true)
2. Smart Contract II to govern the transactions
   ![alt text](https://raw.githubusercontent.com/Anirudh-Murali/Evn/master/Level_2.png)

### Level III: Between Government and Defaulters
The entire fine transactions can be carried out at this level. Data Companies can observer these blocks to ensure that the polluting M/P has been fined. This helps combat corruption at the Government.
![alt text](https://raw.githubusercontent.com/Anirudh-Murali/Evn/master/Level_3.png)

## Advantages of the EvnCoin System
1. Fights Corruption: As each lower level is to benefit further if the upper level does it's work properly, they are pressurized to work and not get corrupted. Moreover, due to the blockchain architecture the polluting M/Ps will find it harder and almost impossible to bribe their way out.
2. Gives Incentives to all the parties: All the parties are to benefit by joining the EvnCoin Blockchain and thus are more likely to join.

## PowerPoint Presentation
[PPT](https://aitpuneedu-my.sharepoint.com/personal/anirudhmurali_15090_aitpune_edu_in/_layouts/15/guestaccess.aspx?docid=04ed81d2a73af4e62942e03ecceaac3cb&authkey=AVKUTeL11wU7kb8qTtPJ4as&e=88f9fa33fafa47ce8a5e448c44a546b7)

# Installation
Node.js is required to run this project. If not already installed, please install it. After that -

1.Install Truffle globally.
`npm install -g truffle`

For reference :https://github.com/trufflesuite - automatic!
[GitHub](https://github.com/trufflesuite)

2.Install Ganache-Cli
`npm install -g ganache-cli`

For Reference:For reference :https://github.com/trufflesuite/ganache-cli - automatic!
[GitHub](https://github.com/trufflesuite/ganache-cli)

# Running the project

1. Clone the repository to a convenient location.
2. Open a termial and start the  ganache-cli by typing:
 ` ganache-cli`
 Keep this terminal running
3. Navigate to the following location in the project files : `Evn-master/node_modules/.bin`, open a terminal and run the following command,
 `chmod 755 webpack-dev-server`
You can close this terminal .
4. Go back to the parent project directory and run the following commands
 `truffle compile`
 `truffle migrate`
 This shall compile all of our smart contracts and deploy it on to the gananche ethereum blockchain that we had started in step 1.
5. Now connect the front end to the blockchain by typing the following command
`npm run dev`
Simply click on the link provided by it.

Now you can interact with the dashboard and simulated the Level I Transaction.


## NOTE
THAT STEP THREE HASN'T BEEN DEMONSTRATED IN THE VIDEO. HOWEVER IN CASE OF A WEB-SERVER ERROR ON EXECUTING THE `npn run dev` COMMAND, JUST PERFORM THE THIRD STEP AND YOU'LL BE READY TO GO

Let us know if you face any issues
Enjoy :)

## Please note that this project has only been tested on an Ubuntu 16.04 OS. You might encounter some bugs if you're executing it in some other OS.
