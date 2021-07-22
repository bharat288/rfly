import React,{useEffect, useState} from 'react'
import MainBody from './mainbody/MainBody'
import Topbar from './Topbar/Topbar'
import RflyServices from "../services/RflyServices";
import {useParams} from "react-router-dom"
import {Helmet} from 'react-helmet'

export default function Home(){
    const {url1} = useParams();
    const initialHomeState ={
        Name : "Reviews On The Fly",
        logoUrl1: null,
        logoUrl2: null,
        isenabled:"0",
        links : [
            {
                "linkName":"facebook",
                "linkType":"facebook",
                "linkURL1":"www.facebook.com",
            },
            {
                "linkName":"Twitter",
                "linkType":"twitter",
                "linkURL1":"www.twitter.com",
            },
            {
                "linkName":"google",
                "linkType":"google",
                "linkURL1":"www.google.com",
            },
        ],
    };

    const [HomeValue, setHomeValue] = useState(initialHomeState)

    useEffect(()=>{
        //console.log("value of url :"+url1)
        retrieveData();
       
    },[]);
   
    const retrieveData = ()=>{
        const dataval = {url:url1};
       // console.log('retrievedata run');
        RflyServices.getdata(dataval)
        .then(response=>{
            const data = response.data
            setHomeValue(data.data)
        })
        .catch(e=>{
            console.log(e);
        })


        
    };
    return(
        <>
            <Helmet>
                <title>{HomeValue.Name}</title>
            </Helmet>
            <Topbar logo={HomeValue.logoUrl1} name={HomeValue.Name}/>
            <MainBody 
                links ={HomeValue.links}
            />
        </>
    )
}
   