import { Link } from 'react-router-dom';
import Logo      from '../components/Logo';
import FormField from '../components/FormField';
import Button    from '../components/Button';
import '../styles/signup-style.css';

export default function Signup() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='signup-page'>
      <div className="logo-container">
        <Logo src="/assets/kia-slogan-blanco.png" />
      </div>
      <div id="container">
        <div className="inner-container">
          <form id="form-container" onSubmit={handleSubmit}>
            <FormField label="Username:" id="username" value="" onChange={()=>{}} />
            <FormField label="Email:"    id="email"    value="" onChange={()=>{}} />
            <FormField label="Password:" id="password" type="password" value="" onChange={()=>{}} />
            <FormField label="Confirm Password:" id="confirm" type="password" value="" onChange={()=>{}} />
            <Button type="submit">Sign Up</Button>
          </form>
          <div className="right-info-container">
            <p>Already have an account?</p>
            <Link to="/login">Log In Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
