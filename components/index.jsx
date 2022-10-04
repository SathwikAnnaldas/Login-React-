import React from "react"; 
import './index.css'
 
function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
                    <img src="https://thumbs.dreamstime.com/b/contact-us-concept-wooden-blocks-email-mail-telephone-icons-website-page-contact-us-e-mail-marketing-contact-us-192902959.jpg" alt="Contact us image" height="450px" width="450px"></img>
          </div> 
  
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact Us</h1> 
            <div class="box">
            <form> 
              Name : <input type="text" placeholder="Enter name" required /> <br /> <br></br>
              contact : <input type="text" placeholder="Enter number" required /> <br /> <br></br>
              Email   : <input type="mail"  placeholder="Enter mail" required/> <br />  <br></br>
              <button>Submit</button>
            </form> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;