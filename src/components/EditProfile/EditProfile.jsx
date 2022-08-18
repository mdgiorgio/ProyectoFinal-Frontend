/* 

import axios from "axios";

import { useEffect, useState } from "react";
const ProfileComponent = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    const userId = JSON.parse(window.localStorage.getItem("Id"))
    axios
      .get(`http://localhost:8000/auth/${userId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            window.localStorage.getItem("Token")
          )}`,
        },
      })
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => console.error(err));
  });
  return (
    <>
      <div className="profile">
      <Input
          state={name}
          changeState={setPasword}
          type="password"
          label="Contraseña"
          name="password1"
          
          
        />
        <Input
          state={phone}
          changeState={setPasword}
          type="password"
          label="Contraseña"
          name="password1"
          
          
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
      <Button
            onClick={}
            style={{
              width: "150px",
              backgroundColor: "#9966ff",
              color: "#ffffff",
            }}
          >
            Registrate
          </Button>
      </div>
    </>
  );
};
export default ProfileComponent; */