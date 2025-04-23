import { useState } from 'react';
import Navbar    from '../components/Navbar';
import FormField from '../components/FormField';
import Button    from '../components/Button';
import '../styles/account-styles.css';

export default function Account() {
  const [editable, setEditable] = useState(false);
  const [form, setForm] = useState({
    name:     'Jane',
    lastname: 'Doe',
    username: 'N00727400',
    password: '********'
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setForm(f => ({ ...f, [id]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setEditable(false);
  };

  return (
    <>
      <Navbar links={[{ label: '', to: '/dashboard' }]} />
      <div className="account-container">
        <h1>Your Account</h1>
        <form className="account-form" onSubmit={handleSubmit}>
          {['name','lastname','username','password'].map(field => (
            <FormField key={field}
              label={field.charAt(0).toUpperCase()+field.slice(1)}
              id={field}
              type={field==='password'?'password':'text'}
              value={form[field]}
              onChange={handleChange}
              disabled={!editable}
            />
          ))}
          {editable && <Button type="submit">Save Changes</Button>}
        </form>
        {!editable && <Button onClick={()=>setEditable(true)}>Edit Info</Button>}
      </div>
    </>
  );
}

