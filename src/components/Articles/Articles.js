import React from "react";
import { Link } from "react-router-dom";
import PropTypes, { oneOfType } from "prop-types";
import dateConverter from "../../helpers/dateConverter";
import "./Articles.css";

export default function Articles({ data, placeholderImg, sourceFilter }) {
  const displayedArticles = sourceFilter
    ? data.filter((article) => article.source.name === sourceFilter)
    : data;
  const articles = displayedArticles.map((article, i) => {
    return (
      <div key={i} className="article-preview">
        <h3 className="preview-title">{article.title}</h3>
        <small>{article.source.name}</small>
        <br />
        <small>{dateConverter(article.publishedAt)}</small>
        <img
          src={article.urlToImage ? article.urlToImage : placeholderImg}
          alt={article.title}
          className="preview-img"
        />
        <p>{article.description}</p>
        <Link
          to={`article/${i + 1}`}
          state={{
            title: article.title,
            author: article.author,
            source: article.source.name,
            date: article.publishedAt,
            content: article.content,
            img: article.urlToImage ? article.urlToImage : placeholderImg,
          }}
        >
          <button type="button" className="article-btn">
            Read more
          </button>
        </Link>
      </div>
    );
  });

  return <div>{articles}</div>;
}

Articles.defaultProps = {
  sourceFilter: null,
  placeholderImg: null,
};

Articles.propTypes = {
  data: PropTypes.arrayOf(oneOfType([(PropTypes.string, PropTypes.object)]))
    .isRequired,
  placeholderImg: PropTypes.string,
  sourceFilter: PropTypes.string,
};
