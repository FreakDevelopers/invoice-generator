import React from 'react'


function ItemComponent(props) {
  const addFunction = () => {
    // count++; 
    // console.log(count);
    }
    const deleteComponent = () => {
    // count++; 
    // console.log(count);
    }
  return (
    <>
      <div
        className="component"
        id={props.classNo}
        style={{ borderBottom: "1px dotted rgba(0, 0, 0, 0.8)" }}
      >
        <div className="wrap-column">
          <input
            id="itemdesc1"
            type="text"
            name="itemdesc"
            placeholder="Item Description"
          />
          <textarea
            id="itemdetails1"
            rows={3}
            cols={25}
            name="itemdetails"
            placeholder="Additional Details"
            style={{ width: "100%", padding: "0.7rem 1rem", resize: "none" }}
            defaultValue={""}
          />
        </div>
        <div className="wrap-row">
          <input
            id="rate1"
            className="position1"
            type="text"
            name="rate"
            onChange={addFunction}
            placeholder="₹0.00"
          />
          <input
            id="quantity1"
            className="position2"
            type="number"
            min={1}
            defaultValue={1}
            name="quantity"
            onChange={addFunction}
          />
          <input
            id="amount1"
            className="position3"
            type="text"
            readOnly=""
            name="amount"
            placeholder="₹0.00"
          />
          <input
            id="deletebtn1"
            className="deletebtn"
            type="button"
            defaultValue="x"
            onClick={deleteComponent}
          />
        </div>
      </div>

    </>
  )
}

export default ItemComponent