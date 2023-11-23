import Button from "components/Button/Button";
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <>
            <div className={styles.notFoundContent}>
                <h3 className={styles.statusCode}>404</h3>
                <h1 className={styles.statusMessage}>Ops! Página não encontrada.</h1>
                <p>Tem certeza de que era isso que você estava procurando?</p>
                <p>Aguarde uns instantes e recarregue a página, ou volte para a página inicial.</p>
                <Button toUrl={-1}>Voltar</Button>
                <img className={styles.img404} src="/assets/erro_404.png" alt="Imagem 404" />
            </div>
        </>
    )
}