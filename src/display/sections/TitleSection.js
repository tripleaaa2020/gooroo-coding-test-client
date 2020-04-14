import React from 'react'

const TitleSection = props => {

    return (
        <div className="py-4">
            <h3 className="mb-2 Poppins-Semi-Bold greyDefault">{props.title}</h3>
            <h5 className="Poppins-Regular greyMedium" style={{letterSpacing:"-0.85px"}}>{props.subtitle}</h5>
        </div>
    )
}
export default TitleSection