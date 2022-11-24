import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contacto() {
  return (
    <Container className="text-center">
        <Form>
            <p className="textoPrincipal pt-5">Cuéntanos, ¿en qué te podemos ayudar?</p>            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
        <Button variant="danger" type="submit">
            Enviar
        </Button>        
    </Container>
  );
}

export default Contacto;