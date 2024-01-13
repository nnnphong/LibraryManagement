import { useNavigate, useParams } from "react-router-dom";
import { finishBookApi, getLibraryApi, getUserByNameApi} from "../api/UserApiService";
import { useEffect, useState } from "react";
import img5 from './../../../assets/img/product/img5.jpg'
import './../../../vendor/bootstrap/css/bootstrap.min.css'
import './../../../vendor/font-awesome/css/font-awesome.css'
import './../../../assets/css/app.css'
import './../../../assets/js/app.js'
import './../../../assets/css/style1.css'

export default function FinishedBookComponent(){

    const {userName} = useParams()
    const [user, setUser] = useState([])

    useEffect( () => refreshUser(), [userName])

    const navigate = useNavigate()

    function refreshUser(){
        getUserByNameApi(userName)
        .then(response => {
            setUser(response.data)
        })
        .catch(error => console.log(error))
    }
 
    function updateState(bookID){
        navigate(`/update?userName=${userName}&bookID=${bookID}`)
    }

    function backToMain(){
        navigate(`/main/${userName}`)
    }

    function backToUnfinish(){
      navigate(`/library/${userName}`)
  }

    return (
        <div class="container">
		<main>
			<div class="breadcrumb">
				<ul>
					<li><a onClick={backToMain}>Home</a></li>
					<li> / </li>
					<li><a onClick={backToUnfinish}>Reading Book</a></li>
					<li> / </li>
					<li><a>Finished Book</a></li>
				</ul>
			</div> 

			
			<div class="account-page">
				<div class="profile">
                    {
					<div class="profile-img">
						<img src={img5} />
						<h2>{user.userName}</h2>
						<p>{user.userPhone}</p>
					</div>
                    }						
					<ul>
						
						<li><a >My Orders <span> &gt; </span></a></li>
						<li><a >Change Password <span> &gt; </span></a></li>
						<li><a >Logout <span> &gt; </span></a></li>
					</ul>
				</div>
				<div class="account-detail">					
					<h2>My Orders</h2>
					<div class="order-detail">
						{user.userBooks && user.userBooks.length > 0 ? (
						<table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Category</th>
									<th>Author</th>
									<th>Page</th>
									<th>Notes</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
                            {user.userBooks.map(userBook => {
                                if (userBook.userBookRead) {
    return (
      <tr key={userBook.id}>
        <td>{userBook?.book?.bookName}</td>
        <td>{userBook?.book?.category?.categoryName}</td>
        <td>{userBook?.book?.bookAuthor}</td>
        <td>{userBook.userBookPage}</td>
        <td>{userBook.userBookNotes}</td>
        <td>
          <button className="btn btn-success" onClick={() => updateState(userBook?.book?.bookID)}>
            Update
          </button>
        </td>
        <td>
        </td>
      </tr>
    );
  } 
})}
								
							</tbody>
						</table>
						) : (
                <p>You've not added any book yet</p>
            )}
					</div>	
			</div>	
            	</div>
		</main> 
	</div>
        
    )
}