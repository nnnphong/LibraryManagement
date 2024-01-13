import facebook from './../../assets/img/icons/facebook.png'
import instagram from './../../assets/img/icons/instagram.png'
import twitter from './../../assets/img/icons/twitter.png'
import paperplane from './../../assets/img/icons/paper_plane.png'
import './../../vendor/bootstrap/css/bootstrap.min.css'
import './../../vendor/font-awesome/css/font-awesome.css'
import './../../assets/css/app.css'
import './../../assets/js/app.js'
import './../../assets/css/style1.css'
import papermoney from './../../assets/img/icons/paper_money.png'

function FooterComponent(){
    return (
        <footer>
		<div class="container">
			<div class="footer-widget">
				<div class="widget">
					<div class="widget-heading">
						<h3>Important Link</h3>
					</div>
					<div class="widget-content">
						<ul>
							<li><a href="about.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
							<li><a href="refund.html">Refund Policy</a></li>
							<li><a href="terms.html">Terms & Conditions</a></li>
						</ul>
					</div>
				</div>
				<div class="widget">
					<div class="widget-heading">
						<h3>Information</h3>
					</div>
					<div class="widget-content">
						<ul>
							<li><a href="account.html">My Account</a></li>
							<li><a href="orders.html">My Orders</a></li>
							<li><a href="cart.html">Cart</a></li>
							<li><a href="checkout.html">Checkout</a></li>
						</ul>
					</div>
				</div>
				<div class="widget">
					<div class="widget-heading">
						<h3>Follow us</h3>
					</div>
					<div class="widget-content">
						<div class="follow">
							<ul>
								<li><a href="#"><img src={facebook} /></a></li>
								<li><a href="#"><img src={twitter} /></a></li>
								<li><a href="#"><img src={instagram} /></a></li>
							</ul>
						</div>						
					</div>
					<div class="widget-heading">
						<h3>Subscribe for Newsletter</h3>
					</div>
					<div class="widget-content">
						<div class="subscribe">
							<form>
								<div class="form-group">
									<input type="text" class="form-control" name="subscribe" placeholder="Email" />
									<img src={paperplane} />
								</div>
							</form>
						</div>						
					</div>
				</div>
			</div> 
			<div class="footer-bar">
				<div class="copyright-text">
					<p>Copyright 2021 - All Rights Reserved</p>
				</div>
				<div class="payment-mode">
					<img src={papermoney} />
				</div>
			</div> 
		</div>
	</footer> 
    )
}

export default FooterComponent