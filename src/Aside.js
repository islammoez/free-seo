import './Aside.css'
import bg from './bg-photo.png'
function Aside(){
    return(
        <section className='All container-flud  d-flex justify-content-center'>
            <section className='col-lg-5 left'>
                <img  className='' src={bg}/>
            </section>
            <section className='col-lg-4 right'>
                <h1>Get Free SEO Analysis?</h1>
                <p className="mb-5">Nec feugiat nisl pretium fusce id.
                     Justo laoreet sit amet cursus sit
                      amet. Porta non pulvinar neque 
                      laoreet suspendisse interdum 
                      consectetur libero.</p>
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"  placeholder='Enter a valid email address'/>
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Name</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder='Enter Your Name'/>
                </div>
                <label for="inputPassword4" class="form-label">Message</label>
                <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Enter your message</label>
                </div>
                <div class="col-12 ms-auto me-auto" >
                    <button type="submit" class="btn btn-primary button">submit</button>
                </div>

            </form>
            </section>
            </section>
       
    )
}
export default Aside ;