import React from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import "./MobileDownload.css"
export default function MobileDownload() {
  return (
    <>
      <div className="app-download" id='app-download' >
        <p>
          Download our mobile app now for a seamless experience and easy ordering. <br /> Tomato app
        </p>
        <div className="app-download-platForms">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </>
  )
}
