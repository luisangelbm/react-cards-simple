import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'


const Card = ({title, imageSource, text, url}) => {
  return (
    <div className="card text-center bg-dark animate__animated animate__wobble">
      <div className="overflow">
      <img src={imageSource} alt="" className="card-img-top" />
      </div>
      
      <div className="card-body text-light">
          <h4 className="card-title">{title}</h4>
          <p className="card-text text-secondary">
            
            {
              text ? text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugit qui voluptas quas ab quaerat adipisci quis sint, totam ullam voluptatum inventore, atque assumenda vitae necessitatibus incidunt obcaecati consequatur aliquid?'
            }
          </p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-outline-secondary rounded-0">
            Go to this website
          </a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string,
}

export default Card