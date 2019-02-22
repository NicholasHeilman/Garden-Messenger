import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
// import Button from '@material-ui/core/Button';
import './Admin.css';
import moment from 'moment'
import Delete from '@material-ui/icons/DeleteRounded';


class Admin extends Component {
    
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_MESSAGES' });
        this.props.dispatch({type: 'FETCH_PERSON' });
    }
    
    deleteMessage = () => {
        console.log('Delete Message');
        const action = {type: 'DELETE_FROM_MESSAGES',
                        payload: { id: this.props.reduxStore.message.mess_id}};
        this.props.dispatch(action);
        console.log(this.props.reduxStore.message.mess_id);
    }
    
    render() {
         // Map the data for display  Person Table
         let personTable = this.props.reduxStore.person.map(person =>{
            return(
                    <TableRow key={person.id}>
                        <TableCell>{person.username}</TableCell>
                        <TableCell>{person.email}</TableCell>
                        <TableCell ><Delete onClick={this.deletePerson} />
                        </TableCell>
                    </TableRow>
                
            )
        })// end PersonTable map
     
        //Map and display date for Message Table
        let messageTable = this.props.reduxStore.message.map(message =>{
            return(
                <TableRow key={message.mess_id}>
                    <TableCell>{message.headline}</TableCell>
                    <TableCell>{moment(message.date).format("MM-DD-YYYY")}</TableCell>
                    <TableCell>{message.mess_id}</TableCell>
                    <TableCell>
                        <Delete onClick={this.deleteMessage}/>
                    </TableCell>
                </TableRow>
            )
        })//end MessageTable map
       
        return (
            <div className="container">
            <h3>Users </h3>
            <div className="PersonTable">
                <Table>
                    <TableHead className="PTHead">
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Info</TableCell>
                            <TableCell>Remove User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="PersonTableBody">
                            {personTable}
                    </TableBody>
                </Table> 
                </div>
                <h3>Messages</h3>   
                <div class="MessageTable"> 
                <Table className="MessageTable">
                    <TableHead className="MessageTableHeadRow">
                    {/* <div class="MessageTableHeadRow"> */}
                        <TableRow >
                            <TableCell>Message Headline</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Message ID</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                        {/* </div> */}
                    </TableHead>
                    {/* <div class="MessageTableBody">  */}
                    <TableBody className="MessageTableBody">
                            {messageTable}
                    </TableBody>
                    {/* </div> */}
                </Table>     
            </div>
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(Admin);