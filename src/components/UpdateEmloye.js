import React, { useEffect, useState } from "react";
import "./UpdateEmloye.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import { Container, Form } from "react-bootstrap";
function UpdateEmloye() {
  const [{ idUpdate }, dispatch] = useStateValue();
  const [employe, setEmploye] = useState({});
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  useEffect(() => {
    const getEmploye = async () => {
      if (idUpdate) {
        const response = await axios.get(`employes/${idUpdate}`);
        const persons = await response.data;
        setEmploye(persons);
      }
    };
    getEmploye();
  }, []);

  const fetchUpdateData = (dataUpdateEmploye) => {
    axios({
      method: "PUT",
      url: `employes/${idUpdate}`,
      data: JSON.stringify(dataUpdateEmploye),
      headers: { "Content-Type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
    history.push("/");
  };

  return (
    <div className="updateEmploye">
      <Container>
        <form onSubmit={handleSubmit(fetchUpdateData)}>
          <input
            placeholder="id"
            Value={employe.id}
            hidden
            name="id"
            ref={register}
          />
          <input
            placeholder="Nom"
            Value={employe.nom}
            name="nom"
            ref={register}
          />
          <input
            placeholder="Prenom"
            Value={employe.prenom}
            name="prenom"
            ref={register}
          />
          <input
            placeholder="Adresse"
            Value={employe.adresse}
            name="adresse"
            ref={register}
          />
          <button type="submit">Confirmer</button>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            Annuler
          </button>
        </form>
      </Container>
    </div>
  );
}

export default UpdateEmloye;
