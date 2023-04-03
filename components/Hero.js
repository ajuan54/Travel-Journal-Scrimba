import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img src={require("../images/Fill_213.png")} className="hero--photo" />
      <h1 className="hero--header">my travel journal</h1>
    </section>
  );
}
