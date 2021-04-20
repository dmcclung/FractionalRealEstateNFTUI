import Web3 from "web3"
import NFTFactoryABI from "./NFTFactory.json"
import NFTABI from "./NFTABI.json"

const nftFactoryAddress = "0xf6E94A965792393C4FB01914F6Fdad82b722E356"

const buyProperty = (account, nftContractAddress) => {
  const web3 = new Web3(window.ethereum)

  const NFT = new web3.eth.Contract(NFTABI, nftContractAddress)
  try {
    NFT.methods.createToken(account).send({from: account})
  } catch (e) {
    console.log(e)
  }
}

const getProperties = async () => {
  const web3 = new Web3(window.ethereum)

  const NFTFactory = new web3.eth.Contract(NFTFactoryABI, nftFactoryAddress)
  const propertiesLength = await NFTFactory.methods.propertiesLength().call()
  const propertiesAddresses = []
  for (let i = 0; i < propertiesLength; i++) {
    const nftAddress = await NFTFactory.methods.properties(i).call()
    propertiesAddresses.push(nftAddress)
  }

  const propertyNFTs = await Promise.all(propertiesAddresses.map(async (propertyAddress) =>  {
    const NFT = new web3.eth.Contract(NFTABI, propertyAddress)
    const tokenSymbol = await NFT.methods.name().call()
    const tokenName = await NFT.methods.symbol().call()
    return { address: propertyAddress, tokenSymbol: tokenSymbol, tokenName: tokenName }
  }))

  return propertyNFTs
}

const createProperty = (account, newProperty) => {
  const web3 = new Web3(window.ethereum)

  const NFTFactory = new web3.eth.Contract(NFTFactoryABI, nftFactoryAddress)

  NFTFactory.methods.createProperty(newProperty.tokenName, 
                                    newProperty.tokenSymbol, 
                                    newProperty.propertyType,
                                    newProperty.propertySubtype,
                                    newProperty.brandTenant,
                                    newProperty.buildings,
                                    parseInt(newProperty.squareFootage, 10),
                                    parseInt(newProperty.tokenPriceEthWei, 10)).send({from: account})
}

export { buyProperty, createProperty, getProperties }