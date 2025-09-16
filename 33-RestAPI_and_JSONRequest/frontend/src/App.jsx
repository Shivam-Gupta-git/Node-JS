import { useEffect, useState } from 'react';
import './App.css'
import Container from './Components/Container';
import TodoHeading from './Components/TodoHeading';
import TodoItemList from './Components/TodoItemList';
import TodoItems from './Components/TodoItems';
import EmptyTodo from './Components/EmptyTodo';
import { addItemToServer, deleteItemToServer, getItemToServer } from '../service/itemService';
function App() {
  const initialTodoItems = [
    // {
    //   name: 'Go to School',
    //   Date: '30/01/2025'
    // },
    // {
    //   name: 'Buy Milk',
    //   Date: '30/01/2025'
    // }

  ]
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  useEffect(()=>{
    getItemToServer().then(initialItems => {
    setTodoItems(initialItems)
  })
  },[])

  const handelInputItemValue = async (todoDueName, todoDueDate)=>{
    // console.log(`Add new Todo: ${todoDueName} Date: ${todoDueDate}`)

    const items = await addItemToServer(todoDueName, todoDueDate); 
    const newTodoItem = [...todoItems, items ];
    setTodoItems(newTodoItem)
  }

  const handelDeleteItem = async (id) => {
    const deletedId = await deleteItemToServer(id)
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems)
  }

  return (
    <Container>
      <TodoHeading></TodoHeading>
      <TodoItems handelInputItemValue = {handelInputItemValue}></TodoItems>
      <TodoItemList todoItems={todoItems} handelDeleteItem={handelDeleteItem}></TodoItemList>
      <EmptyTodo todoItems = {todoItems}></EmptyTodo>
    </Container>
  )
}

export default App;



