import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from "axios";

class MessageDetail extends Component {
    // state = {
    //     messageList: [],
    // }

    // componentDidMount(){
    //     // Saga for the axios.get 
    //     // this.props.dispatch({ type: 'GET_MESSAGES' });
    // }

   

    render() {
        let messsageDetails = this.props.message.filter( m => m.id === this.props.params.id)[0];
        return (
                <div>
                    <p className="mess_headline">{messsageDetails.headline}</p>
                    <p className="mess_desc">{messsageDetails.message}</p>
                </div> 
            );
        }

    }
//         return (
//             <div>
//                 {/* {JSON.stringify(this.props.reduxStore.message)} */}
//                 <h3>Message Details</h3>
//                 <ul>
                   
//                 </ul>
//             </div>
//         )
//     }
// }


const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(MessageDetail);