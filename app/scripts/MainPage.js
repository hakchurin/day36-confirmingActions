import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import $ from 'jquery';
import Modal from './Modal';



const MainPage = React.createClass({
    getInitialState: function() {
        return {
            showModal: false,
            read: false,
            markAsRead: false,
        }
    },

    markAsRead: function(e) {
        this.setState({markAsRead: true, showModal:true});


        console.log('hi');
    },
    confirm: function(e){
      e.preventDefault();
      this.setState({markAsRead:true, showModal:false, read:true});


      console.log('bye');
    },
    hideModal: function() {

        this.setState({showModal: false, markAsRead:false});
    },



    render: function() {
      let read;
      let modal;
      // let checked = false;
      if (this.state.showModal){
        modal = <Modal confirm={this.confirm} cancel={this.hideModal}/>
      }
      if (this.state.markAsRead){
        read = <p> Read </p>;

      } else {
        read = <p> Mark As Read </p>
      }


        return (
           <div id="box">

           <p id= "placeText">   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper est eget blandit tristique. Praesent quis convallis eros. Nam ultricies, dui id rutrum commodo, metus lectus vestibulum dui, sed tempor sapien nisl quis eros. Morbi egestas lectus et posuere accumsan. Suspendisse pellentesque est quis orci consectetur, quis ultricies turpis posuere. Sed vehicula erat viverra nibh elementum volutpat. Vestibulum ac dapibus risus. Praesent quis luctus orci, quis ornare lacus. Praesent eget augue id dolor pharetra condimentum. Morbi hendrerit ex vitae est interdum dignissim. Cras laoreet tortor eget malesuada dignissim. Nullam gravida odio velit, in tincidunt diam condimentum id. Nullam bibendum pellentesque mollis. Phasellus vehicula non elit ut consequat. Suspendisse ac lobortis nisl.

   Nulla id tempus purus. Nunc id tellus odio. Pellentesque at nisl volutpat, fringilla ex ut, consectetur dui. Fusce mattis interdum tortor, vitae finibus dolor imperdiet vitae. Vivamus a risus malesuada, ultrices erat porta, facilisis massa. Nunc sit amet fermentum massa. Nullam feugiat dui vestibulum quam eleifend pretium. Maecenas a ullamcorper mauris. Curabitur eu massa posuere, mattis mi a, blandit ante. In tincidunt risus in arcu maximus, et dictum orci mollis. Proin pulvinar leo elementum, maximus tortor quis, lacinia est. Aliquam convallis augue sit amet leo interdum, in consectetur turpis aliquet. Vivamus aliquet rutrum elit, eu mollis turpis congue tincidunt. Integer nec enim at quam eleifend ultricies. Vivamus et suscipit est, eu fringilla arcu. Nullam pellentesque feugiat ipsum elementum ultricies.

   Maecenas a justo mi. Praesent laoreet tincidunt urna vel consequat. Morbi pellentesque velit et vulputate placerat. Donec suscipit mi quis consectetur pellentesque. Vestibulum in ligula eu diam aliquet sodales. Donec viverra lacus rhoncus tortor posuere, vitae fringilla est finibus. Cras nibh dui, venenatis eu urna ut, sollicitudin bibendum dui. Cras id magna nec nulla porttitor viverra. Vestibulum tempor dolor vitae dapibus posuere. Donec pretium massa ante, vitae iaculis leo eleifend vitae. Nullam sollicitudin massa eget nunc viverra auctor. Duis non molestie ante, id consequat dolor. Aliquam et diam et nisi mollis scelerisque ac sed diam. Praesent mattis augue ut mi consequat, sodales maximus mauris lacinia. Sed pharetra libero a orci imperdiet, sit amet tincidunt lorem elementum. </p>
            <p id="read"> {read} </p>
            <input type="checkbox" onChange={this.markAsRead}  checked={this.state.markAsRead} disabled={this.state.markAsRead}
 id="markAsRead" name="markAsRead"/>
            {modal}
          </div>
    )
  }
});

export default MainPage;

// if (this.state.markAsRead && this.state.confirm)
// disabled=true;
// // checked= true;
// } else
//   disabled=false;
// }
//
