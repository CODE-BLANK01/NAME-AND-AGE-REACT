import React , {useState}from "react";

import Card from '../UI/Card'
import Button from '../UI/Button'
import Wrapper from '../Wrapper/Wrapper'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css';


const AddUser = props => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError]=useState();

    const usernameChangeHandler =(events)=>{
        setEnteredUsername(events.target.value)
    }
    const ageChangeHandler =(events)=>{
        setEnteredAge(events.target.value);
    }


    const AddUserHandler=(events)=>{
        events.preventDefault();
        if(enteredUsername.trim().length===0||enteredAge.trim().length===0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid input (No empty inputs)'
            })
            return;
        }
        if(+enteredAge<1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0)'
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }


    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={AddUserHandler}>
                    <label htmlFor="username">User Name</label>
                    <input id='username' value={enteredUsername} type="text" onChange={usernameChangeHandler}/>
                    <label htmlFor="age">age(years)</label>
                    <input id="age" value={enteredAge} type="number"onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
        
        
    );
}

export default AddUser;