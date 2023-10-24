import React from 'react'

export default function Service({imgService, title, content}) {
  return (
    <li className="service-item">
              <div className="service-icon-box">
                <img
                  src={"./../images/icon-design.svg"}
                  alt="design icon"
                  width="40"
                />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">{title}</h4>

                <p className="service-item-text">
                  {content}
                </p>
              </div>
            </li>
  )
}
