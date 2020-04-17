import React,{Component} from 'react';
import './App.css';
import MovieRow from './MovieRow';
import $ from 'jquery';
import download from './download.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.performSearch();

    }
    performSearch (page) {

      const url = "https://api.themoviedb.org/3/discover/movie?api_key=9f4f5f0ba5aceae4d41f722823266e8c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page="+page;
      $.ajax({
        
        url : url,
        success : (searchReasult) =>{
          const result =searchReasult.results;
          const movieRows = [];
          result.forEach((movie) => {
            movie.poster_src="http://image.tmdb.org/t/p/w185/"+movie.poster_path;
            movie.backdrop_path = "http://image.tmdb.org/t/p/w185/" +movie.backdrop_path;
            const movieRow = <MovieRow key={movie.id} movie = {movie} />
            movieRows.push(movieRow)
            
          });
          this.setState({rows:movieRows})
        },
        error : (xhr,status,err) => {
          console.log("sgdfugdsuhgfois")

        }

      })

    }

    searchChangehandler(event) {
      console.log(event.target.value)
      this.performSearch(event.target.value)
    }
    render() {
    return (
      <div className="App">
      <table className = "titleBar">
        <tr>
          <td>
            <img src = {download} width ="50"/>
          </td>
          <td width = "8"/>
          <td>
            <h3 style ={{color:"lightgreen"}}>MovieDB search</h3>
          </td>
        </tr>
      </table>
      <input className ="searchBar" placeholder = "Enter page Number"  onChange= {this.searchChangehandler.bind(this)} />
      {this.state.rows}
    </div>
    
       
    );
  }
}

export default App;
