import React, {useState} from "react";
import styles from "./Contador.module.css"
function Contador(){

  const [count, setCount] = useState(0);

  return (
    <div className={styles.cont}>
      <h1>El contador está en: {count}</h1>
      <div className={styles.butCont} >
      <button  type="button" class="btn btn-primary"  onClick={()=>setCount(count+1)}>Sumar 1</button>
      <button  type="button" class="btn btn-primary"  onClick={()=>setCount(count-1)}>Restar 1</button>
      </div>
    </div>

  )

}

export default Contador;