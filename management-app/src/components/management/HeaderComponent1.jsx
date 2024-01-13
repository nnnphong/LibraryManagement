import { useAuth } from "./security/AuthContext";
import React, { useContext } from 'react';
import { useNameAuth } from "./MainComponent.jsx";
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import {retrieveAllProductsApi } from "./api/ProductApiService";
import { retrieveAllCategoryApi } from "./api/CategoryApiService";
import './../../vendor/bootstrap/css/bootstrap.min.css'
import './../../vendor/font-awesome/css/font-awesome.css'
import './../../assets/css/app.css'
import './../../assets/js/app.js'
import './../../assets/css/style1.css'
import onlineshopping from './../../assets/img/icons/online_shopping.png'
import account from './../../assets/img/icons/account.png'

export default function HeaderComponent1(){
    const userNameC = useNameAuth()

    //const authContext = useContext(AuthContext)
    const authContext = useAuth()

    const isAuthenticated = authContext.isAuthenticated

    function logout1() {
        authContext.logout()

    }
    const [products, setProducts] = useState([])
    const [categories, setCategories] =  useState([])
    const [searchName, setSearchName] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        refreshProducts();
        refreshCategories();
      }, []);

    const navigate = useNavigate()

    function refreshProducts(){
        retrieveAllProductsApi()
          .then(response => {
            setProducts(response.data)
          })
    }

    function refreshCategories(){
        retrieveAllCategoryApi()
          .then(response => {
            setCategories(response.data)
          })
    }

    function handleSearchName(event){
        setSearchName(event.target.value)
    }
    // kiểm tra chỗ searchName la product hay category
    function isProduct(){
        return products.some(c => c.bookName === searchName)
    }

    function isCategory(){
        return categories.some(c => c.categoryName === searchName)
    }

    function handleSearch(){
        if(isCategory()){
            const EnSearchName = encodeURIComponent(searchName)
            setError('Complete search successfully')
            navigate(`/products/category_search/${EnSearchName }`)
        }
        else if(isProduct()){
            const EnSearchName = encodeURIComponent(searchName)
            setError('Complete search successfully')
            navigate(`/products/name_search/${EnSearchName}`)
        }else{
            setError('Your search name is not valid')
            return
        }
    }

    function Cart(){
        navigate(`/library/${userNameC}`)
    }

    return (
        <header>
		<div class="container">
			<div class="brand">
				<div class="logo">
					<a>
						<img src={onlineshopping} />
						<div class="logo-text">
							<p class="big-logo">Personal</p>
							<p class="small-logo">Library</p>
						</div>
					</a>
				</div> 
				<div class="shop-icon">
					<div class="dropdown">
						<img src={account}/>
						<div class="dropdown-menu">
							<ul>
								{/* <li><a onClick={Cart}>My Account</a></li>
								<li><a >My Orders</a></li> */}
							</ul>
						</div>
					</div>
				</div> 
                <div class="search-bar">
						<div class="form-group">
							<input type="text" class="form-control" name="name" placeholder="Tìm kiếm" aria-label="Search" value={searchName} onChange={handleSearchName}/>

						</div>
                        <button style={{marginTop: "150px"}} class="btn btn-outline-success my-2 my-sm-0" name="search" onClick={handleSearch}>Tìm kiếm</button>
                        {error && <p style={{marginTop: "30px"}}>{error}</p>}
                </div>
			</div> 

			<div class="menu-bar" style={{paddingBottom: "600px"}}>
				<div class="menu">
					<ul>
						<li>{isAuthenticated && 
							<Link className="nav-link" to="/main">Main Page</Link>}</li>
						<li>{!isAuthenticated && <Link className="nav-link" to="/register">Register</Link>}</li>
						<li>{!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}</li>
						<li>{isAuthenticated && <Link className="nav-link" to="/login" onClick={logout1}>Logout</Link> }</li>
					</ul>
				</div>
			</div> 
		</div> 
	</header> 
    )
}