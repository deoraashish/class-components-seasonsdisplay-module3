import React from 'react';
import ReactDOM from 'react-dom';
import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        // this.state = {lat: null, errorMessage: ''};
    }
    
    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({errorMessage: error.message}));
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (<div>Error: {this.state.errorMessage}</div>);
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat}/>
        }
        return (<Spinner message='Please acccept the location request' />);
    }

    render () {
        return(
            <div>
                {this.renderContent()}
            </div>
            );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));