import React, {Component} from 'react';
import firebase from 'firebase'
import config from './config'
// import { Button } from 'react-bootstrap';
import { motion } from "framer-motion"
import Message from './Message'
import MessageForm from './MessageForm'
import loadingImg from './imgs/iphone-spinner-2.gif'
import './transition.css'

export default class Guestbook extends Component {

    aniDuration = 0.2

    constructor(props) {
        super(props)
        
        console.log('initstate')
        this.state = { messages: [], loading:true, first:true }

        console.log(firebase)
        if (!firebase.apps.length) {
            firebase.initializeApp(config)
            console.log('firebase init')
            console.log(this)
        } 

    }
    
    componentDidMount() {
        console.log(this)
        let ref = firebase.database().ref('guestbook')
        ref.on('value', this.firebaseToState)
    }


    submit = function(message, callback) {
        this.setState({ loading: true, first:false })
        firebase.database().ref('guestbook').push().set(message, callback)
    }.bind(this)
  

    firebaseToState = function(snapshot) {
        var messages = Object.values(snapshot.val())
        messages = messages.reverse()
        this.setState({ messages: messages, loading: false })
        console.log('setstate')
    }.bind(this)

    
    render = function(){

        var messageDivs = []
        if(this.state.loading) {
            messageDivs = (
                <div className="w-100 p-5 d-flex flex-column align-items-center">
                    <img src={loadingImg} alt="loading"></img>
                </div>
            )
        } else {
            if(this.state.messages) {
                console.log(this.state.messages)
                for(var index in this.state.messages) {
                    var msg = this.state.messages[index]
                    if(msg.public) {
                        messageDivs.push(
                        <motion.div animate={{y:[-75,0], scaleY:[0,1]}} transition={{delay:this.aniDuration*index, duration:this.aniDuration}} key={index}>
                            <Message data={msg} highlight={index==0 && !this.state.first}/>
                        </motion.div>
                        )
                    }
                }
            } else {
                messageDivs = <p> no message </p>
            }
        }

        return (
        <div className="container-fluid p-0">
            <div class="row justify-content-around">
                <div className="col-4">
                    <h4>Leave a message here ↓</h4>
                    <MessageForm onSubmit={this.submit}/>
                </div>
                
                <div className="col-6">
                    { messageDivs }
                </div>
            </div>
        </div>
        )

    }
}