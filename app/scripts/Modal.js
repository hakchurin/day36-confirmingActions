import React from 'React';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory, Link} from 'react-router';
import $ from 'jquery';
import MainPage from './MainPage';


const Modal = React.createClass({
  getInitialState: function(){
    return {
        confirm:false,
        cancel:false,
    }
  },


  cancel:function(){
    this.hideModal();

  },


  render:function(){



    return (
      <div id="modal">
      <h1> Are you sure you read this? </h1>
  <input type="button" onClick={this.props.confirm} onChange={this.state.read} value="confirm"/>
  <input type="button" onClick={this.props.cancel} value="cancel"/>

      </div>

    )
  }
});

export default Modal;
