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
      <div className="logo-container-su">
        <Logo src="/assets/kia-slogan-blanco.png" />
      </div>

      <div id="container-su">
        <div className="inner-container-su">

          <form id="form-container-su" onSubmit={handleSubmit}>
            <FormField className="field-su" label="Username:" id="username" value="" onChange={()=>{}} />
            <FormField className="field-su" label="Email:"    id="email"    value="" onChange={()=>{}} />
            <FormField className="field-su" label="Password:" id="password" type="password" value="" onChange={()=>{}} />
            <FormField className="field-su" label="Confirm Password:" id="confirm" type="password" value="" onChange={()=>{}} />
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
