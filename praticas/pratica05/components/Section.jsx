import "./Section.css"

function Section(props) {
    return (
        <section>
            <h2>{props.texto}</h2>
            {props.children}
        </section>
    );
}

export default Section;