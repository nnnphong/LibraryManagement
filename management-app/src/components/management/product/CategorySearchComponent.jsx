import { useNavigate, useParams } from "react-router-dom"
import { searchCategoryNameApi} from "../api/SearchApiService"
import { useEffect, useState } from "react"
import './../../../vendor/bootstrap/css/bootstrap.min.css'
import './../../../vendor/font-awesome/css/font-awesome.css'
import './../../../assets/css/app.css'
import './../../../assets/js/app.js'
import './../../../assets/css/style1.css'
import increase from './../../../assets/img/icons/increase.png'
import book1 from './../../../assets/img/book1.jpg'
 


export default function CategoryNameSearchComponent(){
    
    const [products, setProducts] = useState([])
    const {categoryName} = useParams()
    const navigate = useNavigate()
    useEffect( () => searchProduct() )

    function searchProduct(){
        searchCategoryNameApi(categoryName)
        .then( response => {
            setProducts(response.data)
        })
        .catch(error => console.log(error))
    }

    return (
        <div class="container">
		<main>
			<div class="slider">
				<div class="slide-1">
					<img src={book1} />
					<div class="slider-text">
						<h3>Sale 40% off</h3>
						<h2>Men's Watches</h2>
						<a href="#">Shop Now</a>
					</div>
				</div>
			</div> 

			<div class="new-product-section">
				<div class="product-section-heading">
					<h2>Products <img src={increase} /></h2>
					<h3>Search Results</h3>
				</div>
				<div class="product-content">
                {products.map(product=> (
                 <div class="product" key={product.bookID}>
          <a >
          <img src={product.bookImage} alt="Product Image" />
          </a>
          <div class="product-detail">
            <h3>{product?.category?.categoryName}</h3>
            <h2>{product.bookName}</h2>
            <a >Add to Library</a>
          </div>
        </div>
      ))}
					
				</div>
			</div> 

			<div class="collection">
				<div class="men-collection">
					<h2 >Reading Book</h2>
				</div>
				<div class="women-collection">
					<h2 >Finished Book</h2>
				</div>
			</div> 

		</main> 
	</div>
    )
}