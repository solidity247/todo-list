import React from "react";
import './EditForm.css'

class EditForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="editForm">
                <input type="text"></input>
            </div>
        )
    }

}


export default EditForm;