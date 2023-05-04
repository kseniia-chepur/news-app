async function fetchBySearch(query) {
  const url = `https://newsdata2.p.rapidapi.com/news?language=en&q=${query}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fb8014d008msh5162e9ab3248304p1a4dfbjsn76add30fc779',
      'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com',
    },
  };
  const response = await fetch(url, options);
  return response;
}

async function fetchByDefault() {
  const url = 'https://newsdata2.p.rapidapi.com/news?language=en';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fb8014d008msh5162e9ab3248304p1a4dfbjsn76add30fc779',
      'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  return response;
}

export { fetchBySearch, fetchByDefault };
