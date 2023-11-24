import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';


interface MovieData {
  // Score에 포함되는 데이터에 대한 인터페이스를 정의합니다.
  // 예시로 필요한 데이터만 정의하고, 실제 데이터 구조에 따라 수정하세요.
  // 예: id, team, score 등
  backdrop_path: string;
  contentType: string;
  genres: { name: string; score: string }[];
  original_title: string;
  overview: string
  poster_path: string
  release_date: string
  title: string
}

const Movie = () => {
    const [scores, setScores] = useState<MovieData[]>([]);
  
    const handleClick = async () => {
        const options = {
            method: 'GET',
            url: 'https://movies-api14.p.rapidapi.com/movies',
            headers: {
              'X-RapidAPI-Key': '325bbf2418msh3ef14c1085de4c2p1731fdjsn6b49677c86d9',
              'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            console.table(response.data);
            console.table(response.data.movies);
            setScores(response.data.movies); // 데이터를 상태에 저장
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
      handleClick(); // Execute when the component mounts
    }, []); // Empty dependency array ensures this effect runs once
    const formatSeoulTime = (timeString: string) => {
        const seoulTime = new Date(timeString);
        const formattedTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Seoul',
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: false,
        }).format(seoulTime);
        return formattedTime;
    };
    return (
      <div className="Movie" style={{marginTop: "30px"}}>
        {}
        <h1>
          Scoring Fetch board 
        </h1>
        <div>
          <h2>Movie League table</h2>
        </div>
        <button style={{marginTop: "30px", marginBottom: "40px"}} onClick={handleClick}>Fetch Data</button>
            <Row xs={1} md={3} className="g-4" style={{width:"80%", marginLeft:"10%"}}>
                {Array.isArray(scores) && scores.map((score, idx) => (
                    <Col key={idx}>
                        <Card>
                        <Card.Img variant="top" src={score.poster_path || "holder.js/100px160"} />
                        <Card.Body>
                            <Card.Title>{score.original_title || "Card title"}</Card.Title>
                            <Card.Text>
                            {score.overview ||
                                "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
      </div>
    );
}

export default Movie