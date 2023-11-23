import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

export default function Button(props) {
    const navigate = useNavigate();

    const goTo = () => {
        console.log({props})
        navigate(props.toUrl)
    }

    return (
        <button className={styles.button} onClick={goTo}>{props.children}</button>
    )
}