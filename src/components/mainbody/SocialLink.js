import React from 'react'
import { Card, Col,Row,Image } from 'react-bootstrap'



export default function SocialLink(props){
    const linkurl =decodeURIComponent(props.url);
    const name = titleCase(props.name);
    const imglink = props.link.toLowerCase();

    function titleCase(str) {
        return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
      }
    return(
     
        <a target="_blank" href={linkurl} rel="noopener noreferrer" >
            <Card className="mt-2">
                <Card.Body>
                     <Row>
                       <Col>
                            <Image src ={process.env.PUBLIC_URL+'/img/'+imglink+'.svg'} fluid />
                        </Col>
                        <Col className="my-auto">{name}</Col>
                </Row>
            </Card.Body>
            </Card>
        </a>
        
    )
}