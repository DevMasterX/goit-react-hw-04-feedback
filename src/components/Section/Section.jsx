import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.sectionwrapper}>
      <section className={css.section}>
        <h2 className={css.title}>{title}</h2>
        {children}
      </section>
    </div>
  );
};

export default Section;
