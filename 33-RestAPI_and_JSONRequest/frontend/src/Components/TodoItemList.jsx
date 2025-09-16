import TodoItemListss from "./TodoItemListss";

let TodoItemList = ({todoItems, handelDeleteItem})=>{
  console.log(todoItems)
  return(
    <>
    {todoItems.map((item)=>(
    <div 
    key={item.id}
    className="container text-center">
    <TodoItemListss 
    id={item.id} 
    todoName={item.todoDueName} 
    todoDate={item.todoDueDate} 
    handelDeleteItem={handelDeleteItem}
    ></TodoItemListss>
  </div>
    ))}
    </>
  )
}
export default TodoItemList; 