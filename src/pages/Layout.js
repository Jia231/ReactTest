import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
    render(){
        return(
            <div>
                <Link to="actors">Actors</Link>
                <Link to="/">Movies</Link>
                {this.props.children}
            </div>
        )
    }
}