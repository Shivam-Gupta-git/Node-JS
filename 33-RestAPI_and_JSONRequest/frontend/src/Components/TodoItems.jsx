import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

let TodoItems = ({handelInputItemValue})=>{
  const [inputVal, setInputVal] = useState("");
  const [inputVal1, setInputVal1] = useState("");

  const handelInputValue = (event)=>{
  setInputVal(event.target.value)
  }
  
  const handelDateValue = (event)=>{
  setInputVal1(event.target.value)
  }

  const handelAddButton = ()=>{
    handelInputItemValue(inputVal, inputVal1);
    setInputVal('')
    setInputVal1('')
  }
  return(
    <div className="container text-center">
    <div className="row">
      <div className="col">
        <input type="text"  placeholder="Enter Your Todo Items..." value={inputVal}  onChange={handelInputValue} />
      </div>
      <div className="col">
        <input type="date" value={inputVal1} onChange={handelDateValue} />
      </div>
      <div className="col">
      <button type="button" className="btn btn-success" onClick={handelAddButton}>
       <IoIosAddCircle></IoIosAddCircle> 
        </button>
      </div>
    </div>
  </div>
  )
}
export default TodoItems;