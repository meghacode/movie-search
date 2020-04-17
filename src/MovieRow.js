import React, { Component } from 'react';
import './App.css';

class MovieRow extends Component {

    showMovie() {
        const url = "https://www.themoviedb.org/movie/"+this.props.movie.id
        window.location.href = url
    }
    render() {
        return (
            <div>
            <table key = {this.props.movie.id}>
                <tbody>
                    <tr>
                    <td>
                        <img src = {this.props.movie.poster_src}/>
                    </td>
                    <td>
                        <h3 style ={{color:"red"}}>{this.props.movie.title}</h3>
                        <p style ={{color:"green"}}>{this.props.movie.overview}</p>
                    <td><input type = "button" value = "view" className="button" onClick={this.showMovie.bind(this)}/></td>    
                    </td>
                    </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default MovieRow;
