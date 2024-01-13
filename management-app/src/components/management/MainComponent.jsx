import { createContext, useContext, useEffect, useState } from "react";
import {retrieveAllProductsApi } from "./api/ProductApiService";
import {useNavigate, useParams } from "react-router-dom";
import './../../vendor/bootstrap/css/bootstrap.min.css'
import './../../vendor/font-awesome/css/font-awesome.css'
import './../..//assets/css/app.css'
import './../../assets/js/app.js'
import './../../assets/css/style1.css'
import increase from './../../assets/img/icons/increase.png'
import goodquality from './../../assets/img/icons/good_quality.png'
import { addLibraryApi } from "./api/UserApiService";
import { takeMostCategory } from "./api/CategoryApiService";
import book1 from './../../assets/img/book1.jpg'

export const UserNameContext = createContext();

export const useNameAuth = () => {
	return useContext(UserNameContext);
};


function MainComponent(){

    const [products, setProducts] = useState([])
	const {userName} = useParams()
	const [userNameC, setUserNameC] = useState('')
	const [noti, setNoti] = useState('')

	const [productSuggestion, setProductSuggestion] = useState([])
	

    useEffect(() => {
		setUserNameC(userName);
		refreshProducts();
		Suggestion();
	  }, [userName]);

    const navigate = useNavigate()

    function refreshProducts(){
        retrieveAllProductsApi()
          .then(response => {
            setProducts(response.data)
          })
    }

	function Suggestion(){
		takeMostCategory(userName)
		.then(response => {
			setProductSuggestion(response.data)
		}
		)
	}

	function addToLibrary(book){
		addLibraryApi(userName, book)
		.then(response => {
			if(response.data == false){
				setNoti("This book has already been added to your library")
			}else{
			navigate(`/library/${userName}`)
			}
		})
		.catch(error => console.log(error))
	}

	function MoveToLibrary(){
		navigate(`/library/${userName}`)	
	}
    
	function MoveToFinishedBook(){
		navigate(`/finished/${userName}`)	
	}

    return (
        <UserNameContext.Provider value={{userNameC}}>
        <div class="container">
		<main>
			<div class="slider">
				<div class="slide-1">
					<img src={book1} />
					<div class="slider-text">
						<h3>Sale 40% off</h3>
						<h2>Brand New Book</h2>
						<a href="#">Shop Now</a>
					</div>
				</div>
			</div> 

			<div class="new-product-section">
				<div class="product-section-heading">
					<h2>BOOKS <img src={increase} /></h2>
					<h3>Welcome to our library</h3>
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
            <a onClick={() => addToLibrary(product)}>Add to Library</a>
          </div>
        </div>
      ))}
	  {noti && <p>{noti}</p>}
					
				</div>
				
			</div> 

			<div class="collection">
				<div class="men-collection">
					<h2 onClick={MoveToLibrary}>Reading Book</h2>
				</div>
				<div class="women-collection">
					<h2 onClick={MoveToFinishedBook}>Finished Book</h2>
				</div>
			</div> 

			<div class="new-product-section">
				<div class="product-section-heading">
					<h2>Recommend Books <img src={goodquality} /></h2>
					<h3>OUR BEST BOOKS RECOMMENDED FOR YOU BASED ON YOUR LIBRARY</h3>
				</div>
				<div class="product-content">
				{productSuggestion.map(product=> (
                 <div class="product" key={product.bookID}>
          <a >
          <img src={product.bookImage} alt="Product Image" />
          </a>
          <div class="product-detail">
            <h3>{product?.category?.categoryName}</h3>
            <h2>{product.bookName}</h2>
            <a onClick={() => addToLibrary(product)}>Add to Library</a>
          </div>
        </div>
      ))}
	  {noti && <p>{noti}</p>}
					
				</div>
			</div> 
		</main> 
	</div>
    </UserNameContext.Provider>
    )
}

export default () => (
    <>
      <MainComponent />
    </>
  );