import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {AiFillPlayCircle} from 'react-icons/ai'
import NoImage from './noImage.png'
import '../Styles/Movies.css'
import {Container} from './NavBar'
import useFilter from '../hooks/useFilter' 

function Parent(props){
	console.log("NEYMİS BU PROP",props.name)
	const {toggle,inputValue} = useContext(Container)
	const input = inputValue
	const [moviesData,setMoviesData] = useState([])
	const [newArr,setNewArr] = useFilter([], props.name)

	const Api = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
	const MovieCall = async () => {
		const data = await axios.get(Api)
		const results = data.data.entries
		console.log("result",results)
		setNewArr(results)
		setMoviesData(newArr)
	}
	useEffect(() => {
		MovieCall()
		console.log("Tekrar render edilip çalıştırılınca mı patlıyor")
	},[newArr])
	console.log(moviesData)

	return(
		<div>
			<div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
			<div className="movies-container">
			{moviesData.map((movie) => {
				return(
				<div>
					<div id="container">
						<AiFillPlayCircle color="white" fontSize={40} id="playIcon" />
						<img src={movie.images["Poster Art"].url ? movie.images["Poster Art"].url : NoImage} />
						<h3 className={toggle ? "DarkTheme" : "LightThemeClose"}>{movie.title}</h3>
					</div>
				</div>
				)
			})}
			</div>
			</div>
		</div>
	)
}

export default Parent;