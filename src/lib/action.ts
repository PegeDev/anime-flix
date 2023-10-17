import axiosInstance from "./axiosInstances";

export async function getRandomAnime() {
  try {
    const res = await fetch(`${process.env.API_URL}/v4/random/anime`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export async function getTopAnime(limit = 8, page = 1) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/v4/top/anime?limit=${limit}&page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export async function getTopManga(limit = 8, page = 0) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/v4/top/manga?limit=${limit}&page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export async function getSearchContent(input = "", limit = 8) {
  try {
    const res = await fetch(
      `${process.env.API_URL}/v4/anime?q=${input}&sort=desc&limit=${limit}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}
