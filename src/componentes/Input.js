import React from "react";
import {Inputs,Label,AllInputs, LeyendError,IconValidation,} from "./../elementos/Formularios";
import {faCheckCircle,faTimesCircle,} from "@fortawesome/free-solid-svg-icons";

const ComponentInput = ({ //en vez de usar props "destructuro" propiedaddes .
  state,
  changeState,
  type,
  label,
  placeholder,
  name,
  leyendError,
  regularExpression,
  funcion,
}) => {
  const onChange = (e) => {
    changeState({ ...state, textField: e.target.value }); //cuando hay un cambio en el input se ejecuta la funcion que cambia el estado, creando un nuevo objeto que iguala lo que entra en el input.
  };

  const validation = () => {
    if (regularExpression) {
      if (regularExpression.test(state.textField)) {
        changeState({ ...state, valid: "true" });
      } else {
        changeState({ ...state, valid: "false" });
      }
    }

    if (funcion) {
      funcion();
    }
  };

  return (
    <div>
      <Label htmlFor={name} valid={state.valid}>
        {label}
      </Label>
      <Inputs>
        <AllInputs
          type={type}
          placeholder={placeholder}
          id={name}
          value={state.textField}
          onChange={onChange}
          onKeyUp={validation}//se ejecuta la validacion luego de que se "apriete" una tecla dentro del input.
          onBlur={validation}//""  ""      ""     ""      ""   de que se haga un click fuera del input.
          valid={state.valid}
        />
        <IconValidation
          icon={state.valid === "true" ? faCheckCircle : faTimesCircle}
          valid={state.valid}
        />
      </Inputs>
      <LeyendError valid={state.valid}>{leyendError}</LeyendError>
    </div>
  );
};

export default ComponentInput;
