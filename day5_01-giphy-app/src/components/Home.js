import { useEffect, useState } from "react";


function Home() {
  const [gifs, setGifs] = useState([]);
  const getTrendingGifs = () => {
    // fetch tending gifs
    fetch(`https://api.giphy.com/v1/gifs/trending?rating=g&api_key=8OSzgThUclH7ZZYI5fJiW8ZhQF1Qwdlu`)
      //on success of the fetch request, turn the response that came back into JSON
      .then((response) => response.json())
      //on success set the trending gifs to state
      .then((apiResponse) => {
        //put the data in the console just so we can see it
        console.log("data from the api", apiResponse.data);
        //update state with the data from the API causing the page to re-render
        setGifs(apiResponse.data);
      })
      //handle any errors/failures with getting data from the API
      .catch((error) => {
        console.log(error)
      });
  }

  const handleSave = (imageUrl) => {
    let savedImages = [];
    let gifString = localStorage.getItem("savedGifs");
    console.log(gifString);
    if (gifString) {
      savedImages = gifString.split(",");
    }
    savedImages = [...savedImages, imageUrl]
    console.log(savedImages);
    localStorage.setItem("savedGifs", savedImages);
  }


  //when the component mounts, get a the first question
  useEffect(() => {
    getTrendingGifs();
  }, [])



  return (
    <div>
      <h1 style={{ textAlign: "center" }}>It is the home page</h1>
      <div>
        Trending gifs
        <div name="ImageHolder">
          {gifs.map((gifElement, index) => {
            return (
              <div key={index}>
              <img src={gifElement.images.original.url} key={index} alt="Trending Gif"  /> 
                <button type="button" onClick={() => { handleSave(gifElement.images.original.url) }}> Save</button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
