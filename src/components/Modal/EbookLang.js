import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="bg-lightBlue-500 text-white active:bg-lightBlue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      onClick={handleShow}
      style={{
        transform:
          "scale(1) perspective(1040px) rotateY(0deg) rotateX(0deg) rotate(0deg)",
        transition:
          "transform 0.3s ease-in-out",
      }}
      onMouseEnter={(e)=>{
        e.currentTarget.style.transform="scale(1.1) perspective(1040px) rotateY(0deg) rotateX(0deg) rotate(0deg)";
      }}
      onMouseLeave={(e)=>{
        e.currentTarget.style.transform="scale(1) perspective(1040px) rotateY(0deg) rotateX(0deg) rotate(0deg) "; 
      }}>
        Download E-Book
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Download E-Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>Choose your preferred language</Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button style={{backgroundColor:'#334155'}} href='https://drive.google.com/file/d/1n1wobZm-Pb1cVp2Qs5LV_mA8mJ1dYjBy/view'>
            English
          </Button>
          <Button style={{backgroundColor:'#e2e8f0', color:'#334155'}} href='https://drive.google.com/file/d/17adklhlaJHZvLiDsPg3jvCr5KwrLh7I1/view'>
            Kannada
          </Button>
          <Button style={{backgroundColor:'#334155'}} href='https://drive.google.com/file/d/10JXV24w2D5WgL9D8h4cCk9RfjpPXnAA1/view'>
            Gujarathi
          </Button>
          <Button style={{backgroundColor:'#e2e8f0', color:'#334155'}} href='https://drive.google.com/file/d/1XQEoHLiHKyMTnJxaGwkmXJLVDsr7m-hd/view'>
            Arabic
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;