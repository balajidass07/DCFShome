import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { useState } from 'react';
import * as emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_Dlt8QI64Z829ywrUhkPec");

export default function Contact() {
    const [email,setemail] = useState('');
    const [subject,setsubject] = useState('');
    const [message,setmessage] = useState('');
    const [name,setname] = useState('');

    function onSubmit(e) {
      e.preventDefault()
      let templateParams = {
        from_name: email,
        to_name: 'Admin',
        subject: subject,
        message: message,
       }
       emailjs.send(
        'service_v9fx18o',
        'template_ept3bqy',
         templateParams,
        'user_Dlt8QI64Z829ywrUhkPec'
       )
       alert('Feedback or Queries sent to admin. You will get reply soon.... ')
       setemail('');
       setsubject('');
       setmessage('');
       setname('');
   }
    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div >
              <h2>Feedback or Queries</h2>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form onSubmit={onSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                    type='text'
                    value={name}
                    onChange={(e=>setname(e.target.value))}
                  />

                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      value={email}
                      onChange={(e=>setemail(e.target.value))}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject
                    <span className="required">*</span>
                    </label>
                    
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      value={subject}
                      onChange={(e=>setsubject(e.target.value))}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      value={message}
                      onChange={(e=>setmessage(e.target.value))}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Special Mention</h4>
                <p>
                  Dr.Venkatraman CSE AVV, CBE
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
