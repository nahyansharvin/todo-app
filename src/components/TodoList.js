import Styles from './style.module.css'

const List = (props) =>{
    return(
        <>
        <div className={Styles.todoList}>
            <div className={Styles.listDes}><p>Hi</p></div>
            <button className={Styles.deleteButton}><i class="fas fa-trash"></i></button>
        </div>
        </>
    )
}
export default List;