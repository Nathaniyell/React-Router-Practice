import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData()

    return (
      <div className="contact">
        <h3>Contact Us</h3>
        <Form method="post" action="/help/contact">
          <label>
            <span>Your email:</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Your message:</span>
            <textarea name="message" required></textarea>
          </label>
          <button>Submit</button>
          {data && data.error && <p>{data.error}</p>}
        </Form>
      </div>
    )
  }
  export const contactAction = async ({ request })=>{
    const data = await request.formData() //This gets us the formdata
    const submission ={
      email: data.get('email'),
      message: data.get('message')
    }
    console.log(submission)

    //send post request
    if(submission.message.length < 10){
      return {error: "Message must be over 10 Chars long"}
    }


    //redirects the user once the form is submitted
    return redirect('/')
  }

  //The request property contains all the data from the input fields and for this to work you need to have specified 
//A name attributes on the input elements
//The custom form element comes with the react-router which allows us have access to the form data without using controlled inputs or saving the data to state.
//The action prop fires when the form is submitted, on the component you specify the route path and on the route itself you specify the actionFunction you defined