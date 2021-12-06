import React,{ useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer';

const Contact = () => {

    const form=useRef();

    const sendEmail = e => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_ckd85wj', e.target, 'user_KVAo3Av0wKpMmulNXTxvL')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

    return (
        <div className="container contact-area p-3" id="contact">
            <h2 className="text-center pt-2">Hello, Contact with me</h2>
            <div className="row">
                <div className="col-lg-7">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-group form-section">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="textHelp" name="name" placeholder="Type your name" required/>
                        </div>
                        <div className="form-group form-section">
                            <label htmlFor="exampleInputPassword1">Email Address</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" name="email" placeholder="Type your e-mail" required/>
                        </div>

                        <div className="form-group form-section">
                            <label htmlFor="exampleInputPassword1">Message/Query</label>
                            <textarea type="text" rows='5'class="form-control" id="exampleInputPassword1" name="message"placeholder="Type your message" required/>
                        </div>



                        <button type="submit" className="btn contact-btn mt-3">Send Us</button>
                    </form>
                </div>

                <div className="col-lg-5 contact-icon">
                    <div className="mt-5">
                        <h4>Please connect with me, via</h4>
                        <h5><span class="address-address">Phone :</span> <span className="address-color">+880 1719390876</span></h5>
                        <h5> <span class="address-address"> Email :</span> <span className="address-color">saiful.riyaz@gmail.com</span></h5> 

                        <div>
                        <a className="" href="https://github.com/saiful2612" target="_blank" rel="noreferrer">Github</a> 
                       
                        <a className="" href="https://www.linkedin.com/in/saiful-riyaz-2a2931144" target="_blank" rel="noreferrer">Linkedin</a> 
                        
                        <a className="" href="https://www.facebook.com/saiful.riyaz" target="_blank" rel="noreferrer">facebook</a>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
        
    );
};

export default Contact;