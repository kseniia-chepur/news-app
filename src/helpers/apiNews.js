const apiKey = 'd6d67e644a9f44659862a1ba20e67277';

async function fetchBySearch(query) {
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=${new Date()}&sortBy=publishedAt&pageSize=20&apiKey=${apiKey}`;
  const response = await fetch(apiUrl);
  return response;
}

async function fetchTopHeadlines() {
  const apiUrl = ` https://newsapi.org/v2/top-headlines/?sources=techcrunch&pageSize=20&apiKey=${apiKey}`;
  const response = await fetch(apiUrl);
  return response;
}

export { fetchBySearch, fetchTopHeadlines };
