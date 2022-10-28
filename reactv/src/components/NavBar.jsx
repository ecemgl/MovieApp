import React, { useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import '../Styles/NavBar.css'
import {Routes,Route, NavLink} from 'react-router-dom'
import Movies from './Movies'
import Series from './Series'
import Trends from './Trends'
import Pricing from './Pricing'
import Error from './Error'

export const Container = React.createContext()

function NavBar(){
	const [toggle,setToggle] = useState(true);
	const [inputVal,setInputVal] = useState("");
	return(
		<Container.Provider value={{toggle,inputVal}}>
		<div>
			<nav className={toggle ? "" : "navBarColor"}>
				<div className="nav-options">
						<h1 id={toggle ? "" : "heading"}>ReacTV</h1>
					<NavLink to="/movies" style={({isActive}) => {return {color: isActive ? '#fff' : '#EE9800'}}}>
						<span id={toggle ? "Movies" : "MoviesLight"}>Movies</span>
					</NavLink>
					<NavLink to="/series" style={({isActive}) => {return {color: isActive ? '#fff' : '#EE9800'}}}>
						<span id={toggle ? "Movies" : "MoviesLight"}>Series</span>
					</NavLink>
					<NavLink to="/trending" style={({isActive}) => {return {color: isActive ? '#fff' : '#EE9800'}}}>
						<span id={toggle ? "Movies" : "MoviesLight"}>Trends</span>
					</NavLink>
					<NavLink to="/pricing" style={({isActive}) => {return {color: isActive ? '#fff' : '#EE9800'}}}>
						<span id={toggle ? "Movies" : "MoviesLight"}>Pricing</span>
					</NavLink>
				</div>
				<div className="input-group">
				<input type="text" placeholder="Search" onChange={(e) => setInputVal(e.target.value)} />
				<HiSearch fontSize={21} color="green" id="search" />
				<div id="Color-switcher" onClick={() => setToggle(!toggle)}>
					<div id={toggle ? "Color-switcher-mover" : "Color-switcher-moved"}></div>
				</div>
				</div>
			</nav>
			<Routes>
				<Route path='movies' element={<Movies/>} />
				<Route path='series' element={<Series/>} />
				<Route path='trending' element={<Trends/>} />
				<Route path='pricing' element={<Pricing/>} />
				<Route path='error' element={<Error/>} />
				<Route path='*' element={<Error/>} />
			</Routes>
		</div>
		</Container.Provider>
	)
}

export default NavBar;