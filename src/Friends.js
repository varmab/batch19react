import React, {Component} from 'react'

class Friends extends Component{
    constructor(){
        super();

        this.state={
            friends:["Ram","Robert","Rahim"]
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>Friends</h1>
                <ul>
                    {
                        this.state.friends.map(function(friend,index){
                            return <li key={index}>{friend}</li>
                        })
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default Friends;