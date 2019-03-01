import React, { Component } from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './App.css';

const liveFeedData = [{
  url:"www.google.co.in",title:"Google"
},
{
  url:"www.sreyas.com",title:"Sreyas"
}
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {newsItems: []};
  }

  componentDidMount() {

    fetch('http://localhost:3000/news')
    .then(response => response.json())
    .then(articles => {
      this.setState({
        newsItems: [...this.state.newsItems, ...articles],
      });
    }).catch(error => console.log(error));
  
  }

 componentWillUnmount(){

  }

  handleRate({ rating }){

    console.log("Inside the function")
  }

  

  render(){
    
      const NewsItem = (article, id) => (
        <li key={id}><a href={`${article.url}`}>{article.title}></a>
        <p>Testing the news feed. This should come from news....................
          ..............asdasdasdasdasdasdkmasdfaskd.asdasdasdasdasdasdkmasdfaskdasdasd
        </p>
        
        <footer>
        <Rater total={5} rating={2} onRate={this.handleRate.bind(this)} />
                    <a href="#">Read more</a>
                    
        </footer>
        </li>
       
        

      );

      const newsItems = this.state.newsItems.map(e => NewsItem(e,1));
      return (
        <div className="App">
        <h1 className="App-title">Live News Feed</h1>
        <ul className="news-items">{newsItems}</ul>
      </div>
    )

  }
   
 
  

  }

export default App;
