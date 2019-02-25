import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import '../Messages/Messages.css';
// import { CardActionArea } from '@material-ui/core';
import moment from 'moment'


class CommentCard extends Component{

render() {
    return(
            <Card key={this.props.comment.id} className="UserIdComments">
                <Typography variant="subtitle1" className="userComments">
                    {this.props.comment.comment}
                </Typography>
                <Typography className="commentUser" >
                    {this.props.comment.username}  {moment(this.props.comment.date).format("MMM Do YYYY")}
                </Typography>
            </Card>
        )
    }
}

const mapReduxStoreToProps = (reduxStore) => ({ 
    reduxStore: reduxStore 
 
});

export default connect(mapReduxStoreToProps)(CommentCard);