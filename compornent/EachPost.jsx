export default function EachPosts(props) {

    retuen(
        <article>
            <a href={props.url}>
                <h3>{props.title}</h3>
            </a>
        </article>
    )
}