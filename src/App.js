import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      alt: 'Loading.',
      text: ''
    }
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => res.json())
        .then(data => {
          this.setState({
            url: data.hdurl,
            alt: data.explanation,
            text: data.explanation
          });
        })
        .catch(err => this.setState({alt: 'Image Failed to Load.'}));
  }

  render() {
    return <div className='App'>
      <h1>NASA Astronomy Photo of the Day</h1>
      <div className='photo-container'>
        <img src={this.state.url} alt={this.state.alt} />
      </div>
      <p>{this.state.text}</p>
    </div>
  }
}

export default App;
