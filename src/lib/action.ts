import axiosInstance from "./axiosInstances";

export async function getRandomAnime() {
  try {
    const { data } = await axiosInstance.get("/v4/random/anime");
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export async function getTopAnime(limit = 8, page = 1) {
  try {
    const { data } = await axiosInstance.get(
      `/v4/top/anime?limit=${limit}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export async function getTopManga(limit = 8, page = 0) {
  try {
    const { data } = await axiosInstance.get(
      `/v4/top/manga?limit=${limit}&page=${page}`
    );
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}

export async function getSearchContent(input = "", limit = 8) {
  try {
    const { data } = await axiosInstance.get(
      `/v4/anime?q=${input}&sort=desc&limit=${limit}`
    );
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
}
