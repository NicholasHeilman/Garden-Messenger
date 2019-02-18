import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import moment from 'moment'


//page will display each message on a card that can be clicked  
class MessageItem extends Component {
  
  // componentDidUpdate(prevProps) {
  //   //get Customer Details only if props has changed
  //   //(props is the input) 
  //       if (this.props.val !== prevProps.val) {
  //         this.getCustomerDetails(this.props.val)
  //       }
  //     }

  cardClick = () => {
      console.log('Card Click');
      console.log(this.props.message.mess_id)
  }
        
    render() {

      // let MessageItems = [];
      //   for(let i = 0; i < this.props.message.length; i =+1){
      //     let item= this.props.message[i];
      //     let itemRow = (<MessageItem key={i} item={item} />);
      //     MessageItems.push(itemRow);
      //   }


        return (
          // <div>
         
            <Card className="messageCard">
      {/* Link to the detail view of the message */}
            <Link className="messageLink" to={`/message/${this.props.message.mess_id}`}  > 
            <CardActions onClick={this.cardClick}>
         
            <CardContent>

      {/* Display the headline of the message */}
              <Typography variant="h6" className="headline">
                {this.props.message.headline}
              </Typography>

      {/* Display the date stamp and user for the message */}
              <Typography className="dateUser">
              {this.props.message.username}, {moment(this.props.message.date).format("MMM Do YYYY")}
              </Typography>


            </CardContent>
                {/* Add a button to the card  */}
              {/* <Button onClick={this.cardClick} size="small">Learn More</Button> */}
            </CardActions>
            </Link>
          </Card>
          // </div>
        )
    }
        
}


  
export default MessageItem;