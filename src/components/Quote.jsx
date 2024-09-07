import { useEffect, useState } from "react";

function RandomQuoteMachine() {
  const [quote, setQuote] = useState("");

  const API = "https://api.quotable.io/random";

  const fetchQuote = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="quote-container">
        <div className="quote">
          <p>{quote.content}</p>
          <h4>{quote.author}</h4>
        </div>
        <button className="new-quote-button" onClick={fetchQuote}>
          New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="tweet-quote-button"
        >
          Tweet Quote
        </a>
      </div>
    </>
  );
}

export default RandomQuoteMachine;
