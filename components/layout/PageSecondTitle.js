function PageSecondTitle({title, bg}) {
    return (
        <section className="page-second-title" style={{ backgroundImage: `url(${bg.src})` }}>
            
            <h2 className="heading-second">{title}</h2>
            
            
        </section>
    )
}

export default PageSecondTitle
