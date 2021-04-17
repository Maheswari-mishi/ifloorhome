
//import logo from '../component/assets/images/logo.png'
//import '../component/Assets/css/Header.css'
//import './Componant/Assets/css'



function Header() {
    return (			
		<div class="w3l-header-nav">
			<div class="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
				<div class="container">
					<a class="navbar-brand" href="index.html">Interior <span>Floor</span></a>
					<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="fa icon-expand fa-bars"></span>
						<span class="fa icon-close fa-times"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item active">
								<a class="nav-link" href="index.html">Home</a>
							</li>
							<li class="nav-item @@about__active">
								<a class="nav-link" href="about.html">About</a>
							</li>
							<li class="nav-item @@services__active">
								<a class="nav-link" href="services.html">Services</a>
							</li>
							<li class="nav-item @@contact__active">
								<a class="nav-link" href="contact.html">Contact</a>
							</li>
                		</ul>
						<div class="search-right">
							<a href="#search" title="search"><span class="fa fa-search" aria-hidden="true"></span></a>
								<div id="search" class="pop-overlay">
									<div class="popup">
										<form action="#" method="post" class="search-box">
											<input type="search" placeholder="Saerch your Keyword" name="search" required="required"
											autofocus="" />
											<button type="submit" class="btn"><span class="fa fa-search" aria-hidden="true"></span></button>
										</form>
									</div>
									<a class="close" href="#close">×</a>
								</div>
							<div class="box-support">
								<p>For Support Call <span class="fa fa-headphones"></span></p>
								<h5>121-345-6789</h5>
							</div>
						</div>
				</div>
			</div>
		</div>	
		
	</div>
    );
  }


export default Header;