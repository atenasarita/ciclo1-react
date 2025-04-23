import Navbar    from '../components/Navbar';
import GraphCard from '../components/GraphCard';
import '../styles/dashboards-styles.css';

export default function Dashboards() {
  return (
    <div className='dashboards-page'>
      <Navbar links={[{ label: '', to: '/dashboard' }]} />
      <div className="main-content">
        <GraphCard title="Graph 1" />
        <GraphCard title="Graph 2" />
        <GraphCard title="Graph 3" />
      </div>
    </div>
  );
}
