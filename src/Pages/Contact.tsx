
import { useState,FormEvent } from 'react';
import Button from '../components/Button';
import Swal from 'sweetalert2';
import Galaxy from '../components/Galaxy';
import {  } from 'react';
// 

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (e:FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: 'ca02f14a-06d9-4392-8a85-20a968b84b7e', // Replace with your Web3Forms access key
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
    <div id='contact' className="mt-10 h-fit bg-cover bg-center bg-[url('src/assets/Images/lavabg.jpg')] border-red-950 border-2 shadow-md shadow-red-950" style={{background:'url("src/assets/Images/lavabg.png")', backgroundRepeat:'no-repeat'}} >
      <div className='flex flex-wrap pt-20'>
        <div className=" absolute left-52 z-20  max-w-auto w-96 p-10 border-2 border-red-950 rounded-2xl shadow-md shadow-red-900 bg-black bg-opacity-55 xs:w-80 xs:left-10 sm:left-10 md:left-20 lg:left-20 xl:left-28">
              <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium ">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium ">Message</label>
                  <textarea
                    name="message"
                    className="mt-1 block w-full p-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    placeholder="Say something..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className={` p-2 ${isSubmitting ? 'bg-red-800' : 'bg-red-900 hover:bg-red-950'} text-white font-semibold rounded-md`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </Button>
              </form>
            </div>
          {/* Placeholder for additional content */}
          <div className="ml-40 mt-10 xs:ml-20 md:ml-48">
            <Galaxy />
          </div>
      </div>
        
    </div>
  )
}

export default Contact


