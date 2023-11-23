import styles from "./PostCard.module.css"
import Button from "components/Button/Button"

export default function PostCard({postId, title}) {
    return (
        <div className={styles.postCard}>
            <div className={styles.capa}>
                <img src={`/assets/posts/${postId}/capa.png`} alt={title} />
            </div>
            <h3 className={styles.title}>{title}</h3>
            <Button toUrl={`/post/${postId}`}>Ler</Button>
        </div>
    )
}