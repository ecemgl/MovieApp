import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {AiFillPlayCircle} from 'react-icons/ai'
import NoImage from './noImage.png'
import '../Styles/Movies.css'
import {Container} from './NavBar'
import useFilter from '../hooks/useFilter' 

function Content(props){
	const {toggle,inputValue} = useContext(Container)
	const input = inputValue
	const [contentData,setContentData] = useState([])
	const [newArr,setNewArr] = useFilter([], props.name)

	const Api = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
	const ContentCall = async () => {
		const data = await axios.get(Api)
		const results = data.data.entries
		console.log("result",results)
		setNewArr(results)
		setContentData(newArr)
	}
	useEffect(() => {
		ContentCall()
	},[newArr])
	console.log(contentData)

	return(
		<div>
			<div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
			<div className="movies-container">
			{contentData.map((content) => {
				return(
				<div>
					<div id="container">
						<AiFillPlayCircle color="white" fontSize={40} id="playIcon" />
						<img src={content.images["Poster Art"].url ? content.images["Poster Art"].url : NoImage} />
						<h3 className={toggle ? "DarkTheme" : "LightThemeClose"}>{content.title}</h3>

					</div>
				</div>
				)
			})}
			</div>
			</div>
		</div>
	)
}

export default Content;