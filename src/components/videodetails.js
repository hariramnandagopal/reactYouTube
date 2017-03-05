import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import VideoList from './videolist';

const VideoDetail = ({video}) => {
	
	if(!video) {
		return <div> Loading... </div>;
	}

	console.log(video);

	const videoID = video.id.videoId;
	const youTubeURL = `https://www.youtube.com/embed/${videoID}`;
	
	return (

		<div className="col-md-8">
					
				<div className="embed-responsive embed-responsive-16by9">
  					<iframe className="embed-responsive-item" src={youTubeURL}></iframe>
				</div>

				<div className="details">
					<div><b>{video.snippet.title}</b></div>
					<div>{video.snippet.description}</div>
				</div>

		</div>

	)


}

export default VideoDetail;