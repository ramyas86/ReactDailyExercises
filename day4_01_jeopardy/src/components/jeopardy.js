import { useEffect, useState } from "react";

function Jeopardy(props) {

  let [score, setScore] = useState(0);
  let [answer, setAnswer] = useState("");
  let [jeopardyData, setJeopardyData] = useState({});

  //when the component mounts, get a the first question
  useEffect(()=> {
    getNewQuestion();
  },[])

  //get a new random question from the API and add it to the data object in state
  let getNewQuestion = () => {
    //use fetch to make an API call and get a random Jeopardy question (returns a promise)
    fetch(`https://jservice.xyz/api/random-clue`)
        //on success of the fetch request, turn the response that came back into JSON
        .then((response) => response.json())
        //on success of turning the response into JSON (data we can work with), lets add that data to state
        .then((data) => {
            
            //put the data in the console just so we can see it
            console.log("data from the api", data);

            //update state with the data from the API causing the page to re-render
            setJeopardyData(data);
        })
        //handle any errors/failures with getting data from the API
        .catch((error) => {
            console.log(error)
        });
  }
  function handleSubmit(e) { 
    e.preventDefault();
    console.log(`Actual answer: ${jeopardyData.answer}, Entered answer: ${answer}`);
    if(answer.trim().toLowerCase() == jeopardyData.answer.trim().toLowerCase()) { // If answered correctly
      // Update user score
      setScore(score + jeopardyData.value);
    } else {
      setScore(score - jeopardyData.value);
    }
    getNewQuestion(); // get new question
    setAnswer("");
} 

function handleChange(e) { 
  setAnswer(e.target.value);
} 

    //present the results to the user
  return (
    <div>
      <div>
        <p> <span style={{ fontWeight: "bold" }}>Question: </span> {jeopardyData.question} </p>
      </div>

      <div>
        {/* {console.log(jeopardyData.category)} */}
      <p> <span style={{ fontWeight: "bold" }}>Category title: </span> {jeopardyData.category.title} </p>
      
      </div>
      <div>
      <p> <span style={{ fontWeight: "bold" }}>Points: </span> {jeopardyData.value} </p>
      </div>
      <div>
      <form onSubmit={handleSubmit}> 
        <p style={{ fontWeight: "bold" }}> Answer: <input type="text" name="userAnswer" placeholder='Enter your answer!!' value={answer} onChange={handleChange} /></p>
      
      <button> Submit</button>
      </form> 
      </div>
      <div>
        <p>Your score: <span style={{color:"green"}}>{score}</span> </p>
      </div>
    </div>
    );
}

export default Jeopardy;