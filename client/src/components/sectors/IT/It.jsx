import React, { Component } from "react";
import UsersList from "../../users/UsersList.jsx";
import UsersPageComponent from "../../users/UsersPage.component.jsx";

class Tech extends Component {
  /**
   * @returns {object} cards
   * @memberof Navbar
   */
  render() {
    return (
      <div>
        <div className="hero">
          <div className="hero--padding" />
          <h2>IT Department </h2>
          <p>
            The IT Department in Nairobi City County manages digital
            infrastructure, networks, and tech systems, ensuring smooth
            municipal operations. Responsible for cybersecurity, software
            development, and tech support, it drives innovation to enhance
            citizen services and streamline administrative processes.
          </p>
          <div className="hero--btn">
            <a href="#">View More</a>
          </div>
        </div>

        <div className="section--1">
          <div className="events" id="section1--box">
            <h3>Events</h3>
            <div className="event">
              <div className="date--box">
                <span id="event--month">Sep</span>
                <span id="event--date">4</span>
              </div>
              <div className="event--description">
                <h2>Event title will be here</h2>
                <p>Sunday, Sep 4, 12:00 PM</p>
                <button>Learn more</button>
              </div>
            </div>

            <div className="event">
              <div className="date--box">
                <span>Sep</span>
                <span id="event--date">4</span>
              </div>
              <div className="event--description">
                <h2>Event title will be here</h2>
                <p>Sunday, Sep 4, 12:00 PM</p>
                <button>Learn more</button>
              </div>
            </div>

            <div className="event">
              <div className="date--box">
                <span>Sep</span>
                <span id="event--date">4</span>
              </div>
              <div className="event--description">
                <h2>Event title will be here</h2>
                <p>Sunday, Sep 4, 12:00 PM</p>
                <button>Learn more</button>
              </div>
            </div>
          </div>

          <div className="links" id="section1--box">
            <h3>Quick Links</h3>
            <div className="links--container">
              <div className="link">
                <div className="icon" />
                <div className="link--name">
                  <span>Help Desk</span>
                </div>
              </div>
              <div className="link">
                <div className="icon" />
                <div className="link--name">
                  <span>Employee Directory</span>
                </div>
              </div>

              <div className="link">
                <div className="icon" />
                <div className="link--name">
                  <span>Shared Docs</span>
                </div>
              </div>

              <div className="link">
                <div className="icon" />
                <div className="link--name">
                  <span>Sub Sectors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="hod" id="section1--box">
            <h3>HoD</h3>
            <div className="hod--inner">
              <div className="hod--image">
                <img
                  src="https://s3-alpha-sig.figma.com/img/c777/60c2/8f180225ff7105e97479105c3bc3d9df?Expires=1699833600&Signature=b8yP3FaGMEVtrrza6A915g~Vt5n86sB8FtyOO3PXnTGI-b17~w7J1S9TVQQHz8VlziJM7XTnNYXxlpyA1tGv2qYV2XRm-XU8JKFTWGOQ4jnabBzFU-iSt4L2Nglm8-LQrgyGA2TZF3C7eGQ~QqWn45XzcPe184-TU~DCFIRY3sh9HUdbUkgsqHiPSZPlw4MlJe7qNKPyKSuNKTBmePomZ1S7i8z-wBKtcUexD5Jt7rFK9TLhnxTIvteSefwy762KVn-2iGXyFMO-Rx6tvT9i4WVfJMQI3FcKTApE99CIFEgmGqxQC2j94AQAzo1YFF0YLoJrvCyaL66wwKpUWsOGRg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  style={{ width: "96px", height: "96px" }}
                />
              </div>

              <div className="hod--description">
                <h2>John Doe</h2>
                <p>
                  Quis autem similique dolorem ut sit odit perspi ciatis. Et
                  perferendis est quia magni et sapie nte neces sitatibus. Id
                  est eius expedita quasi voluptas similique ut sit odit
                  perspiciatis. Et perfes wrendis est quia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="news">
            <h3>News</h3>
            <div className="new">
              <div className="new--image" />
              <div className="new--description">
                <h2>
                  The new staff photo competition is here! Send us your best
                  photos by October 31st.
                </h2>
                <p>
                  Nulla est incidunt rerum ea ea sint sed omnis. Sed et fugiat
                  ut eos. Expedita ipsam qui omnis aut ut odit ut enim beatae.
                  Eligendi tempore eligendi corporis reprehend.
                </p>
                <span>Sep 4, 2022</span>
              </div>
            </div>
            {/* <hr/> */}
            <div className="new">
              <div className="new--image" />
              <div className="new--description">
                <h2>
                  The new staff photo competition is here! Send us your best
                  photos by October 31st.
                </h2>
                <p>
                  Nulla est incidunt rerum ea ea sint sed omnis. Sed et fugiat
                  ut eos. Expedita ipsam qui omnis aut ut odit ut enim beatae.
                  Eligendi tempore eligendi corporis reprehend.
                </p>
                <span>Sep 4, 2022</span>
              </div>
            </div>
            {/* <hr/> */}
            <div className="new">
              <div className="new--image" />
              <div className="new--description">
                <h2>
                  The new staff photo competition is here! Send us your best
                  photos by October 31st.
                </h2>
                <p>
                  Nulla est incidunt rerum ea ea sint sed omnis. Sed et fugiat
                  ut eos. Expedita ipsam qui omnis aut ut odit ut enim beatae.
                  Eligendi tempore eligendi corporis reprehend.
                </p>
                <span>Sep 4, 2022</span>
              </div>
            </div>

            <span id="news--more">
              <a href="#">View More</a>
            </span>
          </div>

          <div className="faqs">
            <h3>FAQ's</h3>
            <div className="faq">
              <span>My computer is not connected to the internet?</span>
            </div>

            <div className="faq">
              <span>I am unable to log in into my staff email?</span>
              {/* <div className="faq--description">
                <p>Head over to dashboard and click on ‘New Ticket’. After filling all the necessary details, you need to click on Submit. You’ll recive confirmation for the same</p>
              </div> */}
            </div>

            <div className="faq">
              <span>My PC just crashed!</span>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="staff">
            <h3>IT Staff</h3>

            <div className="employees">
              <div className="employee">
                <div className="emp--image" />
                <div className="emp--details">
                  <h4>Lester Keefe</h4>
                  <p>Job title here</p>
                </div>
              </div>

              <div className="employee">
                <div className="emp--image" />
                <div className="emp--details">
                  <h4>Lester Keefe</h4>
                  <p>Job title here</p>
                </div>
              </div>

              <div className="employee">
                <div className="emp--image" />
                <div className="emp--details">
                  <h4>Lester Keefe</h4>
                  <p>Job title here</p>
                </div>
              </div>

              <div className="employee">
                <div className="emp--image" />
                <div className="emp--details">
                  <h4>Lester Keefe</h4>
                  <p>Job title here</p>
                </div>
              </div>

              <div className="employee">
                <div className="emp--image" />
                <div className="emp--details">
                  <h4>Lester Keefe</h4>
                  <p>Job title here</p>
                </div>
              </div>

              <div className="employee">
                <div className="emp--image" />
                <div className="emp--details">
                  <h4>Lester Keefe</h4>
                  <p>Job title here</p>
                </div>
              </div>

              <div className="employee">
                <div className="emp--image" />
                <div className="emp--details">
                  <h4>Lester Keefe</h4>
                  <p>Job title here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tech;
