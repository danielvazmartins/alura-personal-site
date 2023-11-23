import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img src="/assets/marca_registrada.svg" alt="Marca Registrada" />
            <span>Developed by Daniel Vaz Villalobos Martins</span>
        </div>
    )
}