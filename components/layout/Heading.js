import React from 'react'

function Heading({bg, title}) {
    return (
        <section className="custom-heading" style={{ backgroundImage: `url(${bg.src})` }}>
            
            <h1 className="heading">{title}</h1>
         
            
        </section>
    )
}

export default Heading
