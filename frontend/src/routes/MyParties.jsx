import partyFetch from "../axios/config";

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./MyParties.css";

const MyParties = () => {
  const [parties, setParties] = useState(null);

  // Load Parties
  useEffect(() => {
    const loadParties = async () => {
      try {
        const res = await partyFetch.get("/parties");
        console.log(res);
        setParties(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadParties();
  }, []);

  if (!parties) return <p className="loading">Carregando...</p>;

  return (
    <div className="home">
      <h1>Suas Festas</h1>
      <div className="parties-container">
        {parties.length === 0 && <p>Não há festas cadastradas</p>}
        {parties.map((party) => (
          <div className="party" key={party._id}>
            <img src={party.image} alt={party.title} />
            <h3>{party.title}</h3>
            <Link to={`/party/${party._id}`} className="btn-secondary">
              Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyParties;
