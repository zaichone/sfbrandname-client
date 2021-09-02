import React from 'react'

function Cta({title, bg}) {
    //console.log("🚀 ~ file: Cta.js ~ line 4 ~ Cta ~ bg", bg)
    return (
        <section className="cta" style={{ backgroundImage: `url(${bg.src})` }}>
            <div className="cover">
            <h1 className="heading">{title}</h1>
            </div>
            
        </section>
    )
}

export default Cta
