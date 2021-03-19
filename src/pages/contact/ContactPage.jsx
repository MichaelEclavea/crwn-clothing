import React from 'react'
import './contact.scss'

const ContactPage = () => {
  return (
    <div id='contact-container'>
      <section id='contact-title'>
        <h1>GET IN TOUCH!</h1>
      </section>
      <div id='contact-two'>
        <div id='contact-text'>
          <p>
            Et Lorem proident ut reprehenderit ex laboris cillum aliquip amet
            tempor. Nostrud cupidatat veniam amet ullamco ut laborum. Mollit
            amet Lorem sit eiusmod ea reprehenderit sunt aliqua irure. Amet
            eiusmod in proident in pariatur nulla eu eu fugiat.
          </p>
          <p>
            <strong>Softwear Inc.</strong>
          </p>
          <p>
            <strong>Mail Address:</strong>
          </p>
          <p>
            Nulla magna qui consequat qui officia sit Lorem est culpa laborum
            ex.
          </p>
          <p>
            <strong>Address:</strong>
          </p>
          <p>
            Pariatur fugiat deserunt eiusmod officia adipisicing consectetur id
            labore labore aliqua.
          </p>
          <p>
              <strong>Phone:</strong> 1-800-123-4567
          </p>
        </div>
        <div id='contact-map'>
          <img id='contact-img' src="/maps.png"></img>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
