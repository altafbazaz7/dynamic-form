import "./App.css";
import Form from "./components/Form";

const App = () => {
  const fields = [
    { inputType: 'text', label: 'Name', key: 'name' },
    { inputType: 'email', label: 'Email', key: 'email' },
    { inputType: 'radio', label: 'Gender', key: 'gender', options: ['Male', 'Female'] },
    { inputType: 'radio', label: 'Gender', key: 'playlist', options: ['no', 'yes'] },

    { inputType: 'select', label: 'Place', key: 'place', options: ['Option 1', 'Option 2', 'Option 3'] },
    
    { inputType: 'checkbox', label: 'Consent', key: 'consent' },
  ];

  return (
    <>
      <Form
        fields={fields}
        onSubmit={() => {}}
      />
    </>
  );
};

export default App;
