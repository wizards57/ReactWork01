import React,{useState, Fragment} from 'react';



function Fer() {
  return (
    <div>
      <h1>HomeWork 1 </h1>
    </div>
  );
}
/* export default Fer; */

function Bod() {
  let inicio=1;
  const [numeroArray, setnumeroArray]= useState([inicio]);
  const [numero, setNumero]= useState(inicio);

  function aumentar(){
     
     setNumero(numero+1);
     setnumeroArray([...numeroArray,inicio + numero]);
  }

  function eliminar(){
     //const eliminadoArr=[];
    setNumero(numero-1);
    //eliminadoArr=numeroArray.splice(-1,1);
    numeroArray.pop();
    setnumeroArray(numeroArray);
 }

  return (
    <Fragment>
      <ul >
        {/* <li className="lista"><a href="#" className="enlace">Bod</a></li>
        <li className="lista"><a href="#" className="enlace">News</a></li> */}
        <li className="lista"><a href="#" className="enlace"  onClick={eliminar}>Elimina el ultimo</a></li>
        <li className="lista"><a href="#" className="enlace" onClick={aumentar}> Agrega número al array {/* {numeroArray} */}</a></li>
        </ul>
          <div >
        
                {
                  numeroArray.map((item,index) => {
                  return <label  className="lista" key={index}><a href="#" className="enlace"> {item}- {index}</a></label>
                  }
                  )

                }
          </div>
      
    </Fragment>
  );
}

function Navup() {
  const [numero, setNumero]= useState(0);
  function aumentar(){
     console.log("Diste un click");
     setNumero(numero+1);
  }
  return (
    <Fragment>
      
        <div className="navChild uno"><a href="#" className="enlace">NAV</a></div>
        <div className="navChild dos"><a href="#" className="enlace">News</a></div>
        <div className="navChild tres"><a href="#" className="enlace">Contact</a></div>
        <div className="navChild"><h4>Contador: {numero}<button onClick={aumentar}>Aumentar</button></h4></div>
        <div className="navChild cuatro"><a href="#" className="enlace">About</a></div>
      
    </Fragment>
  );
}



function Bleft() {
  return (
    <Fragment>
      
        <a href="#" className="enlace">Bleft</a>
        <a href="#" className="enlace">News</a>
        <a href="#" className="enlace">Contact</a>
        <a href="#" className="enlace">About</a>
      
    </Fragment>
  );
}

function Bright() {
  return (
    <div className="Bright">
        <a href="#" className="enlace">Bright</a>
        <a href="#" className="enlace">News</a>
        <a href="#" className="enlace">Contact</a>
        <a href="#" className="enlace">About</a>
      
    </div>
  );
}

function Foot() {
  return (
    <Fragment>
      {/* <ul > */}
        <a href="#" className="Fenlace">Foot </a>|
        <a href="#" className="Fenlace"> News </a>|
        <a href="#" className="Fenlace"> Contact </a>|
        <a href="#" className="Fenlace"> About</a>
      {/* </ul> */}
    </Fragment>
  );
}

 

 export  {Fer, Navup, Foot, Bod, Bleft, Bright}; 

