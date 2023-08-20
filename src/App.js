import './App.css';
import React from 'react';
import Form from './components/form';
import { useState } from 'react';

function App() {
  const [members, setMembers] = useState([])
  const [values, setValues] = useState({ name:'', email:'', role:''})

  const onSubmit = () => {
    setMembers([values, ...members])
    setValues({ name:'', email:'', role:''})
  }

  const onChange = (name, value) => {
    setValues({...values, [name]: value})
  }
  return (
    <div className="App">
     <h1> Team Builder App </h1>
     <Form values={values} change={onChange} submit={onSubmit}/>
     {members.map((member, idx) => {
      return (
        <div key={idx}>
          {member.email}, {member.name}, {member.role}
          </div>
      )
     })}
    </div>
  );
}

export default App;