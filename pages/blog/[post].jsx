import React, {useState, useEffect} from "react"
import Image from "next/legacy/image"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

import Container from "../Components/container"
import BlogCss from '../../styles/blog.module.css'

import Navbar from "../Components/Navbar"
import Footer from "../Components/footer"


export async function getServerSideProps () {
    const res = await fetch(`http://localhost:3000/api/blog`)
    const data = await res.json()

    return {
        props : {
            data
        }
    }
}


const Post = ({data}) => {

    const css = {width: "100%", height: "auto" }

    const router = useRouter().query    

    return (
        
        <>

            <Head>
                <title>Blog</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />

                <Container>
                    <div id={BlogCss.signle_blog_page}>
                        <div className="container">
                            {
                                data.allBlog.map((items) => {
                                    return (
                                        
                                        router.post === items.blogSlug ? 
                                            <div>
                                                <Image width="200" height="100" layout="responsive" style={css} src={items.blogImg} alt="" />
                                                <h1 className="my-4">{items.blogTitle}</h1>
                                                <h3 className="my-3">{items.blogSubTitle}</h3>
                                                <p>{items.blogPara}</p> 
                                            </div> : ""
                                        
                                    )
                                    
                                }) 
                            }
                        </div>
                    </div>
                </Container>

            <Footer />
        
        </>
    )
}

export default Post


// data.allBlog.filter((items) => {
//     if ( router.post === items.blogSlug ) {
//         console.log(items);
//     }
// }