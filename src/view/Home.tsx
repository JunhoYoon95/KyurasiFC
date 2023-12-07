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
    <div>
        <div style={{ width: "90%", height: 'auto', margin: '0 auto' }}>
            <img src="/images/santanarow.jpeg" alt="" style={{ width: "100%", height: "30vh", objectFit: 'cover'}} />
            <Row style={{ marginTop: "40px" }}>
                <Col sm={4}>
                    <img src="/images/Junho.png" alt="" style={{width:"100%",aspectRatio:"1/1"}} />
                </Col>
                <Col sm={8}>
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
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
            </div>
            <section className="u-align-right u-clearfix u-image u-shading u-section-1" id="carousel_84db">
            <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-valign-middle-xs u-sheet-1">
                <h2 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-1">Look <b>Deep</b> Into The Nature
                </h2>
                <p className="u-text u-text-body-alt-color u-text-2">Nature will bear the closest inspection. She invites us to lay our eye level with her smallest leaf, and take an insect view of its plain.</p>
                <a href="https://nicepage.com/website-design" className="u-active-none u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-active-white u-text-hover-white u-btn-1">learn more</a>
            </div>
            </section>
            <section className="u-align-center u-clearfix u-section-2" id="carousel_c244">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-32 u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                    <div className="u-border-no-bottom u-border-no-left u-border-no-right u-border-no-top u-container-style u-layout-cell u-left-cell u-size-20 u-white u-layout-cell-1">
                        <div className="u-container-layout u-container-layout-1">
                        <img className="u-expanded-width u-image u-image-1" src="/called_images/rf.jpg"/>
                        <h4 className="u-text u-text-1">
                            <a href="https://www.natureandforesttherapy.org/" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.natureandforesttherapy.org/&amp;ved=2ahUKEwjj6aGaiaLpAhVMwqYKHcGrADAQFjAMegQIAhAB" >Forest Therapy</a>
                        </h4>
                        </div>
                    </div>
                    <div className="u-container-style u-layout-cell u-size-20 u-white u-layout-cell-2">
                        <div className="u-container-layout u-valign-top u-container-layout-2">
                        <img className="u-expanded-width u-image u-image-2" src="/called_images/fds.jpg"/>
                        <h4 className="u-text u-text-2">
                            <a href="https://www.escolacatalanadesurf.com/en/7/surf-lessons-barcelona" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.escolacatalanadesurf.com/en/7/surf-lessons-barcelona&amp;ved=2ahUKEwjLi7fcy7LoAhXux6YKHd7wAj0QtwIwD3oECAkQAQ" >30 Best Beach</a>es
                        </h4>
                        </div>
                    </div>
                    <div className="u-container-style u-layout-cell u-right-cell u-size-20 u-white u-layout-cell-3">
                        <div className="u-container-layout u-valign-top u-container-layout-3">
                        <img className="u-expanded-width u-image u-image-3" src="/called_images/s.jpg"/>
                        <h4 className="u-text u-text-3">Wild Nature</h4>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="u-align-left u-clearfix u-grey-90 u-section-3" id="carousel_957b">
            <div className="u-clearfix u-sheet u-sheet-1">
                <h2 className="u-text u-text-1">Getting back to <b>nature</b>
                </h2>
                <p className="u-text u-text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim. Ut porttitor leo a diam sollicitudin. Turpis in eu mi bibendum neque egestas
                        congue quisque egestas.</p>
                <a href="https://nicepage.com/wysiwyg-html-editor" className="u-active-none u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-active-white u-text-hover-white u-btn-1">learn more</a>
            </div>
            </section>
            <section className="u-clearfix u-grey-90 u-section-4" id="sec-34dc">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                    <div className="u-size-20 u-size-60-md">
                        <div className="u-layout-col">
                        <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                            <div className="u-container-layout u-valign-bottom-lg u-valign-bottom-xl u-valign-bottom-xs u-valign-top-md u-valign-top-sm u-container-layout-1">
                            <img className="u-expanded-width-sm u-expanded-width-xs u-image u-image-1" src="/called_images/photo-1535037235175-a6884f8444e6.jpg"/>
                            </div>
                        </div>
                        <div className="u-container-style u-image u-layout-cell u-left-cell u-size-30 u-image-2">
                            <div className="u-container-layout u-container-layout-2"></div>
                        </div>
                        </div>
                    </div>
                    <div className="u-size-23-lg u-size-23-sm u-size-23-xl u-size-23-xs u-size-38-md">
                        <div className="u-layout-col">
                        <div className="u-container-style u-layout-cell u-size-60 u-layout-cell-3">
                            <div className="u-container-layout u-valign-top u-container-layout-3">
                            <img className="u-expanded-width u-image u-image-3" src="/called_images/photo-1540490190210-9e2825f75418.jpg"/>
                            <p className="u-text u-text-default u-text-1">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            <a href="https://nicepage.app" className="u-btn u-button-style u-palette-3-base u-btn-1" target="_blank">learn more</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="u-size-17-lg u-size-17-sm u-size-17-xl u-size-17-xs u-size-22-md">
                        <div className="u-layout-col">
                        <div className="u-align-center-sm u-align-center-xs u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-4">
                            <div className="u-container-layout u-valign-middle-sm u-valign-middle-xs u-container-layout-4">
                            <div className="u-container-style u-group u-white u-group-1">
                                <div className="u-container-layout u-valign-middle u-container-layout-5">
                                <h3 className="u-custom-font u-font-playfair-display u-text u-text-default u-text-2"><b>Amazing</b> Places
                                </h3>
                                <p className="u-text u-text-default u-text-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="u-clearfix u-white u-section-5" id="carousel_fb69">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                    <div className="u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-1">
                        <div className="u-container-layout u-container-layout-1">
                        <h2 className="u-custom-font u-font-ubuntu u-text u-text-1">This place is special...</h2>
                        </div>
                    </div>
                    <div className="u-container-style u-layout-cell u-size-20 u-layout-cell-2">
                        <div className="u-container-layout u-valign-top u-container-layout-2">
                        <p className="u-text u-text-2">Due to its commanding position, in the Second World War the Fort House was used by the military as an observation post and even had the roof reinforced to protect it from an aerial attack, with two feet of concrete, making
                                            it bomb proof from enemy aircraft. With its historic harbour, rockpools and sandy beaches St Mawes provides the idyllic Cornish escape and The Fort House the perfect property in which to stay</p>
                        </div>
                    </div>
                    <div className="u-container-style u-layout-cell u-right-cell u-size-20 u-layout-cell-3">
                        <div className="u-container-layout u-valign-top u-container-layout-3">
                        <p className="u-text u-text-3">This spacious and airy single storey holiday cottage sits in a private garden whose terrace provides uninterrupted views of the spectacular Cornish coastline. A short walk leads you in to the centre of the picturesque fishing
                                            village of St Mawes with its whitewashed cottages, galleries character pubs and restaurants.&nbsp;</p>
                        <a href="https://nicepage.dev" className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-btn-rectangle u-button-style u-none u-text-active-white u-text-body-color u-text-hover-palette-1-base u-btn-1">learn more</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="u-clearfix u-grey-90 u-section-6" id="carousel_3e63">
            <div className="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                    <div className="u-size-30 u-size-60-md">
                    <div className="u-layout-col">
                        <div className="u-align-left u-container-style u-image u-layout-cell u-left-cell u-size-40 u-image-1">
                        <div className="u-container-layout u-valign-middle u-container-layout-1">
                            <h1 className="u-custom-font u-font-ubuntu u-text u-text-body-alt-color u-text-1">Nature</h1>
                        </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-20 u-layout-cell-2">
                        <div className="u-container-layout u-valign-top u-container-layout-2">
                            <p className="u-text u-text-default u-text-2"> We seek to inspire and educate all members of our local region about the benefits of being good environmental stewards through responsible and sustainable use of natural resources.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="u-size-30 u-size-60-md">
                    <div className="u-layout-col">
                        <div className="u-container-style u-hidden-md u-hidden-sm u-hidden-xs u-layout-cell u-right-cell u-size-20 u-layout-cell-3">
                        <div className="u-container-layout u-container-layout-3"></div>
                        </div>
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-40 u-white u-layout-cell-4">
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="u-align-center u-clearfix u-palette-5-light-2 u-section-7" id="carousel_b04d">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h2 className="u-custom-font u-font-playfair-display u-text u-text-1">You Might Also Like</h2>
                <div className="u-clearfix u-expanded-width u-gutter-20 u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-row">
                    <div className="u-align-left u-container-style u-layout-cell u-left-cell u-size-20 u-size-20-md u-white u-layout-cell-1">
                        <div className="u-container-layout u-container-layout-1">
                        <img className="u-expanded-width u-image u-image-1" src="/called_images/c32438b58444b511f6eedfee2795f7b4.jpeg"/>
                        <p className="u-text u-text-2">Snapping Shrimp 'Dinner Bell' May Tell Gray Whales When to Eat</p>
                        </div>
                    </div>
                    <div className="u-align-left u-container-style u-layout-cell u-size-20 u-size-20-md u-white u-layout-cell-2">
                        <div className="u-container-layout u-container-layout-2">
                        <img className="u-expanded-width u-image u-image-2" src="/called_images/cd53f9dd09091d2ad91e2c4d2a7092be.jpeg"/>
                        <p className="u-text u-text-3">Get Up Close With Wildlife in Mexico's Magdalena Bay</p>
                        </div>
                    </div>
                    <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-20 u-size-20-md u-white u-layout-cell-3">
                        <div className="u-container-layout u-container-layout-3">
                        <img className="u-expanded-width u-image u-image-3" src="/called_images/250ab14c9bea31df467ae4d07e3dc9e0.jpeg"/>
                        <p className="u-text u-text-4">Where It’s Okay to Pet the Whales</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="u-align-left u-clearfix u-grey-90 u-section-8" id="carousel_0862">
            <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <h2 className="u-custom-font u-font-ubuntu u-text u-text-1">Our Mission</h2>
                <h4 className="u-text u-text-2">Forest Therapy is a research-based framework for supporting healing and wellness through immersion in forests and other natural environments. Forest Therapy is inspired by the Japanese practice of Shinrin-Yoku, which translates to "forest bathing." Studies have demonstrated a wide array of health benefits, especially in the cardiovascular and immune systems, and for stabilizing and improving mood and cognition </h4>
                <a href="https://nicepage.online" className="u-active-none u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-active-white u-text-hover-white u-btn-1">learn more</a>
            </div>
            </section>
            <section className="u-align-left u-clearfix u-section-9" id="carousel_d6dc">
            <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xl u-valign-middle-xs u-sheet-1">
                <div className="u-clearfix u-expanded-width u-gutter-32 u-layout-wrap u-layout-wrap-1">
                <div className="u-gutter-0 u-layout">
                    <div className="u-layout-row">
                    <div className="u-size-30 u-size-60-md">
                        <div className="u-layout-col">
                        <div className="u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-1" data-image-width="701" data-image-height="876">
                            <div className="u-container-layout u-valign-middle u-container-layout-1"></div>
                        </div>
                        <div className="u-container-style u-layout-cell u-left-cell u-size-40 u-layout-cell-2">
                            <div className="u-container-layout u-valign-bottom-xs u-container-layout-2">
                            <h1 className="u-custom-font u-font-ubuntu u-text u-text-1">Wildlife</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="u-size-30 u-size-60-md">
                        <div className="u-layout-col">
                        <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-40 u-layout-cell-3">
                            <div className="u-container-layout u-container-layout-3">
                            <h2 className="u-custom-font u-font-montserrat u-text u-text-2">Africa is home to many of the world's most famous fauna </h2>
                            <p className="u-text u-text-3">The list is intended not only to showcase the incredible variety of life on Earth but to “bring attention to the biodiversity crisis and the species explorers who are doing something about it,”&nbsp;https://nicepage.com/</p>
                            <a href="https://nicepage.com/templates" className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-btn-rectangle u-button-style u-none u-text-active-white u-btn-1">learn more</a>
                            </div>
                        </div>
                        <div className="u-align-right u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-2" data-image-width="900" data-image-height="600">
                            <div className="u-container-layout u-container-layout-4"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="u-clearfix u-gutter-30 u-layout-wrap u-layout-wrap-2">
                <div className="u-gutter-0 u-layout">
                    <div className="u-layout-row">
                    <div className="u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-3">
                        <div className="u-container-layout u-valign-middle u-container-layout-5"></div>
                    </div>
                    <div className="u-container-style u-image u-layout-cell u-size-20 u-image-4">
                        <div className="u-container-layout u-valign-middle u-container-layout-6"></div>
                    </div>
                    <div className="u-container-style u-image u-layout-cell u-right-cell u-size-20 u-image-5">
                        <div className="u-container-layout u-valign-middle u-container-layout-7"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <section className="u-clearfix u-grey-90 u-section-10" id="carousel_b96d">
            <div className="u-clearfix u-sheet u-sheet-1">
                <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
                <div className="u-layout">
                    <div className="u-layout-col">
                    <div className="u-size-30">
                        <div className="u-layout-row">
                        <div className="u-size-30">
                            <div className="u-layout-col">
                            <div className="u-container-style u-layout-cell u-left-cell u-size-60 u-layout-cell-1">
                            </div>
                            </div>
                        </div>
                        <div className="u-size-30">
                            <div className="u-layout-col">
                            <div className="u-container-style u-layout-cell u-right-cell u-size-60 u-layout-cell-2">
                                <div className="u-container-layout u-container-layout-2">
                                <div className="u-form u-form-1">
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="u-size-30">
                        <div className="u-layout-row">
                        <div className="u-container-style u-image u-layout-cell u-left-cell u-size-15 u-size-30-md u-image-1">
                            <div className="u-container-layout u-container-layout-3"></div>
                        </div>
                        <div className="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-4">
                            <div className="u-container-layout u-valign-middle u-container-layout-4">
                            <h3 className="u-custom-font u-font-ubuntu u-text u-text-default u-text-4">We are looking forward to start a project with you! </h3>
                            </div>
                        </div>
                        <div className="u-container-style u-layout-cell u-size-15 u-size-30-md u-layout-cell-5">
                            <div className="u-container-layout u-valign-middle u-container-layout-5">
                            <p className="u-custom-font u-heading-font u-text u-text-default u-text-5">Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet convallis erat. Class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus nec dolor suscipit faucibus.</p>
                            <a href="https://nicepage.com/k/test-website-templates" className="u-active-none u-border-2 u-border-active-palette-1-base u-border-hover-palette-1-base u-border-no-left u-border-no-right u-border-no-top u-border-white u-btn u-btn-rectangle u-button-style u-hover-none u-none u-text-active-white u-text-hover-white u-btn-2">learn more</a>
                            </div>
                        </div>
                        <div className="u-container-style u-image u-layout-cell u-right-cell u-size-15 u-size-30-md u-image-2" data-image-width="1280" data-image-height="853">
                            <div className="u-container-layout u-container-layout-6"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home