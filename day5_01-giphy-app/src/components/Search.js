import { useState } from "react";


function SearchPage() {
  let [searchKey, setSearchKey] = useState("");
  const [gifs, setGifs] = useState([]);


  const handleInput = (e) => {
    setSearchKey(e.target.value);
  }

  const performSearch = () => {
    // fetch tending gifs
    fetch(`https://api.giphy.com/v1/gifs/trending?rating=g&api_key=8OSzgThUclH7ZZYI5fJiW8ZhQF1Qwdlu&q=${searchKey}`)
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


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>It is the search page</h1>
      <br></br><br></br><br></br>
      <div style={{textAlign:"center"}}>
        <input type="text" name="searchKey" placeholder="Type your search here" value={searchKey} onChange={handleInput}></input>
        <div >
          <button style={{textAlign:"center"}} onClick={() => { performSearch() }}> Search Gif</button>
        </div>
        <div>
        {gifs.map((gifElement, index) => {
            return ( 
              <div key={index}> 
              <img src={gifElement.images.original.url} key={index} alt="Trending Gif"  /> 
              <button type="button" onClick={() => { handleSave(gifElement.images.original.url) }}> Save {index}</button>
              </div>
          )
          })}

        </div>
      </div>
    </div>
  );
}

export default SearchPage;

