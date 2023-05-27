interface Props {

}
export default({text, color}:any) => {
    return(
        <button className={`glitchButton glitchButton-${color}`} >{text}</button>
    )
}