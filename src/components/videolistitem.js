import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (

			<li onClick={() => onVideoSelect(video)} className="list-group-item">

				<div className='media'>

				  <div className="media-left">
				    <a href="#">
				      <img className="media-object" src={imageUrl} alt="..."/>
				    </a>
				  </div>

				  <div className="media-body">
				    <h6 className="media-heading">{video.snippet.title}</h6>
				  </div>

				</div>  	

			</li>

		)
	
}

export default VideoListItem;