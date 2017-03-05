import React, { Component } from 'react';
import VideoListItem from './videolistitem';

const VideoList = (props) => {

	const videoListItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video}/>
		)
	});


	return (

		<ul className="col-md-4">
			{videoListItems}
		</ul>

	)

};

export default VideoList;

//<VideoListItem />