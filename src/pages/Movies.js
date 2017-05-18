import React from 'react';
import Movie from '../components/Movie';
import * as MoviesActions from '../actions/MoviesActions';
import MoviesStore from '../stores/MoviesStore';

export default class Movies extends React.Component{
    constructor (){
        super();
        this.getMovies = this.getMovies.bind(this);
        this.state = {
            movies : MoviesStore.getAll()
        }
    }
    componentWillMount(){
        
        MoviesStore.on('change',this.getMovies);
    }
    
    getMovies(){
        this.setState({
            movies:MoviesStore.getAll()
        })
        console.log(this.movies)
    }
   
    render(){
        const {movies} = this.state;
        const MoviesComponent = movies.map((movies)=>{
            return <Movie key={movies.id} title={movies.title}/>
        })
        return(
            <div>
                {MoviesComponent}
            </div>
        )
    }

}