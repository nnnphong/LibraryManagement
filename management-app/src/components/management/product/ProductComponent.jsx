import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProductApi, retrieveProductByIdApi, updateProductApi } from "../api/ProductApiService";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import './../../../assets/css/style2.css'

export default function ProductComponent(){

    const {id} = useParams()

    const [bookName, setBookName] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookYear, setBookYear] = useState()
    const [categoryName, setCategoryName] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retrieveProducts(),
        [id]
    )

    function retrieveProducts(){
        if(id != -1){
            retrieveProductByIdApi(id)
              .then(response =>{
                setBookName(response.data.bookName)
                setBookAuthor(response.data.bookAuthor)
                setBookYear(response.data.bookYear)
                setCategoryName(response.data?.category?.categoryName)
              })
              .catch(error => console.log(error))
        }
    }

    function onSubmit(values){
        const productFormDTO = {
            bookName: values.bookName,
            bookAuthor: values.bookAuthor,
            bookYear: values.bookYear,
            categoryName: values.categoryName,
        }

        if(id == -1){
            createProductApi(productFormDTO)
            .then(response => {
                navigate('/products')
            })
        }else{
            updateProductApi(id, productFormDTO)
            .then(response => {
                navigate('/products')
            })
        }
    }

    function validate(values) { 
        let errors = {
            // description: 'Enter a valid description',
            // targetDate: 'Enter a valid target date'
        }

        if(values.productName.length < 3){
            errors.description = 'Enter at least 3 characters'
        }

        return errors
    }

    function moveUsers(){
        navigate('/users')
    }

    return (
        <main>
        <div className="main-content">
        <div class="sidebar">
				<h3>Menu</h3>
				<ul>
                <li><a href="index.html">Home</a></li>
					<li><a>Product</a></li>
					<li><a class="active">Add New Product</a></li>
					<li><a onClick={moveUsers}>Users</a></li>
				</ul>				
			</div>
            <div class="content">
            <h3>Add new Product</h3>
				<div class="content-data">
					<div class="content-form">
                <Formik initialValues = {{bookName, bookAuthor, bookYear, categoryName}}
                     enableReinitialize = {true}
                     onSubmit={onSubmit}
                     validate = {validate}
                     validateOnChange={false}
                     validateOnBlur={false}  
                >
                    {
                        (pros) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label> Name of Book </label>
                                    <Field type="text" className="form-control" name="bookName" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Author </label>
                                    <Field type="text" className="form-control" name="bookAuthor" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Year of Publication </label>
                                    <Field type="number" className="form-control" name="bookYear" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Category Name </label>
                                    <Field type="text" className="form-control" name="categoryName" />
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