import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { oneOfType } from 'prop-types';
import dateConverter from '../../helpers/dateConverter';
import './Articles.css';

export default function Articles({ data, placeholderImg, sourceFilter }) {
  const displayedArticles = sourceFilter
    ? data.filter((article) => article.source_id === sourceFilter)
    : data;
  const articles = displayedArticles.map((article, i) => {
    return (
      <div key={i} className="article-preview">
        <h3 className="preview-title">{article.title}</h3>
        <small className="preview-details">
          {article.creator} for the <span>{article.source_id}</span>
        </small>
        <br />
        <small className="preview-details">
          {dateConverter(article.pubDate)}
        </small>
        <img
          src={article.image_url ? article.image_url : placeholderImg}
          alt={article.title}
          className="preview-img"
        />
        <p>{article.description}</p>
        <Link
          to={`article/${i + 1}`}
          state={{
            title: article.title,
            author: article.creator,
            source: article.source_id,
            date: article.pubDate,
            content: article.content,
            img: article.image_url ? article.image_url : placeholderImg,
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
