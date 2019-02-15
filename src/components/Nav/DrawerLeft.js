// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// // import InboxIcon from '@material-ui/icons/MoveToInbox';
// // import MailIcon from '@material-ui/icons/Mail';
// import { Link } from 'react-router-dom';
// import './Nav.css';
// // import LogOutButton from '../LogOutButton/LogOutButton';
// import { connect } from 'react-redux';


// const drawerWidth = 240;

// const styles = theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginLeft: 12,
//     marginRight: 20,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
// });

// class PersistentDrawerLeft extends React.Component {
//   state = {
//     open: false,
//   };

//   handleDrawerOpen = () => {
//     this.setState({ open: true });
//   };

//   handleDrawerClose = () => {
//     this.setState({ open: false });
//   };

//   LogOutButton = () => {
//     console.log('LogOut Click');
//     this.props.dispatch({ type: 'LOGOUT' });
//     this.handleDrawerClose();
//   }

//   render() {
//     const { classes, theme } = this.props;
//     const { open } = this.state;

//     return (
//       <div className={classes.root}>
//         <CssBaseline />
//         <AppBar
//           position="fixed"
//           className={classNames(classes.appBar, {
//             [classes.appBarShift]: open,
//           })}
//         >
//           <Toolbar disableGutters={!open}>
//             <IconButton
//               color="inherit"
//               aria-label="Open drawer"
//               onClick={this.handleDrawerOpen}
//               className={classNames(classes.menuButton, open && classes.hide)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" color="inherit" noWrap onClick={this.handleDrawerOpen}>    
//                 Community Garden Menu
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           className={classes.drawer}
//           variant="persistent"
//           anchor="left"
//           open={open}
//           classes={{
//             paper: classes.drawerPaper,
//           }}
//         >
//           <div className={classes.drawerHeader}>
//             <IconButton onClick={this.handleDrawerClose}>
//               {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//             </IconButton>
//           </div>
//           <Divider />
//           <List>
//                   {[<Link className="drawer-link" to="/home" onClick={this.handleDrawerClose}>Home</Link>,
//                   <Link className="drawer-link" to="/AddNew" onClick={this.handleDrawerClose}>Add New Message</Link> ].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ?
                    
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                           <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//                           <path d="M0 0h24v24H0z" fill="none" />
//                       </svg>
//                     : 
//                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> 
//                             <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
//                             <path d="M0 0h24v24H0z" fill="none" />
//                       </svg>}
//                     </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             { [<Link className="drawer-link" to="/about">About</Link>, 'Log out'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{index % 2 === 0 ? 
//                      <Link className="drawer-link" to="/about">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                         <path d="M0 0h24v24H0z" fill="none"/>
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
//                         </svg>
//                         </Link> :  
//                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
//                             <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" /> 
//                         </svg>} :
                       
//                 </ListItemIcon>
               
//                 <ListItemText primary={text} onClick={this.LogOutButton} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//         <main
//           className={classNames(classes.content, {
//             [classes.contentShift]: open,
//           })}
//         >
//           <div className={classes.drawerHeader} />
//         </main>
//       </div>
//     );
//   }
// }

// PersistentDrawerLeft.propTypes = {
//   classes: PropTypes.object.isRequired,
//   theme: PropTypes.object.isRequired,
// };

// export default connect()(withStyles(styles, { withTheme: true })(PersistentDrawerLeft));