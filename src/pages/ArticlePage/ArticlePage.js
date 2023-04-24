import React from "react";
import { useLocation } from "react-router-dom";
import dateConverter from "../../helpers/dateConverter";
import NotFound from "../NotFound/NotFound";
import HomeLink from "../../shared/HomeLink/HomeLink";
import "./ArticlePage.css";

export default function ArticlePage() {
  const { state } = useLocation();

  if (!state) {
    return <NotFound />;
  }

  return (
    <article className="ArticlePage">
      <h2 className="article-title">{state.title}</h2>
      <small>{state.source}</small>
      <br />
      <small>{dateConverter(state.date)}</small>
      <div className="content">
        <img src={state.img} alt={state.title} className="article-img" />
        <div>
          <p>{state.content}</p>
          <HomeLink />
        </div>
      </div>
    </article>
  );
}
