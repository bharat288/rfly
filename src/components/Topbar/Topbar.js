import React from 'react'
import { Navbar, Image } from 'react-bootstrap'


export default function Topbar(props){
    const imgUrl = decodeURIComponent(props.logo)
    //console.log(imgUrl);
    //<img alt="" src={imgUrl} width="120" className="d-inline-block align-center"/>
    return(
        <>
            <Navbar bg="light" sticky="top">
                <Navbar.Brand>
                    
                    <Image src={imgUrl} width="120" fluid className="d-inline-block align-center" />
                    {' '}
                    {props.name}</Navbar.Brand>
            </Navbar>
        </>
    )
}