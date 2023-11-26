import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row } from 'react-bootstrap';


/* @params */
interface MovieData {
    boxofficeType: string	
    // 박스오피스 종류를 출력합니다.
    showRange: string	
    // 대상 상영기간을 출력합니다.
    yearWeekTime: string	
    // 조회일자에 해당하는 연도와 주차를 출력합니다.(YYYYIW)
    rnum: string	
    // 순번을 출력합니다.
    rank: string	
    // 해당일자의 박스오피스 순위를 출력합니다.
    rankInten: string	
    // 전일대비 순위의 증감분을 출력합니다.
    rankOldAndNew: string	
    // 랭킹에 신규진입여부를 출력합니다.
    // “OLD” : 기존 , “NEW” : 신규
    movieCd: string	
    // 영화의 대표코드를 출력합니다.
    movieNm: string	
    // 영화명(국문)을 출력합니다.
    openDt: string	
    // 영화의 개봉일을 출력합니다.
    salesAmt: string	
    // 해당일의 매출액을 출력합니다.
    salesShare: string	
    // 해당일자 상영작의 매출총액 대비 해당 영화의 매출비율을 출력합니다.
    salesInten: string	
    // 전일 대비 매출액 증감분을 출력합니다.
    salesChange: string	
    // 전일 대비 매출액 증감 비율을 출력합니다.
    salesAcc: string	
    // 누적매출액을 출력합니다.
    audiCnt: string	
    // 해당일의 관객수를 출력합니다.
    audiInten: string	
    // 전일 대비 관객수 증감분을 출력합니다.
    audiChange: string	
    // 전일 대비 관객수 증감 비율을 출력합니다.
    audiAcc: string	
    // 누적관객수를 출력합니다.
    scrnCnt: string	
    // 해당일자에 상영한 스크린수를 출력합니다.
    showCnt: string	
    // 해당일자에 상영된 횟수를 출력합니다.
}

const KoreanMovie = () => {
    let today = new Date();
    today.setDate(today.getDate() - 7);
    
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 해줌
    const day = today.getDate().toString().padStart(2, '0');    
    const formattedDate = `${year}${month}${day}`;

    const [movies, setMovies] = useState<MovieData[]>([]);
    const handleClick = async () => {
        console.log("날짜 : ", formattedDate)
        const options = {
            method: 'GET',
            url: 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=0a8372c28d538b61ed294b191ad1fb30&targetDt='+formattedDate+'&weekGb=0&repNationCd=K'
            // url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=0a8372c28d538b61ed294b191ad1fb30&targetDt='+formattedDate+'&weekGb=0&repNationCd=K'
        };
        try{
            const response = await axios.request(options);
            console.table(response.data.boxOfficeResult.weeklyBoxOfficeList);
            setMovies(response.data.boxOfficeResult.weeklyBoxOfficeList)
        } catch(e){
            console.log(e);
        }
    }
    useEffect(() => {
        handleClick()
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
          Movie Fetch board 
        </h1>
        <div>
          <h2>국내 인기차트</h2>
        </div>
        <button style={{marginTop: "30px"}} onClick={handleClick}>Fetch Data</button>
        <table style={{
            width:"80%",
            marginLeft:"10%",
            marginTop: "50px"
          }}>
          <thead>
            <tr>
                <th>순위</th>
                <th>신규</th>
                <th>타이틀</th>
                <th>개봉일</th>
                <th>관객수</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.movieCd}>
                <td>{movie.rank} ({movie.rankInten})</td>
                <td>{movie.rankOldAndNew}</td>
                <td>{movie.movieNm}</td>
                <td>{formatSeoulTime(movie.openDt)}</td>
                <td>{movie.audiAcc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default KoreanMovie