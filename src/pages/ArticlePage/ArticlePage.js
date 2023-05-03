import React from 'react';
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import dateConverter from '../../helpers/dateConverter';
import NotFound from '../NotFound/NotFound';
import HomeLink from '../../shared/HomeLink/HomeLink';
import './ArticlePage.css';

export default function ArticlePage() {
  const { state } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!state) {
    return <NotFound />;
  }

  return (
    <article className="ArticlePage">
      <h2 className="article-title">{state.title}</h2>
      <small className="article-details">{dateConverter(state.date)}</small>
      <br />
      <small className="article-details">
        {state.author} for the <span>{state.source}</span>
      </small>
      <div className="content">
        <img src={state.img} alt={state.title} className="article-img" />
        <p>{state.content}</p>
        <HomeLink />
      </div>
    </article>
  );
}
