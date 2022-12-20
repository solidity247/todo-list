import React from 'react';
import './AddForm.css';

class AddForm extends React.Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <div className='input'>
                    <input type="text" placeholder='Create your to do'/>
                    <input type="text" placeholder='Description what to do'/>
                </div>
                <div className='btns'>
                    <button className='cancelBtn'>Cancel</button>
                    <button className='addBtn'>Add To Do</button>
                </div>
            </div>
        )
    }
}

export default AddForm;