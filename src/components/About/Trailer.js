import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Ratio from 'react-bootstrap/Ratio';
import { Stack } from 'react-bootstrap';




const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Information</Popover.Header>
    <Popover.Body>Hello
    

        <div style={{ width: 660, height: 'auto' }}>
                    <Ratio aspectRatio="16x9">
                        <embed type="image/svg+xml" src='' />
                    </Ratio>
                </div>
    </Popover.Body>
  </Popover>
);

const Information = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Stack gap={2} className="row-md-1 mx-auto">
              <Button  className='button' variant="dark">Information</Button>
            </Stack>
  </OverlayTrigger>
);

export default Information;

