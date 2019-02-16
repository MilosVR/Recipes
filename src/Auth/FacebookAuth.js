import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router-dom'

class FacebookAuth extends Component {

    state = {
        username:'',
        isSignedIn:false
    }

    componentClicked = () => {
       
    }

    responseFacebook = response => {  
        this.setState({
            isSignedIn:response.status !== "unknown" ? true : null,
            username:response.name
        }) 
         this.props.history.push('/')         
    }

    render() {
        let FBcontent;
        if (this.state.isSignedIn) {
           
        } else {
            FBcontent = (
                <FacebookLogin 
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                appId="1162583910576158"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}/> 
            )
        }
    return (
      <div>
        {FBcontent}
      </div>
    )
  }
}

export default withRouter(FacebookAuth)