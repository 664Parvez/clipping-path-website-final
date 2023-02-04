import Head from "next/head"
import Link from "next/link"

import Container from "../Components/container"
import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"

import faqCss from "../../styles/faq.module.css"

export async function getServerSideProps () {
    const res = await fetch ("http://localhost:3000/api/faq")
    const data = await res.json()

    return {
        props : {
            data
        }
    }
}

const faq = ({data}) => {
    return (
        <>

            <Head>
                <title>FAQ</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

            <Container>

                <div id={faqCss.first_section}>

                    <h1 className="text-center">Coming Soon . . . .</h1>

                    <div className="row">
                        <div className="col-lg-6">

                            {
                                data.map((items) => {
                                    return (
                                        <>            
                                            {/* <div class="accordion accordion-flush" id="accordionFlushExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id={items.idFaq}>
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={items.idFaq} aria-expanded="false" aria-controls={items.idTarget}>
                                                        {items.faqTitle}
                                                    </button>
                                                    </h2>
                                                    <div id={items.idFaq} class="accordion-collapse collapse" aria-labelledby={items.idFaq} data-bs-parent="#accordionFlushExample">
                                                        <div class="accordion-body">{items.faqPara}</div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </>
                                    )
                                })
                            }   

                        </div>
                    </div>
                    
                </div>
                
            </Container>

            <Footer />
        </>
    )
}

export default faq