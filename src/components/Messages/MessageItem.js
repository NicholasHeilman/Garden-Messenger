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
import { connect } from 'react-redux';



//page will display each message on a card that can be clicked  
class MessageItem extends Component {
    constructor(props){
      super(props);
      this.state ={
        mess_id: '',
      }
    }
  

  cardClick = () => {
      console.log(this.props.message.mess_id)
      this.setState({
        mess_id: this.props.message.mess_id,
      })
      console.log(this.state.mess_id)
  }
     
 

    render() {

        return (
          // <div>
          
            <Card className="messageCard" >
      {/* Link to the detail view of the message */}
            <Link className="messageLink" to={`/message/${this.props.message.mess_id}`} mess_id={this.props.message.mess_id}> 
            <CardActions onClick={this.cardClick} mess_id={this.props.message.mess_id}>
         
            <CardContent>

      {/* Display the headline of the message */}
              <Typography variant="h6" className="headline">
                {this.props.message.headline}
              </Typography>

      {/* Display the date stamp and user for the message */}
              <Typography className="UserDate">
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


  
const mapReduxStoreToProps = (reduxStore) => ({ reduxStore });
export default connect(mapReduxStoreToProps)(MessageItem);