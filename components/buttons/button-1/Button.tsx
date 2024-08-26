
import styles from "./button.module.css";
const Button1 = ({value}:any) => {
    return(
        <button className={`bg-white w-[152px] h-[56px] rounded-md ${styles.btn}`}>
            {value}
        </button>
    )
}
export default Button1;