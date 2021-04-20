import { useState } from "react"
import { buyProperty, getProperties } from "./Contract"

const getNFTDetails = (contractAddress) => {
  
}

export default function PropertyList({account}) {  
  const [properties, setProperties] = useState([])

  getProperties().then((p) => {
    if (p.length > 0) setProperties(p)
  }) 

  return (    
    <div style={{"margin-top": "20px"}} className="container">        
      <ul className="list-group">
        {properties.map((property) => {
          return <li className="list-group-item" key={property}>
                  <span>{property.tokenSymbol} {property.tokenName} {property.address}</span>
                  <button style={{"margin-left": "10px"}} className="btn btn-primary" onClick={() => { buyProperty(account, property.address) }}>Buy</button>
                </li>;
        })}
      </ul>
    </div>
  )
}