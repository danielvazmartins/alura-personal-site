import { useLocation } from "react-router-dom";

import PostCard from "components/PostCard/PostCard";
import postsMock from "mock/postsMock"
import styles from "./Home.module.css"

export default function Home() {
    const location = useLocation()
	console.log(location)

    const renderPosts = () => {
        return postsMock.map(post => {
            return <PostCard postId={post.id} title={post.titulo}></PostCard>
        })
    }

    return (
        <>
            <div className={styles.boxPosts}>
                {renderPosts()}
            </div>
        </>
    )
}