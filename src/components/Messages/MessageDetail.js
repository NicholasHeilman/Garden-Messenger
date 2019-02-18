import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from "axios";

class MessageDetail extends Component {
    state = {
        messageList: [],
    }
    constructor(props) {
        super(props);
        this.state = { messageList: []
    }}

    fetchHop = () => {
        const id = this.props.match.params.id;
        const action = { type: 'FETCH_MESSAGE_COMMENTS', payload: id };
        this.props.dispatch(action);
    }

    componentDidMount() {
        this.fetchHop();
    }

    componentDidUpdate(prevProps, prevState) {
        // Note: I used some example code from stackoverflow.com for this check on URL changes
        // https://stackoverflow.com/questions/52252353/re-render-same-component-on-url-change-in-react
        // user: c6754
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.fetchHop();
        } else if (this.props.reduxStore.focusHop !== prevProps.reduxStore.focusHop) {
            this.setState(this.props.reduxStore.focusHop);
        }
    }
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