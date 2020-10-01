import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Header.css";
import { useStateValue } from "../StateProvider";

import { Row, Col, Container } from "react-bootstrap";

function Header() {
  const { register, handleSubmit } = useForm();

  const [{ count }, dispatch] = useStateValue();

  const AddCount = () => {
    dispatch({
      type: "EMPLOYE_AJOUTERCOUNT",
      count: count,
    });
  };

  const fetchData = (dataEmploye, e) => {
    axios({
      method: "POST",
      url: "employes",
      data: JSON.stringify(dataEmploye),
      headers: { "Content-Type": "application/json" },
    }).catch((error) => {
      console.log(error);
    });
    AddCount();
    e.target.reset();
  };

  return (
    <div className="header">
      <Container>
        <Row className="header__title">
          <Col lg={12}>
            <h2>Gestion des empolyés</h2>
          </Col>
        </Row>
        <Row className="header__body">
          <Col lg={8} sm={12} className="header__bodyLeft">
            <form onSubmit={handleSubmit(fetchData)}>
              <input placeholder="Nom" name="nom" ref={register} />
              <input placeholder="Prenom" name="prenom" ref={register} />
              <input placeholder="Adresse" name="adresse" ref={register} />
              <button type="submit">Ajouter</button>
            </form>
          </Col>
          <Col lg={4} sm={12} className="header__bodyRight">
            <form>
              <input placeholder="Nom" name="nom" />
              <button type="submit">Chercher</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
