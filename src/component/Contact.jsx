import {useRef} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';



function BasicExample() {
  const form = useRef()
   const sendEmail = (e) => {
    e.preventDefault();
emailjs.sendForm('service_bpowtuz', 'template_qyaqx8p', form.current, 'X5lXvRvvY23I7K0YD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     e.target.reset()
  };

  return (
    <div className="container">
    <Form ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" 
          name="user_name" placeholder="Fullname" required />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email"
          name="user_email" 
          required />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="subject" required />
      </Form.Group>

 <div class="form-group">
    <label for="exampleFormControlTextarea1">Comment</label>
    <textarea class="form-control" type="text" 
      placeholder="Subject"
      name="message" id="exampleFormControlTextarea1" rows="3"
      required ></textarea>
  </div>
       
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;