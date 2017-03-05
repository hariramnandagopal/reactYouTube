import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetails';

const YT_APP_KEY = "AIzaSyBEjgmzE2fyXxiKKkzHQgbLs7kElf0OI9M";

class App extends Component {
	constructor(props) {
		super(props) 

		this.state ={
			videos: [],
			selectedVideo: null
		}

		this.videoSearch("reactjs");

	}

	videoSearch(term) {

		YTSearch({ key: YT_APP_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			})
		});

	}

	render() {

		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos} 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}	/>
			</div>
		)

	};

}

 
ReactDOM.render(<App />, document.querySelector('.container-fluid'));

 






