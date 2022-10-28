import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {AiFillPlayCircle} from 'react-icons/ai'
import NoImage from '../noImage.png'
import '../Styles/Content.css'
import {Container} from './NavBar'
import useFilter from '../hooks/useFilter' 
import ClipLoader from "react-spinners/ClipLoader";
import {useNavigate} from 'react-router-dom';


function Content(props){
	const [loading, setLoading] = useState(false)
	const {toggle} = useContext(Container)
	const [contentData,setContentData] = useState([])
	const [newArr,setNewArr] = useFilter([], props.name)
	const navigate = useNavigate()

	const Api = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
	const ContentCall = async () => {
		await axios.get(Api).then(function (data) {
			
		const results = data.data.entries
		setNewArr(results)
		setContentData(newArr)
		})
		.catch(function (error) {
			navigate('/error')
		});
		
	}

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		},1000)
	},[])

	useEffect(() => {
		ContentCall()
	},[newArr])

	return(
		<div>
			<div className={toggle ? "mainBgColor" : "secondaryBgColor"}>
			<div className="movies-container">
			{(loading || contentData.length === 0) ? 
			<div className="loading-icon">
				<ClipLoader
				color={toggle ? "#EE9800" : "#ff206a"}
				loading={loading}
				size={100}
				aria-label="Loading Spinner"
				data-testid="loader"
				/> 
			</div>
			: 
			contentData.map((content) => {
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