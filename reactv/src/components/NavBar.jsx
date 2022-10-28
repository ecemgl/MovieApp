import React, { useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import '../Styles/NavBar.css'
import {Routes,Route, NavLink} from 'react-router-dom'
import Movies from './Movies'
import Series from './Series'
import Error from './Error'
import Home from './Home'

export const Container = React.createContext()

function NavBar(){
	const [toggle,setToggle] = useState(true);
	const [inputValue,setInputValue] = useState("");
	return(
		<Container.Provider value={{toggle,inputValue}}>
		<div>
			<nav className={toggle ? "" : "navBar"}>
				<div className="nav-options">
					<NavLink to="/">
						<h1 id={toggle ? "heading" : "heading-secondary"}>ReacTV</h1>
					</NavLink>
					<NavLink to="/movies" style={({isActive}) => {return {color: isActive ? '#fff' : '#ee0000'}}}>
						<span id={toggle ? "option" : "option-secondary"}>Movies</span>
					</NavLink>
					<NavLink to="/series" style={({isActive}) => {return {color: isActive ? '#fff' : '#ee0000'}}}>
						<span id={toggle ? "option" : "option-secondary"}>Series</span>
					</NavLink>
				</div>
				<div className="input-group">
				<input type="text" placeholder="Search" onChange={(e) => setInputValue(e.target.value)} />
				<HiSearch fontSize={21} color="black" id="search" />
				<div id="Color-switcher" onClick={() => setToggle(!toggle)}>
					<div id={toggle ? "switcher" : "switcher-secondary"}></div>
				</div>
				</div>
			</nav>
			<Routes>
				<Route path='' element={<Home/>} />
				<Route path='movies' element={<Movies/>} />
				<Route path='series' element={<Series/>} />
				<Route path='error' element={<Error/>} />
				<Route path='*' element={<Error/>} />
			</Routes>
		</div>
		</Container.Provider>
	)
}

export default NavBar;