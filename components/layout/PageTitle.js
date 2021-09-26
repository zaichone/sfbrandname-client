function PageTitle({ title, bg, className }) {
  return (
    <section
      className={`page-title ${className}`}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="cover">
        <h1 className="heading">{title}</h1>
      </div>
    </section>
  );
}

export default PageTitle;
