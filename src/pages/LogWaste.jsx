import { Link } from 'react-router-dom';
import '../styles/logwaste-styles.css';

export default function LogWaste() {
  return (
    <div className='logwaste-page'>
      <Link to="/sessionstarted">
        <img
          className='go-back-btn'
          src={process.env.PUBLIC_URL + '/assets/go-back.png'}
          alt="Return btn"
        />
      </Link>

      <div className="lw-main-content">
        <p>Log Placeholder</p>
      </div>
    </div>
  );
}
