import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddComment from '@material-ui/icons/AddCommentRounded';
import './Messages.css';
import Button from '@material-ui/core/Button';
import { CardActionArea } from '@material-ui/core';


class MessageDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            messageList: [],
            commentList: [],
            personList: [],
    }
}

    fetchComment = () => {
        const id = this.props.match.params.id;
        
        const action = { type: 'FETCH_COMMENT', payload: id };
        this.props.dispatch(action);
        // console.log(this.props.message.mess_id);
    }

    componentDidMount() {
        
        this.props.dispatch({ type: 'FETCH_MESSAGES' });
        this.props.dispatch({ type: 'FETCH_PERSON' });
        this.fetchComment();
        // this.props.dispatch({ type: 'FETCH_COMMENT', payload: id })
    }

    AddCommentBtn = () => {
        console.log('AddComment Click');
    }

   
    render() {

    // let commentList = this.props.reduxStore.comment.map(comment =>{
    //     console.log(comment);
    //     return(
    //         <Typography key={comment.id}>
    //             {}
    //         </Typography>
    //     )
    // }
            
    //    )}
     
        return (
            <Card className="CommentCard"> 
           
                    {/* {JSON.stringify(this.props.reduxStore)} */}
                <CardContent>

                <Typography>
                  {JSON.stringify(this.props.reduxStore.comment)}
                  {/* {JSON.stringify(this.props.reduxStore.message)} */}
                  {/* {commentList} */}
                </Typography>
                
            
                <CardActionArea>
                    <Button onClick={this.AddCommentBtn} className="AddCommentIcon" >
                        <AddComment  />
                    </Button>
                </CardActionArea>
                </CardContent>  
               
            </Card>  
            );
        }

    }

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(MessageDetail);