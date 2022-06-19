import fetch from 'node-fetch';
import dotenv from 'dotenv/config'
import  fsLibrary from 'fs'
let key= process.env.AlchemyKey
console.log(key)

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  const walletAddresses=[];
  const apiKey = "demo"
  const baseURL = `https://eth-mainnet.alchemyapi.io/nft/v2/${key}/getOwnersForCollection`;
  const contractAddr = "0x8c1fe24d93e26f241fb1c9b432e2c5c6fe3c1a31";
  const fetchURL = `${baseURL}?contractAddress=${contractAddr}`;

 
 async function getOwners()
 {





 await  fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => JSON.stringify(response,null,2))
    .then(result =>{
      let res=JSON.parse(result).ownerAddresses;
      console.log("Result",res)
        fsLibrary.writeFile('WalletAddresses.txt',JSON.stringify(res), (error) => {
      
            // In case of a error throw err exception.
            if (error) throw err;
        })
walletAddresses.push(result)

    console.log(result)
    })
}

await getOwners();
 //console.log(walletAddresses[ownerAddresses])