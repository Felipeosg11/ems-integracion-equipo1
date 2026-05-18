import { useEffect, useState } from "react";
import api from "../services/api";

function SummaryCard() {

  const [summary, setSummary] = useState(null);

  useEffect(() => {

    getSummary();

  }, []);

  const getSummary = async () => {

    try {

      const response = await api.get(
        "/projects/1/summary"
      );

      setSummary(response.data.data);

    } catch (error) {

      console.log(error);

    }
  };

  if (!summary) {
    return <p>Cargando resumen...</p>;
  }

  return (
    <div className="summary">

      <h2>Resumen Global</h2>

      <div className="summary-grid">

        <div className="summary-item">
          <h3>Proyecto</h3>
          <p>{summary.projectId}</p>
        </div>

        <div className="summary-item">
          <h3>Riesgos Activos</h3>
          <p>{summary.activeRisks}</p>
        </div>

      </div>

    </div>
  );
}

export default SummaryCard;