import React from 'react'
import "./EmailForm.css"

function EmailForm() {
  return (
    <>
        <form className='form-email-container'>
            <p>Get early access today</p>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <input type="email" placeholder='email@example.com'/>
{/*             <span>Por favor ingrese una dirección de correo válida</span> */}
            <button>Get Started For Free</button>
        </form>
    </>
  )
}

export default EmailForm