import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


//page will display each message on a card that can be clicked  


class MessageItem extends Component {

  cardClick = () => {
      console.log('Card Click');
      

  }
        
    render() {
        return (
            <Card className="messageCard">
            <Link className="messageLink" to="/MessageDetail">
            <CardActions onClick={this.cardClick}>
            <CardContent>
              <Typography variant="h6" className="headline">
                {this.props.message.headline}
              </Typography>
              <Typography className="dateUser">
                {this.props.message.date}, User:{this.props.message.user_id}
              </Typography>
            </CardContent>
            
              {/* <Button onClick={this.cardClick} size="small">Learn More</Button> */}
            </CardActions>
            </Link>
          </Card>
        );
    }
}


  
export default MessageItem;