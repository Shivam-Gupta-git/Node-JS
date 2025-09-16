let EmptyTodo = ({todoItems})=>{
  return(
    <>
     <div className="container text-center">
        {todoItems.length == 0 ? <h1>Enjoy Your Day...</h1> : null}

     </div>
    </>
    )
}
export default EmptyTodo;