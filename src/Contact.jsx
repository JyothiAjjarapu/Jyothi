import "./css/contact.css";
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
    const [state, handleSubmit] = useForm("xeolpwze");

    if (state.succeeded) 
    {
        return <p>Thankyou for contacting! Have a nice day.</p>;
    }

    return (

        <div className="contact">
            <h2 style={{textAlign:"center"}}> Contact Me </h2>
            <br />

            <form onSubmit={handleSubmit}>

                <div className="fields">
                    
                    <input id="name" type="text" name="name" placeholder="Name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div className="fields">
                    
                    <input id="email" type="email" name="email" placeholder="Email Address" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
               
                <div className="fields">
                    <textarea id="message" name="message" placeholder="Your message here"/> {" "}
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>

            </form>
        </div>      
    );
}
