
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
    const [state, handleSubmit] = useForm("xeolpwze");

    if (state.succeeded) 
    {
        return <p>Thankyou for contacting! Have a nice day.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <br />  

            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <br />

            <label>Message</label>
            <textarea id="message" name="message" /> {" "}
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <br />

            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>

    );
}
