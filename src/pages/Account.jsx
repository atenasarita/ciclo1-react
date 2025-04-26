import { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className='account-page'>

      <Link to="/sessionstarted">
            <img
              className='go-back-btn'
              src={process.env.PUBLIC_URL + '/assets/go-back.png'}
              alt="Return btn"
            />
      </Link>
      
      
      <div className="account-container">
        <h1>Your Account</h1>
        <form
            className={`account-form ${editable ? 'editable' : ''}`}
            onSubmit={handleSubmit}
          >
            {['name','lastname','username','password'].map(field => (
              <FormField
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                id={field}
                type={field === 'password' ? 'password' : 'text'}
                value={form[field]}
                onChange={handleChange}
                disabled={!editable}
              />
            ))}
            {editable && <Button className="btn" type="submit">Save Changes</Button>}
          </form>
          {!editable && <Button className="btn" onClick={() => setEditable(true)}>Edit Info</Button>}

          <Link to="/">
            <button id="logout-btn">Log Out</button>
          </Link>
          
      </div>
    </div>
  );
}