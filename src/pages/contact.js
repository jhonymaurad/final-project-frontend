import React from 'react';

import {Container, Row, Col} from 'reactstrap';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
    
const items = [
    {
        src: 'https://apprecs.org/ios/images/app-icons/256/b0/1156908976.jpg',
        altText: 'member1',
        name: 'Edward Biswas',
        title: 'Leader',
        phone: '111-111-1111',
        email: 'verylongemail@PetConnect.com'
    },
    {
        src: 'https://apprecs.org/ios/images/app-icons/256/b0/1156908976.jpg',
        altText: 'member2',
        name: 'Ba Nguyen',
        title: 'Secretary',
        phone: '222-222-2222',
        email: 'verylongemail@PetConnect.com'
    },
    {
        src: 'https://apprecs.org/ios/images/app-icons/256/b0/1156908976.jpg',
        altText: 'member3',
        name: 'Jhony Maurad',
        title: 'Event planner',
        phone: '333-333-3333',
        email: 'verylongemail@PetConnect.com'
    },
    {
        src: 'https://apprecs.org/ios/images/app-icons/256/b0/1156908976.jpg',
        altText: 'member4',
        name: 'Adelin Rivas',
        title: 'General Manager',
        phone: '444-444-4444',
        email: 'verylongemail@PetConnect.com'
    },
    {
        src: 'https://apprecs.org/ios/images/app-icons/256/b0/1156908976.jpg',
        altText: 'member5',
        name: 'Rafael Perez',
        title: 'General Manager',
        phone: '555-555-5555',
        email: 'verylongemail@PetConnect.com'
    }
    ];
    
const Contact = () => {
    const ContactLayout = () => {
        return (
            <Container>
                <Row>
                    <Col 
                    style={{
                        color:  'rgb(223, 105, 223)',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }} 
                    sm="12" md={{ size: 6, offset: 3 }}>
                        Contact Us
                    </Col>
                </Row>
                <Row>
                    {items.map((item,index) => {
                        return (
                            <Col key={item.name+index} sm="3">
                                <Card 
                                style={{
                                    background: "rgb(223, 105, 223)",
                                    color: "white",
                                    marginTop: "0.75rem",
                                    minHeight: "24rem",
                                    border: '1px solid rgb(223, 105, 223)'
                                    }}>
                                    <CardImg top width="100%" src={item.src} alt={item.altText} />
                                    <CardBody
                                     style={{paddingLeft: "0.5rem",
                                            paddingRight: "0.5rem"
                                            }}>
                                        <CardTitle style={{fontWeight:'bold'}}>{item.name}</CardTitle>
                                        <CardSubtitle>{item.title}</CardSubtitle>
                                        <CardText>{item.phone}</CardText>
                                        <CardText style={{fontSize:"0.8rem"}}>{item.email}</CardText>
                                    </CardBody>
                                </Card>  
                            </Col>
                        )      
                    })}
                </Row>
            </Container>
        );
    };
    return (
        <div style={{padding: "5rem"}}>
            {ContactLayout()}
        </div>
        
    );
    
}
export default Contact;