import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';
import '../styles/session-started-styles.css';

export default function SessionStarted() {
  return (
    <div className="sessionstarted-page">
      <Navbar links={[
        { label: 'Dashboards', to: '/dashboard' },
        { label: 'Log Waste',  to: '/dashboard'   },
        { label: 'Account',    to: '/account'     },
        { label: 'Admin',      to: '/admin'       },
      ] }/>

      <VideoBackground src={process.env.PUBLIC_URL + '/assets/kiak4-unveil-video.mp4'}>
        <div className="content">
          <div className="logo-container-ss">
            <img
              src={process.env.PUBLIC_URL + '/assets/kia-slogan-blanco.png'}
              alt="KIA Logo"
            />
          </div>

          <div className="subheader">Waste Management</div>
          <div className="greeting">Hello, you are logged in!</div>

        </div>
      </VideoBackground>
    </div>
  );
}
