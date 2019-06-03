import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";

class Tablerow extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(){
        Axios.get("http://localhost:4000/business/delete/"+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
        // this.props.history.push('index');
        
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.person_name}
                </td>
                <td>
                    {this.props.obj.business_name}
                </td>
                <td>
                    {this.props.obj.business_gst_number}
                </td>
                <td>
                    <Link to ={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-primary">Delete</button>
                </td>
                
            </tr>
            )
        }
}

export default Tablerow;
