import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';

interface SongData {
    // Score에 포함되는 데이터에 대한 인터페이스를 정의합니다.
    // 예시로 필요한 데이터만 정의하고, 실제 데이터 구조에 따라 수정하세요.
    // 예: id, team, score 등
    rank: string;
    title: string;
    cover: string;
    artist: string;
  }

const Billboard = () => {
    let today = new Date();
    today.setDate(today.getDate() - 7);
    
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줌
    const day = today.getDate().toString().padStart(2, '0');    
    const formattedDate = `${year}${month}${day}`;

    const [songs, setSongs] = useState<SongData[]>([]);
  
    const handleClick = async () => {
  
    const options = {
        method: 'GET',
        url: 'https://billboard-api5.p.rapidapi.com/api/charts/hot-100',
        params: {week: '2022-10-08'},
        headers: {
            'X-RapidAPI-Key': '325bbf2418msh3ef14c1085de4c2p1731fdjsn6b49677c86d9',
            'X-RapidAPI-Host': 'billboard-api5.p.rapidapi.com'
        }
        };
  
      try {
        const response = await axios.request(options);
        console.table(response.data.chart.entries);
        setSongs(response.data.chart.entries); // 데이터를 상태에 저장
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
      <div className="Bundesliga" style={{marginTop: "30px"}}>
        {/* <Store info={myFC} changeAddress={changeAddress}></Store> */}
        <h1>
          Billboard chart
        </h1>
        <div>
          <h2>Hot 100 table</h2>
        </div>
        <button style={{marginTop: "30px", marginBottom: "40px"}} onClick={handleClick}>Fetch Data</button>
            <Row xs={1} md={5} className="g-4" style={{width:"80%", marginLeft:"10%"}}>
                {Array.isArray(songs) && songs.map((song, idx) => (
                    <Col key={idx}>
                        {/* <Card>
                        <Card.Img variant="top" src={song.cover} />
                        <Card.Header as="h5">{song.rank} </Card.Header>
                        <Card.Body>
                            <Card.Title>{song.artist}</Card.Title>
                            <Card.Text>
                                {song.title}
                            </Card.Text>
                        </Card.Body>
                        </Card> */}
                        <Card>
                            <Card.Img variant="top" src={song.cover} />
                            <Card.Body>
                            <Card.Title>{song.artist}</Card.Title>
                            <Card.Text>
                                {song.title}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">rank : {song.rank}</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
      </div>
    );
}

export default Billboard