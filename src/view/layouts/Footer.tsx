import React from 'react'

const Footer = () => {
  return (
      <div style={{marginTop: "40px"}}>
          <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3"  style={{ width: "40%", margin: '0 auto' }}>
                    <h5 className="text-uppercase">Code</h5>
                    <p >Collaboration and continuous improvement are values I prioritize.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Contact</h5>
                    <ul className="list-unstyled">
                        <li><a href='mailto:"junmannnyoon@gmail.com"'>✉️ junmannnyoon@gmail.com</a></li>
                        <li><a href='tel:+821020564240'>📞 +821020564240</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://www.linkedin.com/in/junho-yoon-junmannn-kyurasi/">LinkedIn</a></li>
                        <li><a href="https://kyurasi.tistory.com/">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer