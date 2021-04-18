import { useState } from "react"
import { createProperty } from "./Contract"

export default function CreateProperty({account}) {
  const [newProperty, setNewProperty] = useState({})

  const handleChange = (event) => {
    const {name, value} = event.target
    setNewProperty({...newProperty, [name]: value})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    createProperty(account, newProperty)
  }

  return (
        <div className="container">
          <form onSubmit={onSubmitHandler}>
            <fieldset>
              <legend>Token Settings</legend>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="tokenNameInput">Token Name</label>
                  <input type="text" className="form-control" id="tokenNameInput" name="tokenName" value={newProperty.tokenName} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="tokenSymbolInput">Token Symbol</label>
                  <input type="text" className="form-control" id="tokenSymbolInput" name="tokenSymbol" value={newProperty.tokenSymbol} onChange={handleChange} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Property Description</legend>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="propertyTypeInput">Property Type</label>
                  <input type="text" className="form-control" id="propertyTypeInput" name="propertyType" value={newProperty.propertyType} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="propertySubtypeInput">Property Subtype</label>
                  <input type="text" className="form-control" id="propertySubtypeInput" name="propertySubtype" value={newProperty.propertySubtype} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="brandTenantInput">Brand Tenant</label>
                  <input type="text" className="form-control" id="brandTenantInput" name="brandTenant" value={newProperty.brandTenant} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="buildingsInput">No. of Buildings</label>
                  <input type="text" className="form-control" id="buildingsInput" name="buildings" value={newProperty.buildings} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="squareFootageInput">Square Footage</label>
                  <input type="text" className="form-control" id="squareFootageInput" name="squareFootage" value={newProperty.squareFootage} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <label htmlFor="tokenPriceEthWeiInput">Token Price in Wei</label>
                  <input type="text" className="form-control" id="tokenPriceEthWeiInput" name="tokenPriceEthWei" value={newProperty.tokenPriceEthWei} onChange={handleChange} />
                </div>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-primary">Create Property Token</button>
          </form>
        </div>
  )
}