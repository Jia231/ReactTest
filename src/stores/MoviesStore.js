import {EventEmitter} from 'events';
import dispatcher from '../dispatcher/dispatcher';

class MoviesStore extends EventEmitter{
    constructor(){
        super();
        this.movies = [{
                "id": 18148,
                "title": "Tokyo Story",
            },
            {
                "id": 637,
                "title": "Life Is Beautiful",
            }]
    }

    getAll(){
        return this.movies;
    }    
    addMovie(id,title){
        console.log(`Add movie has received ${id} ${title}`)
        this.movies.push({
            id,
            title
        })
        //console.log(this.movies)
    this.emit('change');
    }
    handleActions(action){
        switch(action.type){
            case "ADD_TODO":
                this.addMovie(action.id,action.title)
            break;
        }
        console.log(`Dispatcher received ${action.type} ${action.id} ${action.title}`)
    }

}

const moviesStore = new MoviesStore;
dispatcher.register(moviesStore.handleActions.bind(moviesStore));
window.dispatcher = dispatcher;
export default moviesStore;