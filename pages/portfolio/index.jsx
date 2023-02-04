import Head from "next/head"
import Image from "next/legacy/image"

import Container from "../Components/container"
import PortfolioCss from '../../styles/portfolio.module.css'

import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"

export async function getServerSideProps () {
    let res = await fetch("http://localhost:3000/api/portfolio-api")
    let data = await res.json()

    return {
        props : {
            data
        }
    }
}

const portfolio = ({data}) => {

    const css = {width: "100%", height: "auto" }

    return (
        <>

            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <Container>
                <div id={PortfolioCss.porfolio_page}>
                    <h1 className="text-center">Our Showcase. A Glimpse of our Success Story.</h1>
                    <p className="text-center">We differentiate ourselves from other image editing companies with our unique approach to split the editing process into objective and subjective steps.</p>

                    <ul className="nav justify-content-center nav-pills mb-3 mt-5" id="pills-tab" role="tablist">

                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-bgr" type="button" role="tab" aria-controls="pills-bgr" aria-selected="false">Background Removal</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-cps" type="button" role="tab" aria-controls="pills-cps" aria-selected="false">Clipping Path</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-ims" type="button" role="tab" aria-controls="pills-ims" aria-selected="true">Image Masking</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-prs" type="button" role="tab" aria-controls="pills-prs" aria-selected="false">Photo Retoching</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-shs" type="button" role="tab" aria-controls="pills-shs" aria-selected="false">Shadow</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-vcs" type="button" role="tab" aria-controls="pills-vcs" aria-selected="true">Vector Conversion</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-mcp" type="button" role="tab" aria-controls="pills-mcp" aria-selected="false">Multi-Clipping Path</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-gms" type="button" role="tab" aria-controls="pills-gms" aria-selected="false">Ghost Manneqine</button>
                        </li>

                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-ccc" type="button" role="tab" aria-controls="pills-ccc" aria-selected="false">Color Change</button>
                        </li>

                    </ul>

                    <div className="tab-content text-center" id="pills-tabContent">

                        <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-home-tab">

                            <div className="row">
                                
                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                <div className="col-lg-4 mt-3">
                                                    <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                </div>
                                            </>
                                        )
                                    })
                                }

                            </div>

                        </div>

                        <div className="tab-pane fade" id="pills-bgr" role="tabpanel" aria-labelledby="pills-profile-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "background removal" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>
                        
                        <div className="tab-pane fade" id="pills-cps" role="tabpanel" aria-labelledby="pills-contact-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "clipping path" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>
                        
                        <div className="tab-pane fade" id="pills-ims" role="tabpanel" aria-labelledby="pills-home-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "image masking" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>

                        <div className="tab-pane fade" id="pills-prs" role="tabpanel" aria-labelledby="pills-profile-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "photo retouching" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>
                        
                        <div className="tab-pane fade" id="pills-shs" role="tabpanel" aria-labelledby="pills-contact-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "shadow" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>
                        
                        <div className="tab-pane fade" id="pills-vcs" role="tabpanel" aria-labelledby="pills-home-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "vector conversion" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>

                        <div className="tab-pane fade" id="pills-mcp" role="tabpanel" aria-labelledby="pills-profile-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "multi clipping path" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>
                        
                        <div className="tab-pane fade" id="pills-gms" role="tabpanel" aria-labelledby="pills-contact-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "ghost mannequin" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>

                        <div className="tab-pane fade" id="pills-ccc" role="tabpanel" aria-labelledby="pills-contact-tab">

                            <div className="row">

                                {
                                    data.map((items) => {
                                        return (
                                            <>
                                                {
                                                    items.service === "color change" ? 
                                                    <div className="col-lg-4 mt-3">
                                                        <Image width="250" height="190" layout="responsive" style={css} src={items.img} alt="" />
                                                    </div> : ""
                                                }
                                            </>
                                        )
                                        
                                    })
                                }

                            </div>

                        </div>

                    </div>
                </div>
            </Container>

            <Footer />
        </>
    )
}

export default portfolio