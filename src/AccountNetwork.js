const getNetworkName = (network) => {
  if (network === "1") {
    return "Mainnet"
  } else if (network === "3") {
    return "Ropsten"
  } else if (network === "42") {
    return "Kovan"
  } else if (network === "4") {
    return "Rinkeby"
  } else if (network === "5") {
    return "Goerli"
  } else {
    return network
  }
}

export default function AccountNetwork({account, network}) {  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>Account: {`${account.substr(0,6)}...${account.substr(-4)}`}</h5>
        </div>
        <div className="col">
          <h5>Network: { getNetworkName(network) }</h5>
        </div>
      </div>
    </div>
  )
}