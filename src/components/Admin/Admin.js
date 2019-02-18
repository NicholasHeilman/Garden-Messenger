import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
// import Styles from '@material-ui/Styles'
import './Admin.css';
import moment from 'moment'


class Admin extends Component {
    
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_MESSAGES' });
        this.props.dispatch({type: 'FETCH_PERSON' });
    }
    
   
    
    render() {
         // Map the data for display  Person Table
         let personTable = this.props.reduxStore.person.map(person =>{
            return(
                    <TableRow key={person.id}>
                        <TableCell>{person.username}</TableCell>
                        <TableCell>{person.email}</TableCell>
                        <TableCell padding="checkbox"><Checkbox />
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
                    <TableCell padding="checkbox"><Checkbox />
                        </TableCell>
                </TableRow>
            )
        })//end MessageTable map
       
        return (
            <div className="container">
            <h3>Users </h3>
            <div className="table">
                <Table>
                    <TableHead className="PTHead">
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Info</TableCell>
                            <TableCell align="left">
                                <Button onClick={this.RemoveUser}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="PersonTableBody">
                            {personTable}
                    </TableBody>
                </Table> 
                </div>
                <h3>Messages</h3>   
                <div className="table"> 
                <Table className="MessageTable">
                    <TableHead className="MTHead">
                        <TableRow >
                            <TableCell>Message Headline</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Message ID</TableCell>
                            <TableCell align="left">
                                <Button onClick={this.RemoveMessage}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="MessageTableBody">
                            {messageTable}
                    </TableBody>
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