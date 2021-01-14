import React from 'react'
import {Col, Container,Row} from 'react-bootstrap'

import SocialLink from './SocialLink';

export default function MainBody(props){
    
       return(
        <>
            <Container fluid>
                <Row className="justify-content-center mt-4 mb-2">
                    <Col className="text-center">
                    <h4>Thank you for your visit. Please Rate us!</h4>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                  
                    <Col  lg="2" xs="8" className="text-center">
                            {
                                props.links.map((item)=>
                                    <SocialLink url={item.linkURL1} name={item.linkName} link ={item.linkType}/>
                                )
                                
                            }
                    </Col>
                  
                   
                    
                </Row>
            </Container>
        </>
    )
}