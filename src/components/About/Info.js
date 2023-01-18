import React, {useState, useEffect, useCallback} from 'react'
import { client } from '../../client';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Stack } from 'react-bootstrap';



const Info = () => {
    const [info, setInfo] = useState({});
    const [isInfoLoading, setIsInfoLoading] = useState(false);
    
    const cleanUpInfo = useCallback((rawData) => {
          const { sys, fields } = rawData
          const { id } = sys

          const infoDirector = fields.director
          const infoPageTwoScript = fields.pageTwoScript
          const infoInfo = fields.info
          const infoActors = fields.actors
          const cleanInfo = { id, infoDirector, infoInfo, infoActors, infoPageTwoScript }
              
          setInfo(cleanInfo)
  },[])
  
    const getInfo = useCallback(async () => {
      setIsInfoLoading(true)
      try {
          const response = await client.getEntry('7goGdE1XWPIouWFJt2uLJF')
          console.log(response);
              if(response) {
                  cleanUpInfo(response)
              } else {
                  setInfo({})
              }

      } catch (error) {
          console.log(error);
         
      }
    }, [cleanUpInfo]);
  
    useEffect(() => {
      getInfo()
    }, [getInfo]);
    
    const { infoDirector, infoInfo, infoActors, infoPageTwoScript } = info
    
        const popover = (
            <Popover id="popover-basic">
              <Popover.Header as="h3">Information</Popover.Header>
              <Popover.Body>
              <div className='infoPageScript'>
                {infoPageTwoScript}
              </div>
              <div  className='infoPageScript'>
                    <strong>{infoInfo}</strong>
                </div> 
                <div  className='infoPageScript'>
                    <strong>Director:</strong> {infoDirector} 
                </div>
                <div  className='infoPageScript'>
                <strong>Actors:</strong> {infoActors}
                </div>
                <div>
                <Stack gap={2} className="row-md-1 mx-auto">
                <Button className='button' variant="dark">Trailer</Button></Stack></div>
              </Popover.Body>
            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Stack gap={2} className="row-md-1 mx-auto">
              <Button  className='button' variant="dark">Information</Button>
            </Stack>
            </OverlayTrigger>
          );
    
          
  
  
  

  return (
    <div>
        <Example />
    </div>
  
    );}

    export default Info;