import partyFetch from "../axios/config";

import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import useToast from "../hook/useToast";

// Styles
import "./Party.css";

const Party = () => {
  const [party, setParty] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

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

  // Delete this party
  const handleDelete = async () => {
    try {
      const res = await partyFetch.delete(`/parties/${id}`);

      if (res.status === 200) {
        navigate("/");

        useToast(res.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!party) return <p className="loading">Carregando...</p>;

  return (
    <div className="party">
      <h1>{party.title}</h1>
      <div className="actions-container">
        <Link to={`/party/edit/${id}`} className="btn">
          Editar
        </Link>
        <button className="btn-secondary" onClick={handleDelete}>
          Excluir
        </button>
      </div>
      <p>Orçamento: R${party.budget}</p>
      <h3>Serviços contratados:</h3>
      <div className="services-container service-party">
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
