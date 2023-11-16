import { useParams } from "react-router-dom"

import { getPostById } from "services/posts.service"
import styles from "./Post.module.css"

export default function Post() {
    const { id } = useParams()
    const post = getPostById(id)

    return (
        <div className={styles.postContent}>
            <header>
                <img src="/assets/posts/1/capa.png" alt="Capa do post" />
                <h3 className={styles.title}>{post.titulo}</h3>
            </header>
            <div>{post.texto}</div>
        </div>
    )
}