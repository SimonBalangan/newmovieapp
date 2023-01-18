import React, {useState, useEffect, useCallback} from 'react'
// import marked from 'marked'
import { client } from '../../client';
// import Loader from '../Loader/Loader';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// const getHTMLData = (rawData) => {
//     const htmlString = marked(rawData)
//     return htmlString
// }


const About = () => {
  const [about, setAbout] = useState({});
  const [isAboutLoading, setIsAboutLoading] = useState(false);
  
  const cleanUpAbout = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const aboutTitel = fields.filmTitel
        const aboutBG = fields.background.fields.file.url
        // const aboutContent = getHTMLData(fields.content)
        const aboutPageTwoScript = fields.pageTwoScript
        const aboutFilmCover = fields.filmCover.fields.file.url 
        const aboutDirector = fields.director
        const aboutTrailer = fields.trailer.fields.file.url
        const cleanAbout = { id, aboutTitel, aboutPageTwoScript, aboutDirector, aboutTrailer, aboutFilmCover, aboutBG }
            
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

        // setIsAboutLoading(false)
    } catch (error) {
        console.log(error);
        // setIsAboutLoading(false)
    }
  }, [cleanUpAbout]);

  useEffect(() => {
    getAbout()
  }, [getAbout]);
  
  // if (isAboutLoading) {
  //   return <Loader />
  // }


const { aboutTitel, aboutPageTwoScript, aboutFilmCover, aboutBG, aboutDirector, aboutTrailer } = about

    return (
      <Container className='bg'>
      
          <Row className='rowParent'>
            <div className = "head-text">
                <div className = "head-image">
                    <img className='bg' src={aboutBG} alt={aboutTitel} /> 
                </div>
                <div class='text-on-image'>
                    <h2 className='titelText'>{aboutTitel}</h2>
                </div>
            </div>
            <Col className='colParent'>
                    <Row className='rowChild'>
                          <Col className='colChild'> 
                              <img src={aboutFilmCover} alt={aboutTitel} /> COVER PICTURE 
                          </Col>
                          <Col className='colChild'>
                          <div>{aboutPageTwoScript}</div> DESCRIPTION
                          </Col>
                    </Row>
                      
                    <Row className='rowChild'>
                        <Col className='colChild'>
                              {aboutTrailer &&  <video className='trailer' width="320" height="240" controls>
                              <source src={aboutTrailer}/></video>} TRAILER
                        </Col>
                        <Col className='colChild'>
                              <h4 className='infoText'>{aboutDirector}</h4> DIRECTOR
                        </Col>
                        <Col className='colChild'>
                              ACTORS
                        </Col>
                    </Row>
              </Col>
          </Row>
      </Container>
);
}
        
export default About        
        
//         <section className='about' id='about'>
//                 <div className='parent'>
//                     <div className='column'>
//                     <Button /> 
//                         <h2 className='titelText'>{aboutTitel}</h2>
//                         <div>{aboutPageTwoScript}</div>
//                     </div>
//                     <div className='column'>
//                         <div className='imgBg'>
//                             <img src={aboutBG} alt={aboutTitel} />
//                         </div>
//                     </div>
//                     <div className='column'>
//                         <div className='imgCover'>
//                             <img src={aboutFilmCover} alt={aboutTitel} />
//                             <h4 className='infoText'>{aboutDirector}</h4>
//                         </div>
//                     </div>
//                     <div className='column'>
//                         <div className='vidWrap'>
//                           {aboutTrailer &&  <video className='trailer' width="320" height="240" controls>
//                           <source src={aboutTrailer}/></video>}
//                         </div>
//                     </div>
//                 </div>
//         </section>
//   )
// };

