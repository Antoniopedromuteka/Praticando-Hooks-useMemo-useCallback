
import React from "react";


function operacaoLenta(){
  let c;

  for(let i=0; i<100000000;i++){
    c = i + i /10
  }

  return c;
}

function App() {

  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(()=>{

    setContar((contar)=>contar+1);

  },[]);
  /*const valor = React.useMemo(()=>{

    const localItem = localStorage.getItem('produto');
    console.log("Aconteceu o memo");

    return localItem;

  }, []); */
  /*
  const t1 = performance.now();
  const valor = React.useMemo(()=> operacaoLenta(), []);

  console.log(performance.now() - t1);

  console.log(valor);
  */

  return (

    <div>
        <button onClick={handleClick}>{contar}</button>
    </div>
    
  );
}

export default App;
