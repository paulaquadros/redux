import { useState } from "react";
import { Button } from "reactstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Login() {
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState("");

  return (
    <form style={{ width: "300px" }} className="container">
      <div>
        <h6>Loja Virtual</h6>
      </div>

      <input placeholder="Digite seu email" />
      <input placeholder="Digite sua senha" />

      <Button>Login</Button>
    </form>
  );
}