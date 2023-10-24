import React from 'react'

export default function ExperItem({title, timeBegin, timeEnd, description}) {
  return (
    <>
      <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
               {title}
              </h4>

              <span>{timeBegin} — {timeEnd}</span>

              <p className="timeline-text">
                {description}
              </p>

      </li>
    </>
  )
}
