import apiKey from './APIKey';

export const fetchImage = async forecast => {
    const headers = new Headers({
      'Authorization': apiKey
    });
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${forecast}&per_page=1&locale=pt-BR`,
      {
        headers: headers
      }
    );
    const { photos } = await response.json();

    return { 
      photo: photos[0].src.original,
      photographer: photos[0].photographer,
    };
  };