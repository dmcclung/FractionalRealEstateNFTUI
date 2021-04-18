import { useState } from "react"
import { buyProperty, getProperties } from "./Contract"

export default function PropertyList({account}) {  
  const [properties, setProperties] = useState([])

  getProperties().then((p) => {
    if (p.length > 0) setProperties(p)
  }) 

  return (
    <div className="container">      
      <ul className="list-group">
        {properties.map((property) => {
          return <li className="list-group-item" key={property}>
                  {property} 
                  <button onClick={() => { buyProperty(account, property) }}>Buy</button>
                 </li>;
        })}
      </ul>
    </div>
  )
}