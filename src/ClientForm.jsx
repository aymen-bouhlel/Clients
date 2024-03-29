import React, { Component, useState } from "react";

const ClientForm = ({ onClientAdd }) => {
  const [nouveauClient, setNouveauClient] = useState("");

  const handleChange = event => {
    setNouveauClient(event.currentTarget.value); //event.currentTarget.value: la valeur qui se trouve dans l'input
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = nouveauClient;

    onClientAdd({ id, nom });

    setNouveauClient("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nouveauClient}
        onChange={handleChange}
        type="text"
        placeholder="Ajouter un client"
      />
      <button>Confirmer</button>
    </form>
  );
};

export default ClientForm;
