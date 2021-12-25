import React, {useState, useEffect} from 'react'
import { fetchMonthlyNews } from './news_api/newsApi'
import './App.css'

const App = () => {

  const [articles, setArticles] = useState([])
  const [q, setQ] = useState("")
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!q) return
    
    const searchResults = await fetchMonthlyNews(q)
    setArticles(searchResults)
  } 

  useEffect(() => {
    const fetchWorldNews = async() => {
      const searchResults = await fetchMonthlyNews("World News")
      setArticles(searchResults)
    }
    fetchWorldNews()
  },[])

  return (
    <div className='App'>
      <h1>Mirror Now</h1>
      <section>
        Enter a topic to get the latest news updates 🔎
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='q'
            name='q'
            placeholder='World News'
            onChange={(e) => setQ(e.target.value)}
          />
          <br />
          <br />
          <input type='submit' value='SEARCH'/> 
        </form>
      </section>
      <section>
        {articles && articles.length > 0 && (
          <ol>
          {articles.map((article, index) => {
            const {author, title, url, urlToImage, description } = article;
            return (
              <li key={index}>
                <a href={url} target="__other">
                  {title}
                </a>
                <h5>{author}</h5>
                <img src={urlToImage} alt={title} />
                <p>{description}</p>
              </li>
            )
          })}
        </ol>
        )}
      </section>
    </div>
  )
}

export default App
