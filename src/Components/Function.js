import React, {useState} from "react";
import styles from 'Function.modules.css'


//Função que previne o form.
export default function Enter() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
  }
  function handleKeyPress(event) {
    console.log(event.key);
  }

//Aqui já lista as constantes.
  const [lista, setLista] = useState([""]);
  const [newitem, setNewItem] = useState("");
  console.log(newitem);

//HTML 
  return (
    <div>
      <form className={styles.FormEnter} onSubmit={handleSubmit}>

        {/*Input aonde vc digita o que quer */}
        <input className={styles.EventEnter}
          type="text"
          id="text"
          value={newitem}
          onChange={value => setNewItem(value.target.value)}
          onKeyPress={(event) => handleKeyPress(event)}
        />

        {/*Aqui a função de add item */}
        <button className={styles.EnviadoEnter} onClick={() => addNewItem()}>Add</button>
         
         {/*Aqui já é a de deletar o Item.*/}
           
            {lista.map((item, index) =>(
             <p className={styles.li}>
              {item}
               <button
               className={styles.ButtonOne}
                 onClick={()=> deletarItem(index)}>
                 Delete
              </button>
             </p>
            ))}
  
      </form>
    </div>
  );

//Função de ADD item.
  function addNewItem(){
    setLista([...lista, newitem]);
    setNewItem("");
  };

//Função de deletar item.
  function deletarItem(index){
    const tmpArray =[''];
    tmpArray.splice(index,1);

    setLista(tmpArray);
  };

};