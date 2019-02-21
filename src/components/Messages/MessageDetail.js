import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddComment from '@material-ui/icons/AddCommentRounded';
import './Messages.css';
import Button from '@material-ui/core/Button';
import { CardActionArea } from '@material-ui/core';
import moment from 'moment'


class MessageDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            messageList: [],
            commentList: [],
            personList: [],
    }
}
        //Function to Fetch the comments based on message ID
    fetchComment = () => {
        const id = this.props.match.params.id;
        const action = { type: 'FETCH_COMMENT', payload: id };
        this.props.dispatch(action);
        // console.log(this.props.message.mess_id);
    }

    componentDidMount() {
        // this.props.dispatch({ type: 'FETCH_MESSAGES' });
        // this.props.dispatch({ type: 'FETCH_PERSON' });
        this.fetchComment();
    }

    AddCommentBtn = () => {
        console.log('AddComment Click');
    }

    leftMargin = () => {
        
    }
   
    render() {
        //Map and Display of the User Generated Comments
    let commentList = this.props.reduxStore.comment.map(comment =>{
        console.log(comment);
        return(
            <Card key={comment.id} className="UserIdComments">
                <Typography variant="subtitle1" className="userComments">
                    {comment.comment}
                </Typography>
                <Typography className="commentUser" >
                    {comment.username}  {moment(comment.date).format("MMM Do YYYY")}
                </Typography>
            </Card>
        )
    })
            
    
     
        return (
            <div>
            <Card className="CommentCard"> 
           
                    {/* {JSON.stringify(this.props.reduxStore)} */}
                <CardContent>
                {/* {commentList} */}
                <Typography>
                {JSON.stringify(this.props.reduxStore.comment)}
                    <p>{this.props.reduxStore.comment.headline}</p>
                    {this.props.reduxStore.comment.message}
                </Typography>
                </CardContent>   
                  
                 
                
                
            
                <CardActionArea>
                    <Button onClick={this.AddCommentBtn} className="AddCommentIcon" >
                        <AddComment  />
                    </Button>
                </CardActionArea>
                 
            </Card>  
            {commentList}
            </div>
            );
        }

    }

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(MessageDetail);