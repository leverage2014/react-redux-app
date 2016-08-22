import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyCbosRopyMtqA34tl-0IIBpCNlAcRZ6fLs';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.videoSearch('mackbook');
	}

	videoSearch(term) {
		YTSearch({
			key: API_KEY,
			term: term
		}, (videos) => {
			console.log(videos);
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term)
		}, 300);

		return (
			<div>
                <SearchBar onSearchTermChange={videoSearch}></SearchBar>
                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                <VideoList 
                    onVideoSelect = {selectedVideo=>this.setState({selectedVideo})}
                    videos={this.state.videos}>
                 </VideoList>
		    </div>
		);
	};
}

ReactDOM.render(
	<App/>,
	document.querySelector('.container'));