import { Link } from 'react-router-dom';
import GraphCard from '../components/GraphCard';
import '../styles/dashboards-styles.css';

export default function Dashboard() {
  return (
    <div className='dashboard-page'>
      <Link to="/sessionstarted">
            <img
              className='go-back-btn'
              src={process.env.PUBLIC_URL + '/assets/go-back.png'}
              alt="Return btn"
            />
      </Link>

      <div className="main-content">
        <GraphCard title="Graph 1" />
        <GraphCard title="Graph 2" />
        <GraphCard title="Graph 3" />
      </div>
    </div>
  );
}