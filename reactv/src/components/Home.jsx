import React ,{ useContext } from 'react'
import '../Styles/Home.css'
import {Container} from './NavBar'
import {Link} from 'react-router-dom'


function Home(){
	const {toggle} = useContext(Container)

	return(
		<div className={toggle ? "home-container" : "home-container-secondary"}>
			<div className={toggle ? "desc" : "desc-secondary"}>
				<h1>Welcome the ReacTV. Start Watching Series or Movies Now.</h1>
				
			</div>
			<div className="home-buttons">
					<button className={toggle ? "home-btn" : "home-btn-secondary"}>
						<Link style={{textDecoration: 'none', color: 'white', fontSize:'22px'}} to="/movies">Movies</Link>
						
					</button>
					<button className={toggle ? "home-btn" : "home-btn-secondary"}>
						<Link style={{textDecoration: 'none', color: 'white', fontSize:'22px'}} to="/series">Series</Link>
						
					</button>

			</div>
		</div>
		
	)
}

export default Home;