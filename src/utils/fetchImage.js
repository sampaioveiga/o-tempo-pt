import apiKey from './pexelsAPIKey';

export const fetchImage = async forecast => {
    const headers = new Headers({
      'Authorization': apiKey
    });
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${forecast}&locale=pt-BR`,
      {
        headers: headers
      }
    );
    const { photos } = await response.json();
    const rnd = Math.floor(Math.random() * photos.length);

    return { 
      photo: photos[rnd].src.large,
      photographer: photos[rnd].photographer,
    };
  };

//`https://api.pexels.com/v1/search?query=${forecast}&per_page=1&locale=pt-BR`,
//`https://api.pexels.com/v1/curated`,