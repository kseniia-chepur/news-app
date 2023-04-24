import React, { useState, useEffect } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import search from "../../assets/search-icon.svg";
import Articles from "../../components/Articles/Articles";
import Dropdown from "../../components/Dropdown/Dropdown";
import Spinner from "../../components/Spinner/Spinner";
import { fetchBySearch, fetchTopHeadlines } from "../../helpers/apiNews";
import fetchPlaceholderImg from "../../helpers/apiPlaceholderPhotos";
import "./SearchPage.css";

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);
  const [searchMsg, setSearchMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [placeholderImg, setPlaceholderImg] = useState(null);

  async function getSearchResult(api) {
    setLoading(true);
    let response;
    try {
      response = await api(searchInput);
    } finally {
      setLoading(false);
    }
    if (response?.ok) {
      const data = await response.json();
      const { articles } = data;
      if (!articles.length) {
        setSearchMsg("There is no articles matching your request");
      } else {
        setSearchResult(articles);
      }
    } else {
      setError({
        status: response.status,
        statusText: response?.statusText,
      });
    }
  }

  useEffect(() => {
    getSearchResult(fetchTopHeadlines);
    // eslint-disable-next-line
  }, []);

  async function getPlaceholderImg() {
    let response;
    try {
      response = await fetchPlaceholderImg(searchInput);
    } catch (err) {
      throw new Error(err);
    }
    if (response?.ok) {
      const data = await response.json();
      const { photos } = data;
      setPlaceholderImg(photos[0].src.landscape);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchInput) return;
    setSearchMsg("");
    setSearchParams({ search: searchInput });
    getSearchResult(fetchBySearch);
    getPlaceholderImg();
  }

  function filterbySource(e) {
    setSearchParams((prevParams) => {
      prevParams.set("source", e.value);
      return prevParams;
    });
  }

  function clearFilter() {
    setSearchParams((prevParams) => {
      prevParams.delete("source");
      return prevParams;
    });
  }

  return (
    <div className="SearchPage">
      <div className="top">
        <form className="form-element" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            className="search-input"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="button" className="form-btn">
            <img src={search} alt="search-icon" width={35} />
          </button>
        </form>
      </div>

      <Spinner loadingStatus={loading} />

      {!searchMsg && (
        <Dropdown
          filterbySource={filterbySource}
          clearFilter={clearFilter}
          sourceList={searchResult.map((article) => article.source.name)}
        />
      )}

      <div className="articles-container">
        {searchMsg ? (
          <h2>{searchMsg}</h2>
        ) : (
          <Articles
            data={searchResult}
            placeholderImg={placeholderImg}
            sourceFilter={searchParams.get("source")}
          />
        )}
      </div>

      {error && (
        <Navigate
          to="/error"
          state={{ status: error.status, statusText: error.statusText }}
        />
      )}
    </div>
  );
}
