import { useContext } from 'react'
import { useAuth } from "./security/AuthContext";
import { Link} from 'react-router-dom'
import { AuthContext} from './security/AuthContext'
import './../../vendor/bootstrap/css/bootstrap.min.css'
import './../../vendor/font-awesome/css/font-awesome.css'
import './../../assets/css/app.css'
import './../../assets/js/app.js'
import './../../assets/css/style1.css'
import onlineshopping from './../../assets/img/icons/online_shopping.png'
import account from './../../assets/img/icons/account.png'

export default function HeaderComponent2(){

    //const authContext = useContext(AuthContext)
    const authContext = useAuth()

    const isAuthenticated = authContext.isAuthenticated

    function logout2() {
        authContext.logout()

    }

    return (
        <header>
        <div class="container">
			<div class="brand">
				<div class="logo">
					<a>
						<img src={onlineshopping} />
						<div class="logo-text">
							<p class="big-logo">Management</p>
							<p class="small-logo">Library</p>
						</div>
					</a>
				</div> 
				<div class="shop-icon">
					<div class="dropdown">
						<img src={account}/>
						<div class="dropdown-menu">
							
						</div>
					</div>
				</div> 
               
			</div> 

			<div class="menu-bar" style={{paddingBottom: "600px"}}>
				<div class="menu">
					<ul>
						
						<li>{!isAuthenticated && <Link className="nav-link" to="/register">Register</Link>}</li>
						<li>{!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}</li>
						
                        <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/products">Products</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/users">Users</Link>}
                            </li>
							<li className="nav-item fs-5">
                                {isAuthenticated && <Link className="nav-link" to="/categories">Categories</Link>}
                            </li>
                            
                            <li>{isAuthenticated && <Link className="nav-link" to="/login" onClick={logout2}>Logout</Link> }</li>
					</ul>
				</div>
			</div> 
		</div> 
	</header> 
    )
}

