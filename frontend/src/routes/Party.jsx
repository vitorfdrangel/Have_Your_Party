import partyFetch from "../axios/config";

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Party = () => {
  const [party, setParty] = useState(null);

  const { id } = useParams();

  // Load party
  useEffect(() => {
    const loadParty = async () => {
      try {
        const res = await partyFetch.get(`/parties/${id}`);

        setParty(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    loadParty();
  }, []);

  if (!party) return <p className="loading">Carregando...</p>;

  return (
    <div className="party">
      <h1>{party.title}</h1>
      <div className="actions-container">
        <Link className="btn">Editar</Link>
        <button className="btn-secondary">Excluir</button>
      </div>
      <p>Orçamento: R${party.budget}</p>
      <h3>Serviços contratados:</h3>
      <div className="services-container">
        {party.services.map((service) => (
          <div className="service" key={service._id}>
            <img src={service.image} alt={service.title} />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Party;
