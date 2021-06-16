import React,{useState} from 'react';
import axios from 'axios';

const initialValue ={ credentials: {
    username: 'Lambda',
    password: 'School'
    },
    isLoading:true
}


const Login = (props) =>{
    const [user,setUser] = useState(initialValue);

    const handleChange = (e) =>{
        console.log(e.target.value)
        setUser({
            credentials:{
            ...user.credentials,[e.target.name]: e.target.value
        }})
        console.log(user)
    }
    const handleSubmit =  (e) =>{
        e.preventDefault();
        user.isLoading = true;
        console.log(user)
        axios.post('http://localhost:5000/api/login', user.credentials)
      .then(res => {
        user.isLoading = false;
        localStorage.setItem("token", res.data.payload);
        props.history.push('api/friends');
      })
      .catch(err => {
        console.log(err);
      })
    }



    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input 
                        type='text'
                        name='username'
                        value={user.credentials.username}
                        onChange={handleChange}/>
                </label>
                <label>Password:
                    <input
                    name="password"
                    type="password"
                    value={user.credentials.password}
                    onChange={handleChange}/>
                    </label>
                    <button>Log In</button>
                </form>
                {
                    user.isLoading && <div>Loading... </div>
                }
        </div>
    )
}
export default Login;