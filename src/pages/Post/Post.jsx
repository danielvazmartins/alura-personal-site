import { useParams } from "react-router-dom"

import { getPostById } from "services/posts.service"
import styles from "./Post.module.css"
import Markdown from "react-markdown"

export default function Post() {
    const { id } = useParams()
    const post = getPostById(id)
    
    if (!post) {
        return (
            <h1>Post não encontrado!</h1>
        )
    }

    return (
        <div className={styles.postContent}>
            <header>
                <img src={`/assets/posts/${id}/capa.png`} alt="Capa do post" />
                <h3 className={styles.title}>{post.titulo}</h3>
            </header>
            <Markdown className={styles.markdown}>{post.texto}</Markdown>
        </div>
    )
}