import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import Delete from '@material-ui/icons/DeleteRounded';
import axios from 'axios';
import swal from 'sweetalert';
import { TableBody, TableCell, TableRow  } from '@material-ui/core';

class MessageTableRow extends Component {
    // Sweet Alert for delete conformation    
    clickDeleteMessage = () => {
        swal({
            Title: "Confirm Delete",
            text: "Once deleted, you will not be able to recover this conversation!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                this.deleteMessage();
            swal("Message has been deleted!", {
                icon: "success",
            });
            } else {
                swal("Message Safe");
            }
        });
    }// end Sweet Alert for delete

    // Delete Method
    deleteMessage = () => {
        axios({
            method: 'DELETE',
            url: `/api/messages/${this.props.message.mess_id}`
        }).then((response) => {
            console.log(this.props.message.mess_id);
            this.props.dispatch({type: 'FETCH_MESSAGES' });
        }).catch((error) => {
            console.log('Delete Error', error);
            console.log(this.props.message.mess_id);
        });
    } //end delete

    render() {
        return (
           
                <TableBody>
                    <TableRow key={this.props.message.mess_id}>
                        <TableCell>{this.props.message.headline}</TableCell>
                        <TableCell>{moment(this.props.message.date).format("MM-DD-YYYY")}</TableCell>
                        <TableCell>{this.props.message.mess_id}</TableCell>
                        <TableCell>
                            <Delete onClick={this.clickDeleteMessage}/>
                        </TableCell>
                    </TableRow>
                </TableBody>
           
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
});

export default connect(mapReduxStoreToProps)(MessageTableRow)
