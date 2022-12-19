import React, {useState} from "react";


//Função que previne o form.
export default function Enter() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");
  };
  function handleKeyPress(event) {
    console.log(event.key);
  };

//Aqui já lista as constantes.
  const [lista, setLista] = useState([""]);
  const [newitem, setNewItem] = useState("");
  console.log(newitem);

//HTML 
  return (

    <div>

      {/*Barra de pesquisa */}
      <form style={{
        backgroundColor:"white",
      }} onSubmit={handleSubmit}>

        {/*Input aonde vc digita o que quer */}
        <input 
        style={{
          display:"flex",
          flexDirection:"row",
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          borderRadius: "4px",
          fontFamily: "monospace"
        }}
          type="text"
          id="text"
          value={newitem}
          onChange={value => setNewItem(value.target.value)}
          onKeyPress={(event) => handleKeyPress(event)}
        />

        {/*Aqui a função de add item */}
        <button
         style={{
          display:"flex",
          backgroundColor: "white",
          border: "2px solid black",
          marginTop: "30px",
          borderRadius: "4px",
          color:"black"
        }} 
         onClick=
         {() => addNewItem()}
        >
          Add
        </button>
         
         {/*Aqui já é a de deletar o Item.*/}
           
            {lista.map((item, index) =>(
             <p 
              style={{
               backgroundColor: "white",
               marginTop: "20px",
               fontSize:"16px",
               color:"black",
               fontFamily:"sans-serif"
             }}>
              {item}
               <button
               style={{
                backgroundColor: "white",
                marginTop: "10px",
                border: "2px solid black",
                borderRadius: "4px"
               }}
                 onClick=
                 {()=> deletarItem(index)}>
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