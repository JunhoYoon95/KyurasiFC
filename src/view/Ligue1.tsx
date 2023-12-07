import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Score } from '../common/Score';


const Ligue1 = () => {
    const [scores, setScores] = useState<Score[]>([]);
  
    const handleClick = async () => {
  
      const options = {
        method: 'GET',
        url: 'https://odds.p.rapidapi.com/v4/sports/soccer_france_ligue_one/scores',
        params: {daysFrom: '3'},
        headers: {
          'X-RapidAPI-Key': '325bbf2418msh3ef14c1085de4c2p1731fdjsn6b49677c86d9',
          'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
      };
  
      try {
        const response = await axios.request(options);
        console.table(response.data)
        setScores(response.data); // 데이터를 상태에 저장
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
      <div className="Ligue1" style={{marginTop: "30px"}}>
        {/* <Store info={myFC} changeAddress={changeAddress}></Store> */}
        <h1>
          Scoring Fetch board 
        </h1>
        <div>
          <h2>Ligue1 League table</h2>
        </div>
        <button style={{marginTop: "30px"}} onClick={handleClick}>Fetch Data</button>
        <table style={{
            width:"80%",
            marginLeft:"10%",
            marginTop: "50px"
          }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Home</th>
              <th>Away</th>
              <th>Time</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={score.id}>
                <td> {index + 1}</td>
                <td>{score.home_team}</td>
                <td>{score.away_team}</td>
                <td>{formatSeoulTime(score.commence_time)}</td>
                <td>                  {score.scores ? (
                    // Check if scores exist
                    score.scores[0] ? (
                      // Check if scores[0] exists
                      `${score.scores[0].score} : ${score.scores[1].score}`
                    ) : (
                      // scores[0] does not exist, meaning "경기 전"
                      "경기 전"
                    )
                  ) : (
                    // scores array is null, meaning "경기 전"
                    "경기 전"
                  )}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Ligue1