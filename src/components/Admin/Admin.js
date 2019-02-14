import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

class Admin extends Component {
    
    componentDidMount = () => {
        this.props.dispatch({type: 'GET_MESSAGES' });
        this.props.dispatch({type: 'FETCH_PERSON' });
    }
    
   
    
    render() {
       
        return (
            <div>
                {JSON.stringify(this.props.reduxStore)}    
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Contact Info</TableCell>
                            <TableCell>Remove User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>

                        </TableRow>
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