import React, {useEffect, useState} from 'react'
import './Container.css'
import quoteup from "../../Assets/quoteup.png"
import quotedown from "../../Assets/quotedown.png"
import axios from 'axios'

function Container() {

    const [quotes, setQuotes] = useState([])

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
 
  return (
    <div>
        <div className="button-container">
            <button className="btn-new-quote">
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
                    {/* <p className="quote-text">When you have a dream, you've got to grab it and never let go.</p> */}
                    {quotes.map(item=><p className="quote-text">{item.content}</p>)}
                    <img
                    // id="quote-down"
                    src={quotedown}
                    alt="Quote Down"
                    height="75"
                    width="100"
                    />
                {/* <p className="quote-author">Carol Burnett</p> */}
                {quotes.map(item=><p className="quote-author">{item.author}</p>)}
            </div>          
        </div>
    </div>
  )
}

export default Container