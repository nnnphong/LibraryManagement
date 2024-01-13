import { useEffect, useState } from "react";
import { deleteUserApi, retriveAllUsersApi } from "../api/UserApiService";
import { useNavigate } from "react-router-dom";
import './../../../assets/css/style2.css'

export default function ListUsersComponent(){

    const [users, setUsers] = useState([])

    useEffect( () => refreshUsers() )

    const navigate = useNavigate()

    function refreshUsers(){
        
        retriveAllUsersApi()
             .then(response => {
                setUsers(response.data)
             })
    }

    function deleteUser(id){
        deleteUserApi(id)
        .then(
            () => {
                refreshUsers()
            }
        )
        .catch(error => console.log(error))
    }

    function updateUser(id){
        navigate(`/users/${id}`)
    }

    function addNewUser(){
        navigate(`/users/-1`)
    }

    function moveProducts(){
        navigate('/products')
    }

    return (
       
	<main>
		
    <div class="main-content">
        <div class="sidebar">
            <h3>Menu</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a class="active">User</a></li>
                <li><a onClick={addNewUser}>Add new User</a></li>
                <li><a onClick={moveProducts}>Products</a></li>
            </ul>				
        </div>
        <div class="content">
            <h3>User</h3>
            <div class="content-data">
                
                <div class="content-detail">
                    <h4>All Users</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Password</th>
                                <th>BirthYear</th>
                                <th>Phone Number</th>
                                <th>Role</th>
                                <th>Delete</th>
                                
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(
                                    user => (
                                        <tr key={user.userID}>
                                            <td>{user.userID}</td>
                                            <td>{user.userName}</td>
                                            <td>{user.userPassword}</td>
                                            <td>{user.userBirthyear}</td>
                                            <td>{user.userPhone}</td>
                                            <td>{user?.role?.roleName}</td>
                                            <td> <button className="btn btn-warning" 
                                                onClick={() => deleteUser(user.userID)}>Delete</button> </td>
                                            <td> <button className="btn btn-success" 
                                                onClick={() => updateUser(user.userID)}>Update</button> </td>
                                        </tr>
                                    )
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>		

</main>
    )
}