export const getGif = async(categories) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0bHhxFv5KUPyCeD42RZ28DiDtOk9Y1zj&q=${ encodeURI(categories) }&limit=10`;
    const resp = await fetch(url); //hace la peticion HTTP
    const {data} = await resp.json(); //pasa los datos  a formato json

    const arrayGif = data.map(img =>{
            return{
                id: img.id,
                title: img.title,
                urlGif: img.images?.downsized_medium.url
            }
        }            
    )
    return arrayGif;
}