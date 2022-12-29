import React, { useState } from "react";
import './ItemComponent.css';

function ItemComponent(props) {
  const [inputList, setInputList] = useState([{itemDesc: "", itemDetails: "", rate:"", quantity: "", amount: ""}]);

  const handleAddClick = () => {
    setInputList([...inputList, {itemDesc: '', itemDetails: '', rate:'', quantity: '', amount: ''}])
  }

  const handleInputChange = (e, index) => {
    const {componentDetails, value} = e.target;
    const list  = [...inputList];
    list[index][componentDetails] = value;
    setInputList(list);
  }

  const handleRemove = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);

  }

// const addFunction = () => {
// // count++;
// // console.log(count);
// };
// const deleteComponent = () => {
// // count++;
// // console.log(count);
// };
return (
<>
  <div className="component" id={props.classNo} style={{ borderBottom: "1px dotted rgba(0, 0, 0, 0.8)" }}>
    { 
      inputList.map( (x, i) =>{
        return(
    <span>
    <div className="wrap-column">
      <input id="itemdesc1" type="text" name="itemdesc" placeholder="Item Description" onChange={e => handleInputChange(e, i)} />
      <textarea id="itemdetails1" rows={3} cols={25} name="itemdetails" placeholder="Additional Details" style={{
        width: "100%" , padding: "0.7rem 1rem" , resize: "none" }} defaultValue={""} onChange={e => handleInputChange(e, i)} />
    </div>
    <div className="wrap-row">
      <input id="rate1" className="position1" type="text" name="rate" placeholder="₹0.00" onChange={e => handleInputChange(e, i)} />
      <input id="quantity1" className="position2" type="number" min={1} defaultValue={1} name="quantity" onChange={e => handleInputChange(e, i)} />
      <input id="amount1" className="position3" type="text" readOnly="" name="amount" placeholder="₹0.00" onChange={e => handleInputChange(e, i)} />
    </div>
    <span className="btnSpan">
    {
      inputList.length !== 1 &&
      <input type="button" value="x" id="addbtn" onClick={() => handleRemove(i)} />
    }
    {
      inputList.length-1 === i &&
      <input type="button" value="+" id="addbtn" onClick={handleAddClick} />
    }
    </span>
    </span>
    );
    })}
  </div>  
</>
);
}

export default ItemComponent;