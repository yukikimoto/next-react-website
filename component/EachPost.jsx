export default function EachPosts(props) {

    return(
        <article>
            <a href={props.url}>
                <h3>{props.title}</h3>
            </a>
        </article>
    )
}