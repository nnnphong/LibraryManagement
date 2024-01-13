import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ListProductsComponent from './product/ListProducts'
import ListUsersComponent from './user/ListUsers'
import ListCategoriesComponents from './product/ListCategories'
import  LoginComponent  from './LoginComponent'
import  ProductComponent  from './product/ProductComponent'
import AuthContextProvider, { AuthContext} from './security/AuthContext'
import LogoutComponent from './LogoutComponent'
import HeaderComponent1 from './HeaderComponent1'
import HeaderComponent2 from './HeaderComponent2'
import UserComponent from './user/UserComponent'
import MainComponent from './MainComponent'
import ProductNameSearchComponent from './product/ProductNameSearchComponent'
import CategoryNameSearchComponent from './product/CategorySearchComponent'
import RegisterComponent from './RegisterComponent'
import { useContext} from 'react'
import FooterComponent from './FooterComponent'
import UserDetailComponent from './user/UnfinishedBook.jsx'
import UpdateStateComponent from './product/BookStateUpdate'
import FinishedBookComponent from './user/FinishedBook'

function RequireAuth({children}){
    const authContext = useContext(AuthContext)

    if(authContext.isAuthenticated){
        return children;
    }else{
        return <Navigate to ="/login" />
    }
}

export default function ManagementApp(){
    return (
        <div className="ManagementApp">
            <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderComponent1 />} /> {/* HeaderComponent1 */}
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
        <Route path="/main/:userName" element={<RequireAuth><HeaderComponent1/><MainComponent /><FooterComponent/></RequireAuth>} />

        <Route path="/products" element={<RequireAuth><HeaderComponent2 /><ListProductsComponent /><FooterComponent/></RequireAuth>} />
        <Route path="/products/:id" element={<RequireAuth><HeaderComponent2 /><ProductComponent /></RequireAuth>} />

        <Route path="/categories" element={<RequireAuth><HeaderComponent2 /><ListCategoriesComponents /><FooterComponent/></RequireAuth>} />
        
        <Route path="/users/:id" element={<RequireAuth><HeaderComponent2 /><UserComponent /></RequireAuth>} />
        <Route path="/users" element={<RequireAuth><HeaderComponent2 /><ListUsersComponent /></RequireAuth>} />

        <Route path="/categories" element={<RequireAuth><HeaderComponent2 /><ListCategoriesComponents /></RequireAuth>} />

        <Route path="/library/:userName" element={<RequireAuth><HeaderComponent1 /><UserDetailComponent /><FooterComponent/></RequireAuth>} />
        <Route path="/finished/:userName" element={<RequireAuth><HeaderComponent1 /><FinishedBookComponent /><FooterComponent/></RequireAuth>} />
        <Route path="/update" element={<RequireAuth><HeaderComponent1 /><UpdateStateComponent /><FooterComponent/></RequireAuth>} />

        <Route path="/products/name_search/:productName" element={<RequireAuth><HeaderComponent1 /><ProductNameSearchComponent /><FooterComponent/></RequireAuth>} />
        <Route path="/products/category_search/:categoryName" element={<RequireAuth><HeaderComponent1 /><CategoryNameSearchComponent /><FooterComponent/></RequireAuth>} />

        <Route path="/logout" element={<RequireAuth><HeaderComponent1 /><LogoutComponent /></RequireAuth>} />
      </Routes>
    </BrowserRouter>
</AuthContextProvider>
        </div>
    )
}
