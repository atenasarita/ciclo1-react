export default function VideoBackground({ src, children }) {
    return (
      <div className="video-background">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={src} type="video/mp4" />
        </video>
        <div className="overlay" />
        <div className="content">{children}</div>
      </div>
    );
  }
  