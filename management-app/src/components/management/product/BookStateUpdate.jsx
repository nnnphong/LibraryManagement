import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import './../../../assets/css/style2.css'

import { retrieveUserBookApi, updateUserBookApi } from "../api/UserApiService";


export default function UpdateStateComponent(){

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userName = searchParams.get('userName');
    const bookID = searchParams.get('bookID');

    const [userBookPage, setUserBookPage] = useState(0)
    const [userBookNotes, setUserBookNotes] = useState('')

    const navigate = useNavigate()

    useEffect(
        () => retrieveUserBook()
    )

    function retrieveUserBook(){
            retrieveUserBookApi(userName, bookID)
              .then(response =>{
                setUserBookPage(response.data.userBookPage)
                setUserBookNotes(response.data.userBookNotes)
                
              })
              .catch(error => console.log(error))
    }

    function onSubmit(values){
        const readFormDTO = {
            userBookPage: values.userBookPage,
            userBookNotes: values.userBookNotes
        }

        updateUserBookApi(userName, bookID, readFormDTO)
        .then(response => {
            navigate(`/library/${userName}`)
        })
    }

    function moveLibrary(){
        navigate(`/library/${userName}`)
    }

    function moveBook(){
        navigate(`/finished/${userName}`)
    }

    return (
        <main>
        <div className="main-content">
        <div class="sidebar">
				<h3>Menu</h3>
				<ul>
                <li><a href="index.html">Home</a></li>
					<li><a class="active">Update Book State</a></li>
					<li><a onClick={moveLibrary}>Library</a></li>
					<li><a onClick={moveBook}>Read Book</a></li>
				</ul>				
			</div>
            <div class="content">
            <h3>Update Book Reading State</h3>
				<div class="content-data">
					<div class="content-form">
                <Formik initialValues = {{userBookPage, userBookNotes}}
                     enableReinitialize = {true}
                     onSubmit={onSubmit}
                     validateOnChange={false}
                     validateOnBlur={false}  
                >
                    {
                        (pros) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label> Number of pages read </label>
                                    <Field type="text" className="form-control" name="userBookPage" />
                                </fieldset>

                                <fieldset className="form-group">
                                    <label> Notes </label>
                                    <Field as="textarea" type="text" className="form-control" name="userBookNotes" style={{ width: '100%', height: '200px' }}/>
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