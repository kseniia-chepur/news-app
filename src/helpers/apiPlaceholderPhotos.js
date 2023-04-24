async function fetchPlaceholderImg(query) {
  const pexelsApiKey =
    "7wiBb0oaxjkUEOyNbXYkSSMnmBo4J2aQFHQMNCtOsghUstsVd2lhRX2P";
  const pexelsUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;
  const response = await fetch(pexelsUrl, {
    headers: {
      Authorization: pexelsApiKey,
    },
  });
  return response;
}

export default fetchPlaceholderImg;
