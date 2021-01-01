import React, {useState, useContext, useEffect} from 'react'
import {Card, CardMedia, Button} from '@material-ui/core'
import {useParams, Link} from 'react-router-dom'
import {Context} from '../Context'
import {API_KEY} from '../credentials'

function CardDetail(props) {
    const {detailId} = useParams()
    const {movies} = useContext(Context)
    const [result, setResult] = useState([])

    const handleFetch = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
            setResult(data)
    }


    useEffect(() => {
        console.log(detailId)
        const MovieUrl = `https://api.themoviedb.org/3/movie/${detailId}?api_key=${API_KEY}&language=en-US`
        const TvUrl =  `https://api.themoviedb.org/3/tv/${detailId}?api_key=${API_KEY}&language=en-US`
        handleFetch(movies ? MovieUrl : TvUrl)
    }, [detailId])

    console.log(result, "it is null")

    return(
        <div>
            <h1>{result.name || result.original_title}</h1>
            <h3>Popularity : {result.popularity}</h3>
            <h4>Run time : {result.runtime || "unknown"} Min</h4>
            {
                result.genres ? 
                result.genres.map(genre => (
                    <p key={genre.id}>{genre.name}</p>
                )) : 
                (<h1>Genre unknown</h1>)
            }
            <img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path || result.poster_path}`} alt="" />
            <p>Languages : {result.original_language}</p>
            <div>
                <h3>Overview :-</h3><br />
                <p>{result.overview}</p>
            </div>
            <Button color="primary">
                <Link to="/">Back To Home</Link>
            </Button>
        </div>
    )
}

export default CardDetail
