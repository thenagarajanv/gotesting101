import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './NavBar';

function AskLead(){
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        rollNumber: '',
        memberNumber: '',
        degree: '',
        department: '',
        domain: '',
        sponsorship: '',
        collegeEmail: '',
        eventType: '',
        description: '',
      });
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]:   
     value }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();   
    
    
        // Form validation (optional but recommended)
        if (!formData.firstName || !formData.lastName || !formData.collegeEmail) {
          alert('Please fill in all required fields (First Name, Last Name, College Email)');
          return;
        }
    
        try {
          const response = await fetch('/api/submit-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error('Failed to   submit lead. Please try again later.');
          }

          setIsSubmitted(true);
          setFormData({ // Clear form data after successful submission
            firstName: '',
            lastName: '',
            rollNumber: '',
            memberNumber: '',
            degree: '',
            department: '',
            domain: '',
            sponsorship: '',
            collegeEmail: '',
            eventType: '',
            description: '',
          });
        } catch (error) {
          console.error('Error submitting lead:', error);
          alert('An error occurred. Please try again later.');
        }
      };
  return (
    <>
        <header><NavBar/></header>
        <div>
            <Container>
                <Row style={{ padding: '10px'}}>
                    <Col>
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text><Form.Control placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                    <Col> 
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text><Form.Control placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                </Row>
                <Row style={{ padding: '10px'}}>
                    <Col>
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">Roll Number</InputGroup.Text><Form.Control placeholder="Roll Number" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                    <Col> 
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">Member Number</InputGroup.Text><Form.Control placeholder="Member Number" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                </Row>
                <Row style={{ padding: '10px'}}>
                    <Col>
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">Degree</InputGroup.Text><Form.Control placeholder="Degree" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                    <Col> 
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">Department</InputGroup.Text><Form.Control placeholder="Department" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                </Row>
                <Row style={{ padding: '10px'}}>
                    <Col>
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">RVSP Count</InputGroup.Text><Form.Control placeholder="RVSP Count" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Mode Of Event/Workshop">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this to select</option>
                            <option value="Online">Online</option>
                            <option value="In-Person">In-Person</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row style={{ padding: '10px'}}>
                    <Col>
                        <InputGroup className="mb-3"> <InputGroup.Text id="basic-addon1">Domain</InputGroup.Text><Form.Control placeholder="Domain" aria-label="Username" aria-describedby="basic-addon1"/></InputGroup>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Sponcership">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this to select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2" style={{ padding: '10px'}}>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGrid" label="College Email Address"> <Form.Control type="email" placeholder="name@example.com" /> </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingSelectGrid" label="Event / Workshop">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this to select</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Event">Event</option>
                        </Form.Select>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ padding: '10px'}}>
                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '150px', padding: '20px'}}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="position-relative sm-3">
                            <Form.Check required name="terms" label="Agree to terms and conditions" id="termsandconditions" value={true} feedbackTooltip/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Col><center><Button type="submit" onClick={handleSubmit}>Submit form</Button></center></Col>
                    </Col>
                </Row>
            </Container>
        </div>
        <footer></footer>
    </>
  )
}

export default AskLead;