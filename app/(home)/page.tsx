export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return await fetch(URL).then((response) => response.json());
  // const response = await fetch(URL);
  // const json = await response.json();
  // return json;
}

// await을 쓰려면 부모에도 async가 있어야 한다!
export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
