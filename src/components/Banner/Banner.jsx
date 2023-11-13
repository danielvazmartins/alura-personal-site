import styles from "./Banner.module.css"

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h1>Daniel Vaz Villalobos Martins</h1>
                <p>Desenvolvedor FullStack, gosto bastante da área, por estar sempre aprendendo coisas novas e praticando, é uma área que não enjoa.</p>
                <p>Além de trabalhar e estudar eu gosto praticar musculação, fazer dieta e estudar sobre treino e alimentação também. E pratico atividades mais de aventura nos finais de semana, como trilhas em cachoeira, montanhas, rapel, etc.</p>
            </div>
            <img className={styles.foto} src="/assets/daniel-finanzero-full.jpg" alt="Daniel" />
        </section>
    )
}