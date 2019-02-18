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

class Admin extends Component {
    
    componentDidMount = () => {
        // this.props.dispatch({type: 'GET_MESSAGES' });
        this.props.dispatch({type: 'FETCH_PERSON' });
    }
    
   
    
    render() {
         // Map the data for display  
         let personTable = this.props.reduxStore.person.map(person =>{
            return(
                
                    <TableRow key={person.id}>
                        <TableCell>{person.username}</TableCell>
                        <TableCell>{person.email}</TableCell>
                        <TableCell padding="checkbox"><Checkbox />
                        
                        </TableCell>
                    </TableRow>
                
            )
        })// end map
       
        return (
            <div className="table">
                {/* {JSON.stringify(this.props.reduxStore.person)}     */}
                
                <Table className="PersonTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Info</TableCell>
                            <TableCell>
                                <Button onClick={this.RemoveUser}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    </svg>
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {personTable}
                    </TableBody>
                </Table>         
            </div>
        );
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(Admin);