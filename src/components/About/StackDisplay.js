import React from 'react'

const StackDisplay = ({ imgLink, title }) => {
    return (
        <div className="col-md-6 col-sm-6">
            <div className="service-item">
                <img src={imgLink} alt="" />
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default StackDisplay