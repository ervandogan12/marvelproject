import { PRIVATE_API_KEY, PUBLIC_API_KEY } from "./constant.js";

function generateTimestamp() {
  return new Date().getTime().toString();
}
function generateHash(ts, prvtKey, pblcKey) {
  const hash = CryptoJS.MD5(ts + prvtKey + pblcKey).toString();
  return hash;
}

async function fetchComics(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

const getData = async (route) => {
  const publicKey = PUBLIC_API_KEY;
  const privateKey = PRIVATE_API_KEY;
  const ts = generateTimestamp();
  const hash = generateHash(ts, privateKey, publicKey);
  const url = `http://gateway.marvel.com/v1/public/${route}?apikey=${publicKey}&ts=${ts}&hash=${hash}`;
  const apiData = await fetchComics(url);

  return apiData;
};

export { getData };
