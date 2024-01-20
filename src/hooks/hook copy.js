import { useEffect, useState } from 'react'

export default function Hook() {
const [items,setItems ]= useState([])
const [resourceType,setResourcetype ]= useState('posts')

     useEffect(() => {
      const fetchResource = async () => {
        const response = await
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        const responseJson = await response.json()
        setItems(responseJson)
}
fetchResource()}
,[resourceType])
const sargeResourceType = (resourceType) =>
    setResourcetype(resourceType);
  
  
    return (
    <>
    <div> {resourceType} </div>
       <div style={{display:'flex',justifyContent:'center'}}>
      <button onClick={()=>sargeResourceType('posts')}>Posts</button>
      <button onClick={()=>sargeResourceType('users')}>Users</button>
      <button onClick={()=>sargeResourceType('comments')}>Comments</button>
    </div>
    {items.map(item => (
  <p key={item.id}>{item.id}</p>
))}  </>

  )}