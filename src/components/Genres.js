import React from 'react'

const Genres = (props) => {
  let colorVariable
  switch (props.names) {
    case 'Action':
      colorVariable = 'blue'
      break
    case 'Adventure':
      colorVariable = 'green'
      break
    case 'Fantasy':
      colorVariable = 'orange'
      break
    case 'Crime':
      colorVariable = 'purple'
      break
    case 'Thriller':
      colorVariable = 'darkred'
      break
    case 'Science Fiction':
      colorVariable = 'Indigo'
      break
    case 'Horror':
      colorVariable = 'Marron'
      break
    case 'Comedy':
      colorVariable = 'lightgreen'
      break
    case 'Drama':
      colorVariable = 'OrangeRed'
      break
    case 'Family':
      colorVariable = 'Navy'
      break
    case 'Music':
      colorVariable = 'SandyBrown'
      break
    case 'Animation':
      colorVariable = 'Teal'
      break
    case 'Mystery':
      colorVariable = 'YellowGreen'
      break
    default:
      colorVariable = 'tan'
  }

  return (
    <div className="genres">
      <p style={{ backgroundColor: colorVariable }}>{props.names}</p>
    </div>
  )
}

export default Genres
