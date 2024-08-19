import React from 'react'
import './Loader.css'
import Lottie from 'lottie-react';

function Loader() {
  return (
   <>
 <div className="loading-screen" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', background: 'black' }}>
      <div style={{ width: '300px',  }}>
        <Lottie
          path="https://lottie.host/73cae04f-28eb-4ebb-a3cf-f94cb8946328/9ivepBoXT6.json"
          background="#dd127b"
          speed={1}
          loop
          autoplay
          direction={1}
          mode="normal"
        />
      </div>
    </div>

  </>
  )
}

export default Loader