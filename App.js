import { useState } from "react";
import UserTable from "./tables/usertable";
import AddUserForm from "./forms/addUserForm";
import EditUserForm from "./forms/EditUserForm";



function App() {

  const UsersData=[
    {id:1,name:"Inbaa",username:"Inbaa vignesh"},
    {id:2,name:"Siva",username:"Sivaram "},
    {id:3,name:"Nila",username:"Nila velu"}
  ];
  const addUser =(user)=>{
    user.id=users.length + 1
    setUser([...users,user])
  }
  const deleteUser =(id)=>{
    setUser(users.filter((user)=> user.id !== id))
  }

  const[editing,setEditing] = useState(false)

  const initialFormState = {id:null,name:"",username:""}

  const [currentUser,setCurrentUser]=useState(initialFormState)

  const editRow = (user) =>{
    setEditing(true)
    setCurrentUser({id:user.id,name:user.name,username:user.username})
  }

  const updateUser = (id,updatedUser) =>{
    setEditing(false)
    setUser(users.map((user) =>(user.id ===id? updatedUser :user)))
  }

  const [users,setUser]=useState(UsersData)

  return (
    <div className='container'>
      <h1>CRUD application with hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (<div>
            <h2>Edit User</h2>
            <EditUserForm 
            setEditing={setEditing}  
            currentUser={currentUser} 
            updateUser={updateUser}/>
          </div> ) :  (<div>
            <h2>Add user</h2>
          <AddUserForm adduser={addUser}/>   
          </div>)
          }
        <div>
          <h2>View users</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
