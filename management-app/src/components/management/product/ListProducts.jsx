import { useEffect, useState } from "react";
import { deleteProductApi, retrieveAllProductsApi } from "../api/ProductApiService";
import { useNavigate } from "react-router-dom";
import './../../../assets/css/style2.css'


export default function ListProductsComponent(){

    const [products, setProducts] = useState([])

    useEffect ( () => refreshProducts() )

    const navigate = useNavigate()

    function refreshProducts(){
        retrieveAllProductsApi()
          .then(response => {
            setProducts(response.data)
          })
    }

    function deleteProduct(id){

        deleteProductApi(id)
           .then(
            () => {
                refreshProducts()
            }
           )
           .catch(error => console.log(error))
    }

    function updateProduct(id){
        navigate(`/products/${id}`)
    }

    function addNewProduct(){
        navigate(`/products/-1`)
    }

    function moveUser(){
        navigate('/users')
    }

    return (
        <main>
		
		<div class="main-content">
			<div class="sidebar">
				<h3>Menu</h3>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a class="active" >Product</a></li>
					<li><a onClick={addNewProduct}>Add new Product</a></li>
					<li><a onClick={moveUser}>Users</a></li>
				</ul>				
			</div>
			<div class="content">
				<h3>Product</h3>
				<div class="content-data">
					
					<div class="content-detail">
						<h4>All Products</h4>
						<table>
							<thead>
								<tr>
									<th>ID</th>
									<th>Product</th>
									<th>Author</th>
									<th>Publish Year</th>
									<th>Category</th>
									<th>Book Count</th>
									<th>Delete</th>
									<th>Edit</th>
								</tr>
							</thead>
							<tbody>
								{
									products.map(
										product => (
											<tr key={product.bookID}>
												<td>{product.bookID}</td>
												<td>{product.bookName}</td>
												<td>{product.bookAuthor}</td>
												<td>{product.bookYear}</td>
												<td>{product?.category?.categoryName}</td>
												<td>{product.bookAdd}</td>
												<td> <button className="btn btn-warning" 
													onClick={() => deleteProduct(product.bookID)}>Delete</button> </td>
												<td> <button className="btn btn-success" 
													onClick={() => updateProduct(product.bookID)}>Update</button> </td>
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