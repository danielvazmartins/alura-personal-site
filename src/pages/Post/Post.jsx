import { Route, Routes, useParams } from "react-router-dom"

import { getPostById } from "services/posts.service"
import styles from "./Post.module.css"
import Markdown from "react-markdown"
import NotFound from "pages/NotFound/NotFound"
import LayoutDefault from "pages/LayoutDefault/LayoutDefault"

export function PagePost({id, post}) {
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

export default function Post() {
    const { id } = useParams()
    const post = getPostById(id)
    
    if (!post) {
        return (
            <NotFound></NotFound>
        )
    }

    return (
        <Routes>
            <Route path="*" element={<LayoutDefault></LayoutDefault>}>
                <Route index element={<PagePost id={id} post={post}></PagePost>}></Route>
            </Route>
        </Routes>
    )
}