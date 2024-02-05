import "./App.css";
import Form from "./Form";

const App = () => {


  const fields = [
    { inputType: 'text', label: 'Name', key: 'name' },
    { inputType: 'email', label: 'Email', key: 'email' },
    { inputType: 'radio', label: 'Gender', key: 'gender' },
    { inputType: 'select', label: 'Place', key: 'place' },
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
