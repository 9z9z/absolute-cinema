const apiKey = '6b2dec73b6697866a50cdaef60ccffcb'; // <<<< غيرها بمفتاحك
const container = document.getElementById('items-container');

async function fetchLatestMovies() {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ar-SA&page=1`;
  const res = await fetch(url);
  const data = await res.json();
  displayItems(data.results);
}

function displayItems(items) {
  container.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'grid-item';
    div.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}" />
      <h3>${item.title}</h3>
    `;
    container.appendChild(div);
  });
}

fetchLatestMovies();
