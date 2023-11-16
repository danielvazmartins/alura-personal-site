import { Link } from "react-router-dom"

import styles from "./PostCard.module.css"

export default function PostCard({postId, title}) {
    return (
        <div className={styles.postCard}>
            <div className={styles.capa}>
                <img src="/assets/posts/1/capa.png" alt="" />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <Link className={styles.button} to={`/post/${postId}`}>Ler</Link>
        </div>
    )
}