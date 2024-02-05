import React from 'react';
import Form from './components/Form';
import "./App.css";

const App = () => {
  const fields = [
    { inputType: 'text', label: 'Name', key: 'name' },
    { inputType: 'email', label: 'Email', key: 'email' },
    { inputType: 'radio', label: 'Gender', key: 'gender', options: ['Male', 'Female'] },
    { inputType: 'select', label: 'Place', key: 'place', options: ['Option 1', 'Option 2', 'Option 3'] },
    { inputType: 'checkbox', label: 'Consent', key: 'consent' },
  ];

  return (
    <div>
      <Form fields={fields} onSubmit={() => {}} />
    </div>
  );
};

export default App;
