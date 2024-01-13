import { useEffect, useState } from "react";
import { retrieveAllCategoryApi } from "../api/CategoryApiService";
import { useNavigate } from "react-router-dom";
import './../../../assets/css/style2.css'



export default function ListCategoriesComponents(){

    const [categories, setCategories] = useState([])

    useEffect( () => refreshCategories() )

    const navigate = useNavigate()

    function refreshCategories (){
        
        retrieveAllCategoryApi()
          .then( response => {
            setCategories(response.data)
          }

          )
    }

    function moveUser(){
        navigate('/users')
    }
    function moveProduct(){
        navigate('/products')
    }

    return (
        <main>
		
		<div class="main-content">
			<div class="sidebar">
				<h3>Menu</h3>
				<ul>
					<li><a href="index.html">Home</a></li>
					<li><a class="active" >Product</a></li>
					<li><a onClick={moveProduct}>Products</a></li>
					<li><a onClick={moveUser}>Users</a></li>
				</ul>				
			</div>
			<div class="content">
				<h3>Product</h3>
				<div class="content-data">
					
					<div class="content-detail">
						<h4>All Categories</h4>
						<table>
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Category Count</th>
								</tr>
							</thead>
							<tbody>
								{
									categories.map(
										category => (
											<tr key={category.categoryID}>
                                                <td>{category.categoryCount}</td>
												<td>{category.categoryName}</td>
												<td>{category.categoryCount}</td>
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