import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import AddFriend from './addFriend';

class Friends extends React.Component{
   state={
       friends:[]
   };
   componentDidMount(){
       this.getData();
   }

    getData = () =>{
        const token = localStorage.getItem('token')
        axios.get('http://localhost:5000/api/friends',{
            headers:{
                Authorization: token
            }
        })
        .then(res =>{
            this.setState({...this.state,
                friends:res.data
            })

        })
        .catch(err =>{
            console.log(err)
        })
   }

    render(){
        return(
            <div>
                {
                    this.state.friends.map((friend,id)=>{
                        return(
                            <div>
                            <h2>{friend.name}</h2>
                            <p>age:{friend.age}</p>    
                            </div>
                        )
                    })
                }
                <div>
                    <Link to='/api/add_friend'> Add Friend</Link>
                    
                </div>
            </div>
        );
    }
}
export default Friends;