import { useState } from "react"
import NoMetaMask from "./NoMetaMask"
import ConnectWallet from "./ConnectWallet"
import AccountNetwork from "./AccountNetwork"
import CreateProperty from "./CreateProperty"
import PropertyList from "./PropertyList"
import isMetaMaskInstalled from "./MetaMaskCheck"
import "./styles.css"

export default function App() {
  const [account, setAccount] = useState()
  const [network, setNetwork] = useState()

  if (!isMetaMaskInstalled()) {
    return <NoMetaMask />
  }

  if (account) {
    return (
      <div className="App">
        <AccountNetwork account={account} network={network} />
        <CreateProperty account={account} />
        <PropertyList account={account} />          
      </div>
    )
  } else {
    return (
      <div className="App">
        <ConnectWallet setAccount={setAccount} setNetwork={setNetwork} />
      </div>
    )
  }
}
