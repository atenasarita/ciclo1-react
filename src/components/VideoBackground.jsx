// src/components/VideoBackground.jsx
export default function VideoBackground({ src, children }) {
  return (
    <div id="show_bg">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={src} type="video/mp4" />
      </video>
      <div className="overlay" />
      {children}
    </div>
  );
}
