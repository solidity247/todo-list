import React from 'react';
import './Wrapper.css';



export default class Wrapper extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        return (
            <div className={this.props.className + ' wrapper'}>
                {this.props.children}
            </div>
        )
    }

    
}  