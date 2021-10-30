import Styles from './style.module.css';

const InputBox = () =>{
    return <input type='text' placeholder='Add new item' className={Styles.todoInputBox}></input>;
}
export default InputBox;