import React from 'react'
import HogCardWrapper from '../styledComponents/HogCardWrapper'

const Hog = (props) => {
    const { name, specialty, greased, weight, medal } = props.hog
    const img_file_name = props.hog.name.toLowerCase().split(' ').join('_')
    return (
        <HogCardWrapper>
        <div>
        <div className="ui card">
          <div className="image">
            <img src={require(`../hog-imgs/${img_file_name}.jpg`)} alt={name}/>
          </div>
          <div className="content">
            <a className="header">{name}</a>
            <div className="meta">
              <h4>{specialty}</h4>
                    {greased ? <h4>Greased</h4> : <h4> Not greased</h4> }
                    <h4>{greased}</h4>
                    <h4>Weight: {weight}</h4>
                    <h4>{medal} Medal</h4>
            </div>
          </div>
        </div>

        </div>
        </HogCardWrapper>
    )
}

export default Hog


