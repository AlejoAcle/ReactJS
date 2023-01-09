import React from "react";

export const Saludar = (props) => {
  //declarar nuevas propiedades como constante
  const {userInfo,saludarFn} = props;
  //desestructuracion propiedades
  // const {nombre} = userInfo
  // devolver una prop si no hay nada
  const { nombre ="anonimo",edad} = userInfo;


  console.log(props);

  return (
    <div>
      <button onClick={() => props.saludarFn(nombre, edad)}>
        Saludar
      </button>
    </div>
  );
};
