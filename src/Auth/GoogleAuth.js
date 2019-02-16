import React, { Component } from 'react'
import { connect } from 'react-redux'
import { googleSignIn, googleSignOut } from '../actions/action'


class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2', ()=> {
            window.gapi.client.init({
                clientId : '605341701315-rh55vao1edi8diki3m6403u990oodkq3.apps.googleusercontent.com',
                scope : 'email'
            }).then(()=> {
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
           this.props.googleSignIn(this.auth.currentUser.Ab.w3.ig) 
        } else {
            this.props.googleSignOut(this.auth.signOut())
        }
    }
    onSignIn = () => {
        this.auth.signIn()
    }
    onSignOut = () => {
        this.auth.signOut()
    }

    GoogleButton = () => {
        if (this.props.isGoogleSignIn === null) {
            return null
        }
        else if (this.props.isGoogleSignIn) {
            return <button onClick={this.onSignOut} 
            style={{color:"MidnightBlue",background:'silver', borderRadius:'3px',width: '150px',
            padding: '10px', border:'none', fontWeight:'bold' }}>Sign Out</button>
        } 
        else {
            return (<button onClick={this.onSignIn} 
            style={{color:"silver",background:'MidnightBlue', borderRadius:'3px',width: '150px',
            padding: '10px', border:'none', fontWeight:'bold' }}>Sign with Google</button>)
        }
    }

  render() {
 
    return (
      <div>
        {this.GoogleButton()}
      </div>
    )
  }
}

const actions = {
    googleSignIn, 
    googleSignOut
}

const mapStateToProps = state => {
    return {
        isGoogleSignIn: state.googleAuth.isGoogleSignIn,
        userGoogle: state.googleAuth.userGoogle,
    }
}

export default connect(mapStateToProps, actions)(GoogleAuth)