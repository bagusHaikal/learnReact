import styles from './button.module.css'


function Button() {
      //inline styling
    // const styles = {
    //     backgroundColor: 'hsl(252, 96%, 67%)',
    //     color: 'rgb(204, 204, 204)',
    //     borderRadius: '5px',
    //     padding: '10px 20px',
    //     border: 'none',
    //     cursor: 'pointer',
    // }
    return(
        <button className={styles.btn}>
            Click Me
        </button>   
    );
}

export default Button