import React, { useEffect } from 'react'
import { Alert, Col, Ratio, Row } from 'react-bootstrap'

const Home = () => {
    useEffect(() => {
        const script = document.createElement('script');
    
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
    
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
      <div style={{height: "100vh"}}>
          <div style={{ width: "90%", height: 'auto', margin: '0 auto' }}>
            <img src="/images/santanarow.jpeg" alt="" style={{ width: "100%", height: "30vh", objectFit: 'cover'}} />
            <Row style={{marginTop:"40px"}}>
                <Col sm={3}>
                    <div className="w-100 badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="junho-yoon-junmannn-kyurasi" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://kr.linkedin.com/in/junho-yoon-junmannn-kyurasi?trk=profile-badge"></a>
                    </div>
                </Col>
                <Col sm={9}>
                    <Alert variant="success">
                        <Alert.Heading>Hey, nice to see you</Alert.Heading>
                        <p>
                            Very interested in the latest software development technologies and like to learn and discuss them.
                        </p>
                      </Alert>
                      <Alert variant="primary">
                        <Alert.Heading>You can also find me on</Alert.Heading>
                            Blog (Powered by Kakao) : 
                            <Alert.Link href="https://kyurasi.tistory.com/"> Kyurasi's Dev Archive</Alert.Link>. Give it a click if
                            you are interested.
                    </Alert>
                </Col>
            </Row>
            <Row style={{marginTop:"40px"}}>
                <Col sm>
                    <div style={{ width: '100%', height: 'auto' }}>
                        <Ratio aspectRatio="16x9">
                        <video
                            style={{ width: '100%', height: 'auto', filter: 'brightness(0.8)' }}
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/videos/lake.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </Ratio>
                    </div>
                </Col>
                <Col sm>
                    <div style={{ width: '100%', height: 'auto' }}>
                        <Ratio aspectRatio="16x9">
                        <video
                            style={{ width: '100%', height: 'auto', filter: 'brightness(0.8)' }}
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/videos/santanarow.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </Ratio>
                    </div>
                </Col>
                <Col sm>
                    <div style={{ width: '100%', height: 'auto' }}>
                        <Ratio aspectRatio="16x9">
                        <video
                            style={{ width: '100%', height: 'auto', filter: 'brightness(0.8)' }}
                            autoPlay
                            muted
                            loop
                        >
                            <source src="/videos/sosalito.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </Ratio>
                    </div>
                      
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Home