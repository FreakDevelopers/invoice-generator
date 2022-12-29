import React from 'react'
import './InvoiceForm.css';
import ItemComponent from './ItemComponent';


function InvoiceForm() {
  var count = 0;
  const addComponent = () => {
  count++; 
  console.log(count);
  }

  return (
    <>

<div className="container">
    <h2>Invoice Details</h2>

    <div className="main">
      <div className="customer">
        <div className="labels">
          <label htmlFor="cname">Name</label>
          <label htmlFor="cemail">Email</label>
          <label htmlFor="ccontact">Contact No</label>
        </div>
        <div className="inputs">
          <input type="text" name="cname" id="cname" placeholder="Client's Name" />
          <input type="email" name="cemail" id="cemail" placeholder="Client's Email" />
          <input type="text" name="ccontact"  id="ccontact" placeholder="Client's Contact Number" />
        </div>
        <div className="labels">
          <label htmlFor="caddress">Client's Address</label>
        </div>
        <div className="inputs" id="address-inputs">
          <input type="text" name="caddress" id="caddress" placeholder="Street" />
          <input type="text" name="city-state" id="city-state" placeholder="City/State" />
          <input type="text" name="zipcode" id="zipcode" placeholder="Zipcode" />
        </div>
        <div className="labels">
          <label htmlFor="invoiceno">Invoice No</label>
          <label htmlFor="date">Date</label>
        </div>
        <div className="inputs">
          <input type="text" name="invoiceno" id="invoiceno" placeholder="INV000000" />
          <input type="date" name="date" id="date" />
        </div>
      </div>

      <div className="desc">
        <div className="head">
          <span className="headers" id="d">Description</span>
          <span className="headers" id="r">Rate</span>
          <span className="headers" id="q">Quantity</span>
          <span className="headers" id="a">Amount</span>
        </div>
        <div className="wrap" id="wrap">
          <ItemComponent classNo={"component" + count}/>
        </div>

        <input type="button" value="+" id="addbtn" onClick={addComponent} />
        <div className="line">
          <div className="totals">
            <div className="wrap-total-labels">
              <label htmlFor="subtotal">Subtotal</label>
              <label htmlFor="total">Total</label>
              <label htmlFor="balancedue">Balance Due</label>
            </div>
            <div className="wrap-total-labels">
              <label htmlFor="subtotal">₹0.00</label>
              <label htmlFor="total">₹0.00</label>
              <label htmlFor="balancedue">₹0.00</label>
            </div>

          </div>
        </div>
        <div className="note">
          <label htmlFor="note">Notes</label>
          <textarea name="note" id="note" cols="70" rows="6" placeholder="Enter any note..."></textarea>
        </div>
      </div>
    </div>
    <div className="lastbtn">
      <input type="button" className="mainbtn" value="Reset" />
      <input type="button" className="mainbtn" value="Proceed" />
    </div>
  </div>
    </>
  )
}

export default InvoiceForm