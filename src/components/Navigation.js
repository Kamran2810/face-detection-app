import React from 'react'

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button
        className="f4 grow link dim ma4 ba br3 bw1 ph3 pv2 mb2 dib black shadow-5"
        style={{ opacity: "100%" }}
        onClick={() => onRouteChange('signout')}
      >
        Sign Out
      </button>
    </div>
  );
} else {
      return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button
        className="f4 grow link dim ma4 ba br3 bw1 ph3 pv2 mb2 dib black shadow-5"
        style={{ opacity: "100%" }}
        onClick={() => onRouteChange('signin')}
      >
        Sign In
      </button>
      <button
        className="f4 grow link dim ma4 ba br3 bw1 ph3 pv2 mb2 dib black shadow-5"
        style={{ opacity: "100%" }}
        onClick={() => onRouteChange('register')}
      >
        Register
      </button>
    </div>
      )
}  
}  

export default Navigation