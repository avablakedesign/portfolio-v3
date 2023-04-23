import * as styles from "@/styles/glitch.module.css"
export default (props:any) => {
    return (
        <div className={styles.glitch}>
            <span className={styles.glitchText} data-text={props.text} data-bg={props.bg}>{props.children}</span>
        </div>
    )
}