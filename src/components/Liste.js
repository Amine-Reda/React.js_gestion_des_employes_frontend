import React, { useEffect, useState } from "react";
import "./Liste.css";
import axios from "axios";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";

function Liste() {
  const [employes, setEmployes] = useState([]);
  const [{ count }, dispatch] = useStateValue();

  useEffect(() => {
    const fetchData = () => {
      axios.get("employes").then((res) => {
        const employes = res.data;
        setEmployes(employes);
        console.log(employes);
      });
    };

    fetchData();
  }, [count]);

  const supprimerEmploye = (id) => {
    try {
      axios.delete(`employes/${id}`);
      dispatch({ type: "EMPLOYE_SUPPRIMERCOUNT", count });
    } catch (error) {
      console.error();
    }
  };

  const toUpdate = (idUpdate) => {
    dispatch({ type: "EMPLOYE_MODIFER", item: idUpdate });
  };
  return (
    <div className="liste">
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Adresse</th>
            </tr>
          </thead>
          <tbody>
            {employes.map((employe) => (
              <tr key={employe.id}>
                <td>{employe.id}</td>
                <td>{employe.nom}</td>
                <td>{employe.prenom} </td>
                <td>{employe.adresse} </td>
                <td>
                  <Link to="/modifer">
                    <button onClick={() => toUpdate(employe.id)}>
                      Modifier
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      supprimerEmploye(employe.id);
                    }}
                  >
                    supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default Liste;
