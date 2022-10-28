import React ,{ useContext } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/Error.css'
import {Container} from './NavBar'




function Error(){
	const {toggle} = useContext(Container)


	return(
		<div className="error-container">
			<div className="error-elements">
				<div className={toggle ? "msg-group" : "msg-group-secondary"}>
					<h1>Oops - we've looked everywhere but couldn't find this page...</h1>
					<div className="link-group">
					<button className={toggle ? "error-btn" : "error-btn-secondary"}>
						<Link style={{textDecoration: 'none', color: 'black'}} to="/">Return the home page</Link>
						
					</button>
				</div>
				</div>
			
			</div>
			
			
			
		</div>


	)
}

export default Error;