import dispatcher from '../dispatcher/dispatcher';

export function addMovie(id,text){
    dispatcher.dispatch({
        type:'ADD_Movie',
        id,
        text
    })
}