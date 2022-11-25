/* eslint-disable no-unused-vars */
import React from 'react'
const Preloader = () => {
  const preloader = <div className="center-align">
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle" />
                </div>
                <div className="gap-patch">
                    <div className="circle" />
                </div>
                <div className="circle-clipper right">
                    <div className="circle" />
                </div>
            </div>
        </div>
    </div>
  return (
    preloader
  )
}
export default Preloader
