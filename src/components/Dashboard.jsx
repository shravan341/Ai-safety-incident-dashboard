import React, { useState } from "react";
import "./Dashboard.css";
import IncidentForm from "./IncidentForm";

const initialIncidents = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    severity: "Medium",
    reportedAt: "2025-03-15",
    description: "Algorithm favored certain demographics.",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    severity: "High",
    reportedAt: "2025-04-01",
    description: "LLM provided incorrect safety procedure information.",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    severity: "Low",
    reportedAt: "2025-03-20",
    description: "Chatbot exposed non-sensitive user metadata.",
  },
];

function Dashboard() {
  const [incidents, setIncidents] = useState(initialIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [showForm, setShowForm] = useState(false);

  const filteredIncidents = incidents.filter(
    (incident) => filter === "All" || incident.severity === filter
  );
  const sortedIncidents = filteredIncidents.sort((a, b) => {
    if (sortOrder === "Newest") {
      return new Date(b.reportedAt) - new Date(a.reportedAt);
    } else {
      return new Date(a.reportedAt) - new Date(b.reportedAt);
    }
  });

  const toggleDescription = (id) => {
    setIncidents(
      incidents.map((incident) =>
        incident.id === id
          ? { ...incident, showDescription: !incident.showDescription }
          : incident
      )
    );
  };

  const addIncident = (incident) => {
    setIncidents([...incidents, incident]);
  };

  return (
    <div className="dashboard">
      <h2>Incident Dashboard</h2>
      <div className="controls">
        <select onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="All">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Report New Incident"}
        </button>
      </div>
      {showForm && <IncidentForm addIncident={addIncident} />}
      <ul>
        {sortedIncidents.map((incident) => (
          <li key={incident.id}>
            <h3>{incident.title}</h3>
            <p>
              {incident.severity} | {incident.reportedAt}
            </p>
            <button onClick={() => toggleDescription(incident.id)}>
              {incident.showDescription ? "Hide Details" : "View Details"}
            </button>
            {incident.showDescription && <p>{incident.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
