import React, {useState, useEffect, useCallback} from 'react'
import { client } from '../../client';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardGroup from 'react-bootstrap/CardGroup';
import Information from '../About/Trailer';

// const getHTMLData = (rawData) => {
//     const htmlString = marked(rawData)
//     return htmlString
// }



const Horror = () => {
  const [home, setHome] = useState({});
  const [isHomeLoading, setIsHomeLoading] = useState(false);
  
  const cleanUpHome = useCallback((rawData) => {
        const { sys, fields } = rawData
        const { id } = sys
        const homeGenre = fields.genre
        const homeTitel1 = fields.titleMovie1
        const homeImage1 = fields.movie1.fields.file.url
        const homeTitel2 = fields.titleMovie2
        const homeImage2 = fields.movie2.fields.file.url
        const homeTitel3 = fields.titleMovie3
        const homeImage3 = fields.movie3.fields.file.url
        const homeTitel4 = fields.titleMovie4
        const homeImage4 = fields.movie4.fields.file.url
        const homeTitel5 = fields.titleMovie5
        const homeImage5 = fields.movie5.fields.file.url
        const cleanHome = { id, homeGenre, homeTitel1, homeImage1, homeTitel2, homeImage2, homeTitel3, homeImage3, homeTitel4, homeImage4, homeTitel5, homeImage5}
            
        setHome(cleanHome)
},[])

  const getHome = useCallback(async () => {
    setIsHomeLoading(true)
    try {
        const response = await client.getEntry('7jCR8puEi7fnWWB5Ggef9Q')
        console.log(response);
            if(response) {
                cleanUpHome(response)
            } else {
                setHome({})
            }

        // setIsAboutLoading(false)
    } catch (error) {
        console.log(error);
        // setIsAboutLoading(false)
    }
  }, [cleanUpHome]);

  useEffect(() => {
    getHome()
  }, [getHome]);



  const { homeGenre, homeTitel1, homeImage1, homeTitel2, homeImage2, homeTitel3, homeImage3, homeTitel4, homeImage4, homeTitel5, homeImage5  } = home



  return (
    <>
    <div>
      <h4>{homeGenre}</h4>
    </div>
    <CardGroup className='cardGroup'> 

      <Card className="bg-dark text-white">
        <Card.Img className='cardImg' variant="top" src={homeImage1} />
        <Card.Body>
          <Card.Title><p>{homeTitel1}</p></Card.Title>
          <Information />
        </Card.Body>
        
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img className='cardImg' variant="top" src={homeImage2} />
        <Card.Body>
          <Card.Title><p>{homeTitel2}</p></Card.Title>
          <Information />
        </Card.Body>
        
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img className='cardImg' variant="top" src={homeImage3} />
        <Card.Body>
          <Card.Title><p>{homeTitel3}</p></Card.Title>
          <Information />
        </Card.Body>
        
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img className='cardImg' variant="top" src={homeImage4} />
        <Card.Body>
          <Card.Title><p>{homeTitel4}</p></Card.Title>
          <Information />
        </Card.Body>
        
      </Card>

      <Card className="bg-dark text-white">
        <Card.Img className='cardImg' variant="top" src={homeImage5} />
        <Card.Body>
          <Card.Title><p>{homeTitel5}</p></Card.Title>
          <Information />
        </Card.Body>
        
      </Card>

    </CardGroup>
    </>
    
    
  );
}

export default Horror;