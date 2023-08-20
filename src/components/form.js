import React from "react";

const Form = (props) => {

    const handleChange = evt => {
        const {name, value} = evt.target
        
        props.change(name, value)
    } 

    const handleSubmit = evt => {
        evt.preventDefault()
        props.submit()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
            <input
            placeholder='Name'
            value={props.values.name}
            name='name'
            onChange={handleChange}
            />
            </label>
            <label>Email
            <input
            placeholder='Email'
            value={props.values.email}
            name='email'
            onChange={handleChange}
            />
            </label>
            <label>Role
            <input
            placeholder='Role'
            value={props.values.role}
            name='role'
            onChange={handleChange}
            />
            </label>
            <input type='submit' value='create team'/>
        </form>
    )
}

export default Form