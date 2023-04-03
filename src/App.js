import React from "react";
import Hero from "../components/Hero";
import Entry from "../components/Entry";
import data from "./data";
import "./styles.css";

export default function App() {
  const entry = data.map((item) => {
    return <Entry key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Hero />
      <section className="entry-list">{entry}</section>
    </div>
  );
}
