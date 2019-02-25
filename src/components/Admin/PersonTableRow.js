import React, { Component } from 'react';
import { connect } from 'react-redux';
import Delete from '@material-ui/icons/DeleteRounded';
import axios from 'axios';
// import swal from 'sweetalert';
import { TableBody, TableCell, TableRow  } from '@material-ui/core';

class PersonTableRow extends Component {

    //Delete Person
deletePerson = () => {
    axios({
        method: 'PUT',
        url: '/api/person',
        data: `${this.props.person.id}`
    }).then((response) => {
        console.log(this.props.person.id);
        this.props.dispatch({type: 'FETCH_PERSON' });
    }).catch((error) => {
        console.log('Delete Person Error', error);
        console.log('In Catch', this.props.person.id);
    });
} //end delete


    render() {
        return (
            
                <TableBody>
                    <TableRow key={this.props.person.id}>
                        <TableCell>{this.props.person.username}</TableCell>
                        <TableCell>{this.props.person.email}</TableCell>
                        <TableCell ><Delete onClick={this.deletePerson} />
                        </TableCell>
                    </TableRow>
                </TableBody>
         
        );
    }
}


const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
});

export default connect(mapReduxStoreToProps)(PersonTableRow)