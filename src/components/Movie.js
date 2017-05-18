import React from 'react';

export default class Movie extends React.Component{
    constructor(props){
        super();
    }
    render(){
        const {title} = this.props;
        
        return(
            <div>
                <ul>
                    <li>{title}</li>
                </ul>
            </div>
        )
    }
}