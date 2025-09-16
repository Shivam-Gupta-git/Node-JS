import { MdDelete } from "react-icons/md";
let TodoItemListss = ({id, todoName, todoDate, 
handelDeleteItem})=>{
  return(
    <div  className="row">
    <div  className="col">{todoName}</div>
    <div  className="col">{todoDate}</div>
    <div className="col">
    <button type="button" className="btn btn-danger" onClick={() => handelDeleteItem(id)}>
      <MdDelete></MdDelete>
      </button>
    </div>
  </div>
  )
}
export default TodoItemListss;