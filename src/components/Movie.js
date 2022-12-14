import React from 'react'

const Movie = (props) => {
  return (
    <div className="container">
      <div>
        <img src={props.picture} alt="poster" />
      </div>
      <div className="text">
        <h3>Tite: {props.name}</h3>
        <h3>Date: {props.date}</h3>
        <button>
          <details>
            <summary>Summary</summary>
            <p>{props.detail}</p>
          </details>
        </button>
      </div>
    </div>
  )
}

export default Movie
