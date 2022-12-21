import React from 'react';
import './AddForm.css';
import Wrapper from './Wrapper';

class AddForm extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <Wrapper id="wrap">
                <div className='input'>
                    <input className='create-todo' type="text" placeholder='Create your to do'/> 
                    <input className='description' type="text" placeholder='Description what to do'/>
                </div>
                <div className='btns'>
                    <button className='cancelBtn'>Cancel</button>
                    <button className='addBtn'>Add To Do</button>
                </div>
            </Wrapper>
        )
    }
}

export default AddForm;