 export const addItemToServer = async (task, date) => {
  const response = await fetch('http://localhost:3000/api/todo', {
    method: 'POST', 
    headers:{
      'content-Type': 'application/json' 
    }, 
    body: JSON.stringify({task, date}),
  })
  const serviceItems = await response.json()
  return mapServerItemstoLocalItems(serviceItems) 
 } 

 export const getItemToServer = async () => {
   const response = await fetch('http://localhost:3000/api/todo');
   const item = await response.json()
   return item.map(mapServerItemstoLocalItems)
 }

 export const updateItemToServer = async (id) => {
  const response = await fetch(`http://localhost:3000/api/todo/${id}/completed`,{
    method: 'PUT'
  })
  const item = await response.json()
  return item.map(mapServerItemstoLocalItems)
 }
 export const deleteItemToServer = async (id) => {
  await fetch(`http://localhost:3000/api/todo/${id}`,{
    method: 'DELETE'
  })
  return id;
 }

 const mapServerItemstoLocalItems  = (serverItem) => {
  return {
    id: serverItem._id,
    todoDueName: serverItem.task,
    todoDueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt
  }
 }