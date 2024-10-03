

import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/form/form.css'

    const Form: React.FC = () => {
        const [userData, setUserData] = useState({username: '', password: '', email: ''})
        const navigate = useNavigate()

        const userChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value } = e.target;
            setUserData({...userData, [name]:value })
        }

        const userSubmitData = async (e: React.FormEvent) => {
               try {
                e.preventDefault()
                const response = await fetch('http://localhost:3007/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData),  
                })
                    if(response.ok) {
                        navigate('/submit')
                    }
                     }catch(error) {
                        console.error('error has occurred', error)
               }
                
        }

            return (
                <>

                    <div className={'form-container'}>

                    <h3>User Registration</h3>
                    <form onSubmit={userSubmitData} className={'user-form'}>
                        <label htmlFor="username">Username:</label>
                        <input onChange={userChange} value={userData.username} type="text" name="username" placeholder="username" required></input>
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input onChange={userChange} value={userData.password} type="password" name="password" placeholder="password" required></input>
                            <br />
                            <label htmlFor="email">Email</label>
                            <input onChange={userChange} value={userData.email} type="email" name="email" placeholder="email" required></input>
                            <br />
                            <button type="submit">Submit</button>

                    </form>
                







                    </div>
                
                
                </>
            )
    }


    export default Form