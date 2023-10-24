import React from 'react'

export default function TestimonialItem({tetsImg, name, content, openModal}) {
  return (
    
        <li className="testimonials-item">
              <div className="content-card" data-testimonials-item onClick={()=> openModal()} >
                <figure className="testimonials-avatar-box">
                  <img
                    src={tetsImg}
                    alt={name}
                    width="60"
                    data-testimonials-avatar
                  />
                </figure>
                
                <h4
                  className="h4 testimonials-item-title"
                  data-testimonials-title>
                  {name}
                </h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p>
                  {content}
                  </p>
                </div>
              </div>
        
        </li>
  )
}
