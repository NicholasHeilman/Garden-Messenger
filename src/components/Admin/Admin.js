import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import './Admin.css';
import MessageTableRow from './MessageTableRow';
import PersonTableRow from './PersonTableRow';

class Admin extends Component {
    constructor(props){
        super();
        this.state =  {
            message: [],
        }
    }
    
    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_MESSAGES' });
        this.props.dispatch({type: 'FETCH_PERSON' });
        this.setState({
            message: this.props.reduxStore.message });
    }
    
    render() {
         // Map the data for display  Person Table
         let personTable = this.props.reduxStore.person.map(person =>{
            return( <PersonTableRow person={person} key={person.id} />)
        })// end PersonTable map
     
        //Map and display date for Message Table
        let messageTable = this.props.reduxStore.message.map(message =>{
           return ( <MessageTableRow message={message} key={message.mess_id} />)  
        })//end MessageTable map
       
        return (
            <div className="container">
                <h3 className="tableTitle">Users </h3 >
            <div className="MessageTable">
                <Table>
                    <TableHead className="TableHeadRow">
                        <TableRow className="TableHeadRow">
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Info</TableCell>
                            <TableCell>Remove User</TableCell>
                        </TableRow>
                    </TableHead>
                  
                            {personTable}
                 
                </Table> 
            </div>
                <h3 className="tableTitle">Messages</h3>   
            <div className="MessageTable"> 
                <Table>
                    <TableHead className="TableHeadRow">
                        <TableRow className="TableHeadRow">
                            <TableCell>Message Headline</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Message ID</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                   
                    {/* <TableBody className="MessageTableBody"> */}
                            {messageTable}
                    {/* </TableBody> */}

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