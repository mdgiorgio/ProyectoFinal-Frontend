import React, { useState } from "react";
import { Form, Label, TermsContainer, CenteredBottoomCointainer, Buton, SuccessMessage, ErrorMessage, } from "./Formularios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Input from "../Input/Input"
import { userRegister } from "../../services/Axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [user, setUser] = useState({ textField: "", valid: null });
  const [name, setName] = useState({ textField: "", valid: null });
  const [password, setPasword] = useState({ textField: "", valid: null });
  const [password2, setPasword2] = useState({ textField: "", valid: null });
  const [mail, setMail] = useState({ textField: "", valid: null });
  const [phone, setPhone] = useState({ textField: "", valid: null });
  const [terms, setTerms] = useState(false);
  const [validForm, setValidForm] = useState(null);

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
        setPasword2((prevState) => {
          return { ...prevState, valid: "false" };
        });
      } else {
        setPasword2((prevState) => {
          return { ...prevState, valid: "true" };
        });
      }
    }
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
      userRegister({
        data: {
          username: user.textField,
          name: name.textField,
          password: password.textField,
          mail: mail.textField,
          phone: phone.textField,
        }
      })
      setValidForm(true);
      setUser({ textField: "", valid: "" });
      setName({ textField: "", valid: null });
      setPasword({ textField: "", valid: null });
      setPasword2({ textField: "", valid: "null" });
      setMail({ textField: "", valid: null });
      setPhone({ textField: "", valid: null });

      // ...
    } else {
      setValidForm(false);
    }
  };

  return (
    <main>
      <Form action="" onSubmit={onSubmit}>
        <Input
          state={user}
          changeState={setUser}
          type="text"
          label="Usuario"
          placeholder="Ingrese tu nombre de usuario"
          name="usuario"
          leyendError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
          regularExpression={expressions.user}
        />
        <Input
          state={name}
          changeState={setName}
          type="text"
          label="Nombre"
          placeholder="Nombre Y apellido"
          name="nombre"
          leyendError="El nombre solo puede contener letras y espacios."
          regularExpression={expressions.name}
        />
        <Input
          state={password}
          changeState={setPasword}
          type="password"
          label="Contraseña"
          name="password1"
          leyendError="La contraseña tiene que ser de 4 a 12 dígitos."
          regularExpression={expressions.password}
        />
        <Input
          state={password2}
          changeState={setPasword2}
          type="password"
          label="Repetir Contraseña"
          name="password2"
          leyendError="Ambas contraseñas deben ser iguales."
          funcion={validarPassword2}
        />
        <Input
          state={mail}
          changeState={setMail}
          type="email"
          label="Correo Electrónico"
          placeholder="Ingrese su mail."
          name="correo"
          leyendError="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo."
          regularExpression={expressions.mail}
        />
        <Input
          state={phone}
          changeState={setPhone}
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
              onChange={() => setTerms((prep) => !prep)}
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

export default Register;
