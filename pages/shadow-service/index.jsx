import Container from '../Components/container'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Link from 'next/link';
import Head from 'next/head';
import Image from "next/legacy/image"

import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
import ServiceCss from '../../styles/service.module.css'
import Form from "../Components/submit_form"

export async function getServerSideProps () {
    const response = await fetch("https://clipping-path-website-final.vercel.app/api/services/shadow-service")
    const data = await response.json()

    return {
        props : {
            data
        }
    }

}


const Services = ({ data }) => {

    const css = {width: "100%", height: "auto" }

    console.log(data);

    return(
        <>

            <Navbar/>

            <Container>

            <Head>   
                <title>Shadow Service</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" /> 
            </Head>

                    <div id={ServiceCss.heading_section}>
                        <div className="row">
                            <div className="col-lg-7">
                                <h1>{data.firstTitle}</h1>
                                <p>{data.firstPara}</p>

                                <h4 id={ServiceCss.get_trial}>{data.trialTitle}</h4>

                                <div id={ServiceCss.certificate_section}>
                                    <div className="row">

                                        {
                                            data.trialFeature.map((items) => {
                                                return (
                                                    <>    
                                                        <div className="col-lg-4">
                                                            <div className="row">
                                                                <div className="col-3">
                                                                    <Image width="130" height="130" layout="responsive" style={css} src={items.img} alt="" />
                                                                </div>
                                                                <div className="col-9">
                                                                    <h4>{items.number}</h4>
                                                                    <p>{items.para}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                        
                                    </div>
                                </div>

                                <Link href="/get-a-quote" className='btn btn-lg mt-4' id={ServiceCss.get_start_btn}>Get Started <i class="fa-solid fa-arrow-right"></i></Link>
                            </div>

                            <div className="col-lg-5">
                                <div className='m-auto' id={ServiceCss.compareImages}>
                                    <ReactCompareSlider 
                                        itemOne={<ReactCompareSliderImage className={ServiceCss.imageOne} src={data.compareImgOne} srcSet={data.compareImgOne} alt="Image one" />}
                                        itemTwo={<ReactCompareSliderImage className={ServiceCss.imageTwo} src={data.compareImgTwo} srcSet={data.compareImgTwo} alt="Image two" />}
                                    />
                                </div>
                            </div>
                        </div>

                        <div id={ServiceCss.client_impress_section}>
                            <div className="row my-5">
                                <div className="col-lg-6 text-end">
                                    <h3 id={ServiceCss.impress_customer}>{data.secondTitle}</h3>
                                </div>
                                <div className="col-lg-6">
                                    <p>{data.secondPara}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ServiceCss.professional_photo_section_one}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Image width="200" height="140" layout="responsive" style={css} src={data.thirdImg} alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <h2 className="heading">{data.thirdTitle}</h2>
                                    <p>{data.thirdPara}</p>
                                    <ul>
                                        {
                                            data.thirdPoint.map((items) => {
                                                return (
                                                    <>
                                                        <li><i className="fa-solid fa-check"></i> {items.point}</li>
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                    <p>{data.thirdParaTwo}</p>
                                </div>
                            </div>
                    </div>

                    <div className={ServiceCss.professional_photo_section_two}>
                        
                            <h2 className="text-center heading">{data.forthTitle}</h2>
                            <p className="text-center">{data.forthPara}</p>

                            <div className="row text-center" id={ServiceCss.service_two_div}>
                                
                                {
                                    data.forthDiv.map((items) => {
                                        return (
                                            <>            
                                                <div className="col-lg-4">
                                                    <div className={ServiceCss.service_div}>
                                                        <h3>{items.divTitle}</h3>
                                                        <p>{items.divPara}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>

                    </div>


                    <div id={ServiceCss.our_service_portfolio} className='text-center'>
                        <h3>{data.fifthTitle}</h3>
                        <p>{data.fifthPara}</p>

                        <div className="row">
                            {
                                data.fifthPortfolioImg.map((items) => {
                                    return (
                                        <>    
                                            <div className="col-lg-3">
                                                <Image width="200" height="140" layout="responsive" style={css} id={ServiceCss.portfolio_img} src={items.img} alt="" />
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                        <Link href="/portfolio" className='btn btn-lg' id={ServiceCss.portfolio_btn}>See More Example <i class="fa-solid fa-arrow-right"></i></Link>
                    </div>


                    <div id={ServiceCss.why_you_need_service}>
                        <h3 className='text-center'>{data.sixthTitle}</h3>

                        <div className="row">
                            <div className="col-lg-7">
                                <h4>{data.sixthLeftTitle}</h4>
                                <p>
                                    {data.sixthLeftPara}
                                </p>
                            </div>
                            <div className="col-lg-5">
                                <Image width="200" height="180" layout="responsive" style={css} src={data.sixthImg} alt="" />
                            </div>
                        </div>
                    </div>


                    <div id={ServiceCss.our_pricing}>
                        <div className="mt-5" id={ServiceCss.single_price_div}>
                            <div className="col-lg-12">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-2 col-md-3">
                                        <div className={ServiceCss.clip_img} id={ServiceCss.price_img_div}>
                                            <Image width="200" height="200" layout="responsive" style={css} src={data.priceImg} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-7 clipping">
                                        <h2>{data.priceTitle}</h2>
                                        <p>{data.pricePara}</p>

                                        <Link href="">Our More Pricing</Link>
                                    </div>
                                    <div className="col-lg-2 col-md-2 text-center" id={ServiceCss.price_part}>
                                        <p className="mb-0">{data.priceUpText}</p>
                                        <h3 class="mb-0 price"><span>$</span>{data.price}</h3>
                                        <p class="mb-0">{data.pricePerImg}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <Form />


            </Container>

            <Footer />
        </>
    )
}

export default Services