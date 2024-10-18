
import { useState } from 'react';
import Button from '../components/Button';
import Swal from 'sweetalert2';
import { Row, Col } from 'react-bootstrap';

// 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: 'your-access-key', // Replace with your Web3Forms access key
            name,
            email,
            message,
          }),
        });
  
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has been sent successfully!',
            confirmButtonText: 'Okay',
          });
          setName('');
          setEmail('');
          setMessage('');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send your message. Please try again.',
          });
        }
      } catch (error) {
        console.error('Error sending email:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred. Please try again.',
        });
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <div id='contact'>
      <Row className='pt-24'>
        <h1 className='text-black'>contact</h1>
        <Col lg="6">
          <div className=" w-full  p-6 border-2 border-white rounded-lg shadow-md bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Say something..."
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <Button 
                type="submit"
                className={`w-full p-2 ${isSubmitting ? 'bg-gray-400' : 'bg-cyan-500 hover:bg-blue-700'} text-white font-semibold rounded-md`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </div>
        </Col>
        <Col lg="6">
          {/* Placeholder for additional content */}
          <div className=" justify-center items-center ">
            <p className="text-center text-lg">You can also reach out to us via our social media channels.</p>
          </div>
        </Col>
      </Row>
      <h1 className='pt-40'>contact</h1>
    </div>
  )
}

export default Contact


// const Contact = () => {






    //   return (
    //     <div id="contact" className="">
    //         <h1 className='pt-60 pb-96'>contact</h1>
    //         <h2 className='pt-72'>contact2</h2>
    //     </div>
    //   );
    // };
    
    // export default Contact;
    