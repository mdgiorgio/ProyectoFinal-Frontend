import React, { useState } from "react";
import {Form,Label,TermsContainer,CenteredBottoomCointainer,Buton,SuccessMessage,ErrorMessage,} from "./elementos/Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "./componentes/Input";

const App = () => {
  const [user, changeUser] = useState({ textField: "", valid: null });
  const [name, changeName] = useState({ textField: "", valid: null });
  const [password, changePasword] = useState({ textField: "", valid: null });
  const [password2, changePasword2] = useState({ textField: "", valid: null });
  const [mail, changeMail] = useState({ textField: "", valid: null });
  const [phone, changePhone] = useState({ textField: "", valid: null });
  const [terms, changeTerms] = useState(false);
  const [validForm, changeValidForm] = useState(null);

  const expressions = {
    user: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/, // 7 a 14 numeros.
  };

  const validarPassword2 = () => {
    if (password.textField.length > 0) {
      if (password.textField !== password2.textField) {
        changePasword2((prevState) => {
          return { ...prevState, valid: "false" };
        });
      } else {
        changePasword2((prevState) => {
          return { ...prevState, valid: "true" };
        });
      }
    }
  };

  const onChangeTerms = (e) => {
    changeTerms(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      user.valid === "true" &&
      name.valid === "true" &&
      password.valid === "true" &&
      password2.valid === "true" &&
      mail.valid === "true" &&
      phone.valid === "true" &&
      terms
    ) {
      changeValidForm(true);
      changeUser({ textField: "", valid: "" });
      changeName({ textField: "", valid: null });
      changePasword({ textField: "", valid: null });
      changePasword2({ textField: "", valid: "null" });
      changeMail({ textField: "", valid: null });
      changePhone({ textField: "", valid: null });

      // ...
    } else {
      changeValidForm(false);
    }
  };

  return (
    <main>
      <Form action="" onSubmit={onSubmit}>
        <Input
          state={user}
          changeState={changeUser}
          type="text"
          label="Usuario"
          placeholder="Gabi123"
          name="usuario"
          leyendError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
          regularExpression={expressions.user}
        />
        <Input
          state={name}
          changeState={changeName}
          type="text"
          label="Nombre"
          placeholder="Santiago Ocón"
          name="usuario"
          leyendError="El nombre solo puede contener letras y espacios."
          regularExpression={expressions.name}
        />
        <Input
          state={password}
          changeState={changePasword}
          type="password"
          label="Contraseña"
          name="password1"
          leyendError="La contraseña tiene que ser de 4 a 12 dígitos."
          regularExpression={expressions.password}
        />
        <Input
          state={password2}
          changeState={changePasword2}
          type="password"
          label="Repetir Contraseña"
          name="password2"
          leyendError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
        />
        <Input
          state={mail}
          changeState={changeMail}
          type="email"
          label="Correo Electrónico"
          placeholder="maru@correo.com"
          name="correo"
          leyendError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          regularExpression={expressions.mail}
        />
        <Input
          state={phone}
          changeState={changePhone}
          type="text"
          label="Teléfono"
          placeholder="4491234567"
          name="telefono"
          leyendError="El telefono solo puede contener numeros y el maximo son 14 dígitos."
          regularExpression={expressions.phone}
        />

        <TermsContainer>
          <Label>
            <input
              type="checkbox"
              name="terminos"
              id="terminos"
              checked={terms}
              onChange={onChangeTerms}
            />
            Acepto los Terminos y Condiciones
          </Label>
        </TermsContainer>
        {validForm === false && (
          <ErrorMessage>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </ErrorMessage>
        )}
        <CenteredBottoomCointainer>
          {/* <Buton type="submit">Enviar</Boton> */}
          <Buton type="submit">Enviar</Buton>
          {validForm === true && (
            <SuccessMessage>Formulario enviado exitosamente!</SuccessMessage>
          )}
        </CenteredBottoomCointainer>
      </Form>
    </main>
  );
};

export default App;
