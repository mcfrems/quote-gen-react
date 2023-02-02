import React, {useEffect, useState} from 'react'
import './Container.css'
import quoteup from "../../Assets/quoteup.png"
import quotedown from "../../Assets/quotedown.png"
import axios from 'axios'

function Container() {

    const [quotes, setQuotes] = useState([])
    const [displayedQuote, setDisplayedQuote] = useState([])

    useEffect(
        ()=>{
            axios.get("https://api.quotable.io/quotes?page=5")
            .then(res=>{
                // console.log(res.data.results)
                setQuotes(res.data.results)
            })
            .catch(err => console.log(err))
        }, []
    )//end of useEffect
 

   const newQuote = () => {
    //pick a random number between 0 and 20 
    const num = Math.floor(20 * Math.random());
    console.log(num);
    //assign that element of quotes to display quote
    setDisplayedQuote(quotes[num]);

    };

  return (
    <div>
        <div className="button-container">
            <button className="btn-new-quote" onClick={newQuote}>
                <h2>Generate New Quote</h2>
            </button>
        </div>
        <div className="container">
            <div className="quote-container">
                    <img
                    // id="quote-up"
                    src={quoteup}
                    alt="Quote Up"
                    height="75"
                    width="100"
                    />
                    {/* {quotes.map(item=><p className="quote-text">{item.content}</p>)} */}
                    <p className="quote-text">{displayedQuote.content}</p>
                    <img
                    // id="quote-down"
                    src={quotedown}
                    alt="Quote Down"
                    height="75"
                    width="100"
                    />
                    <p className="quote-author">{displayedQuote.author}</p>
                {/* {quotes.map(item=><p className="quote-author">{item.author}</p>)} */}
            </div>          
        </div>
    </div>
  )
}

export default Container



// //test the api
// fetch(testurl)
// .then(res =>res.json())
// .then(data => {
//     console.log(data.results[0].content);
//     console.log(data.results[0].author);
// });

// //create event listener for button
// document.getElementById("btn-new-quote").addEventListener("click", getQuote);


// function getQuote(){
//     let page = 1+Math.floor(Math.random()*100);
//     let quoteText = document.getElementById("quote-text");
//     let quoteAuthor = document.getElementById("quote-author");
//     //const quoteUp = document.getElementById("quote-up");
//     //const quoteDown = document.getElementById("quote-down");
//     console.log("quote text is " + quoteText);
//     console.log("quote author is" + quoteAuthor);
//     //console.log(quoteUp);

//     //create url with pagenumber
//     const endpoint = `https://api.quotable.io/quotes?page=${page}`
