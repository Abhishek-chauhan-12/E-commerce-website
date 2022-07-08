import contact from "../component/images/about-us-page-heading.jpg"
import Commen1 from './Commen1'


const Contact=()=>{
    return(
        <>
        
        <div className="commen my-5">
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-top">
                                <div className="about-img">
                                    <img src={contact} alt="" />
                                </div>
                                <div className="about-hedding">
                                    <h1>Contact Us</h1>
                                    <h6>Awesome, clean{'&'}  creative HTML5 Template</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <div className="container mb-4">
            <div className="row mb-5">
                <div className=" col-lg-6 col-md-12 col-12 mx-auto">
                    <div className="contant-left text-center">
                <iframe   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d55305.74669185694!2d77.54458205833814!3d29.961918553773852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1655300523249!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                </div>
                <div className=" col-lg-6 col-md-12 col-12">
                    <div className="contact-hedding">
                        <h1>Say Hello. Don't Be Shy!</h1>
                        <h6>Details to details is what makes Hexashop different from the other themes.</h6>
                        <div className="contact-fome ">
                            <input type="text" placeholder="Your Name" className="form-control" />
                            <input type="email"  placeholder="Your Email" className="form-control"/>
                        </div>
                        <div className="contact-fome1 mt-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                        </div>
                        <button className="mt-3 btns">Click</button>
                    </div>
                </div>
            </div>
        </div>
<Commen1/>
        
        
        </>
    )
}
export default Contact;