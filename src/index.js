import _ from 'lodash';  // to throttle the search and not reload everysingle time the user types a key
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // give actual file reference when is not a node module
import VideoList from './components/video_list'; // give actual file reference when is not a node module
import VideoDetail from './components/video_detail'; // give actual file reference when is not a node module
const API_KEY = "AIzaSyDvjmRLlWg5J-PJNjXAw5RFnLNJi4UMrwY"; // YouTube API KEY



// Creating new component, this component should produce some HTML / JSX
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo : null 
		};
		this.videoSearch('surfboards');
	}
	
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {

		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

	  return (
	  	<div>
	  		<SearchBar onSearchTermChange={videoSearch} />
	  		<VideoDetail video={this.state.selectedVideo } />
	  		<VideoList 
		  		onVideoSelect={selectedVideo => this.setState({selectedVideo}) } 
		  		videos={this.state.videos} />
	  	</div>
	  );
	}
}

// Take this component's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector(".container"));