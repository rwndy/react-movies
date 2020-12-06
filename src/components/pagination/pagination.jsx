import React from 'react'

const pagination = ({currentPages, prevPages, nextPages}) => {
  return (
    <section className="section-wrapper">
      <div className="pagination">
          <button className="pagination--prev-btn" onClick={prevPages}>Prev</button>
          <p className="pagination--pages">{currentPages}</p>
          <button className="pagination--next-btn" onClick={nextPages}>Next</button>
      </div>
    </section>
  )
}

export default pagination