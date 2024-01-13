import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { createUserApi, retrieveUserByIdApi, updateUserApi } from "../api/UserApiService.js";
import './../../../vendor/bootstrap/css/bootstrap.min.css'
import './../../../vendor/font-awesome/css/font-awesome.css'

import './../../../assets/css/style1.css'
import './../../../assets/css/style2.css'



export default function UserComponent(){

    const {id} = useParams()

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userBirthyear, setUserBirthyear] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [roleName, setRoleName] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retrieveUsers(),
        [id]
    )

    function retrieveUsers(){
        if(id != -1){
            retrieveUserByIdApi(id) 
            .then(response => {
                setUserName(response.data.userName)
                setUserPassword(response.data.userPassword)
                setUserBirthyear(response.data.userBirthyear)
                setUserPhone(response.data.userPhone)
                setRoleName(response.data?.role?.roleName)
            })
            .catch(error => console.log(error))
        }
    }

    function onSubmit(values){
        const userFormDTO ={
            userName: values.userName,
            userPassword: values.userPassword,
            userBirthyear: values.userBirthyear,
            userPhone: values.userPhone,
            roleName: values.roleName
        }

        if(id == -1){
            createUserApi(userFormDTO)
            .then(response => {
                navigate('/users')
            })
        }else{
            updateUserApi(id, userFormDTO)
            .then(response => {
                navigate('/users')
            })
        }
    }

    function validate(values) { 
        let errors = {
          
        }

        if(values.userName.length < 3){
            errors.userName = 'Enter at least 3 characters'
        }

        if(values.userPassword.length < 5 ){
            errors.userPassword = 'Enter at least 5 characters'
        }

        if(values.roleName != 'Admin' && values.user_role_name != 'Guest' ){
             errors.roleName = 'Role name is not valid'
        }

        return errors
    }

    function moveProducts(){
        navigate('/products')
    }

    return (
        <main>
        <div className="main-content">
        <div class="sidebar">
				<h3>Menu</h3>
				<ul>
                <li><a href="index.html">Home</a></li>
					<li><a>User</a></li>
					<li><a class="active">Add New User</a></li>
					<li><a onClick={moveProducts}>Products</a></li>
				</ul>				
			</div>
            <div class="content">
            <h3>Add new User</h3>
				<div class="content-data">
					<div class="content-form">
                <Formik initialValues = {{userName, userPassword, userBirthyear, userPhone, roleName}}
                     enableReinitialize = {true}
                     onSubmit={onSubmit}
                     validate={validate}
                     validateOnChange={false}
                     validateOnBlur={false}  
                >
                    {
                        (pros) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>  Username </label>
                                    <Field type="text" className="form-control" name="userName" />
                                    <ErrorMessage name="userName" component="div" className="error" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Password </label>
                                    <Field type="text" className="form-control" name="userPassword" />
                                    <ErrorMessage name="userPassword" component="div" className="error" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Birthyear </label>
                                    <Field type="text" className="form-control" name="userBirthyear" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Phone Number </label>
                                    <Field type="text" className="form-control" name="userPhone" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Role Name </label>
                                    <Field type="text" className="form-control" name="roleName" />
                                    <ErrorMessage name="roleName" component="div" className="error" />
                                </fieldset>

                                <div>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </div>

                            </Form>
                        )
                    }
                </Formik>
                </div>
                </div>
            </div>
            </div>
        </main>
    )
}