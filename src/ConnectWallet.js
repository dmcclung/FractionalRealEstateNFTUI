const requestAccounts = async (setNetwork, setAccount) => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  })

  setNetwork(window.ethereum.networkVersion)
  setAccount(accounts[0])
}

export default function ConnectWallet({setNetwork = f => f, setAccount = f => f}) {
  return (    
    <div>
      <h2>Connect wallet to tokenize commercial real estate</h2>
      <button className="btn btn-primary" onClick={() => requestAccounts(setNetwork, setAccount)}>
        Connect to wallet
      </button>
    </div>    
  )
}