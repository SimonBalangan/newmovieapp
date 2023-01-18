import React, {useState, useEffect, useCallback} from 'react'
import { client } from '../../client';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Ratio from 'react-bootstrap/Ratio';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Trailer from './Trailer';


const Test = () => {
    const [about, setAbout] = useState({});
    const [isAboutLoading, setIsAboutLoading] = useState(false);
    
    const cleanUpAbout = useCallback((rawData) => {
          const { sys, fields } = rawData
          const { id } = sys
          const aboutTitel = fields.filmTitel
          const aboutBG = fields.background.fields.file.url
          const aboutPageTwoScript = fields.pageTwoScript
          const aboutFilmCover = fields.filmCover.fields.file.url 
          const aboutDirector = fields.director
          const aboutTrailer = fields.trailer.fields.file.url
          const aboutInfo = fields.info
          const aboutActors = fields.actors
          const cleanAbout = { id, aboutTitel, aboutPageTwoScript, aboutDirector, aboutTrailer, aboutFilmCover, aboutBG, aboutInfo, aboutActors }
              
          setAbout(cleanAbout)
  },[])
  
    const getAbout = useCallback(async () => {
      setIsAboutLoading(true)
      try {
          const response = await client.getEntry('7goGdE1XWPIouWFJt2uLJF')
          console.log(response);
              if(response) {
                  cleanUpAbout(response)
              } else {
                  setAbout({})
              }

      } catch (error) {
          console.log(error);
         
      }
    }, [cleanUpAbout]);
  
    useEffect(() => {
      getAbout()
    }, [getAbout]);
    
   
  
  
  const { aboutTitel, aboutPageTwoScript, aboutFilmCover, aboutBG, aboutDirector, aboutTrailer, aboutInfo, aboutActors } = about


  return (
    <>
    <div className='background' style={{background: `url(${aboutBG})`}}>
    {/* <img src={aboutBG} alt={aboutTitel} /> */}
    </div>
    <Card className="bg-dark text-white">
      <Card.Img className='BgImage' src={aboutBG} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{aboutTitel}</Card.Title>
        <Card.Text>
            {aboutPageTwoScript}
        </Card.Text>
        <Trailer />
        
        <Card.Text>
        <Card className='cardCover' style={{ width: '18rem' }}  >
                    <Card.Img variant="top" src={aboutFilmCover} alt={aboutTitel} />
            
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{aboutInfo} </ListGroup.Item>
                        <ListGroup.Item>Director: {aboutDirector}</ListGroup.Item>
                        <ListGroup.Item>Actors: {aboutActors} </ListGroup.Item>
                    </ListGroup>
                
                </Card>
        </Card.Text>
      </Card.ImgOverlay>
                <div style={{ width: 660, height: 'auto' }}>
                    <Ratio aspectRatio="16x9">
                        <embed type="image/svg+xml" src={aboutTrailer} />
                    </Ratio>
                </div>
    </Card>
    
    {/* <Container className='container'>
        <Row className='row'>
            <Col className='col'>
            </Col>
        </Row>
    
        <Row className='row'>
            <Col className='col'>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={aboutFilmCover} alt={aboutTitel} />
            
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Director: {aboutDirector}</ListGroup.Item>
                        <ListGroup.Item>Info</ListGroup.Item>
                        <ListGroup.Item>Actors</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Back</Card.Link>
                        <Card.Link href="#">Next</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='col'>
                <div style={{ width: 660, height: 'auto' }}>
                    <Ratio aspectRatio="16x9">
                        <embed type="image/svg+xml" src={aboutTrailer} />
                    </Ratio>
                </div>
            </Col>
        </Row>
    
        
        
        
    </Container> */}
    </>
  );
}

export default Test;