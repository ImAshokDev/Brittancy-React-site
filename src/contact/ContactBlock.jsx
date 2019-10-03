import React from 'react';
import img1 from './images/01.jpg';
import img2 from './images/02.jpg';
import img3 from './images/03.jpg';

const ContactBlock = () => (
  <div className="contact-block">
    <Information h2="contact info" />
    <Blog h2="latest blog posts" />
    <Message h2="get in touch" />
  </div>
);

const Information = ({ h2 }) => (
  <div className="information">
    <h2>{h2}</h2>
    <div className="info1">
      <div className="left">
        <i className="fas fa-map-marker-alt" />
      </div>
      <div className="right">
        <p>6036 Richmond hwy.,</p>
        <p>Alexandria, VA, 2230</p>
      </div>
    </div>
    <div className="info2">
      <div className="left">
        <i className="far fa-clock" />
      </div>
      <div className="right">
        <p>
          <span>Weekdays:</span>
          8:00-20:00
        </p>
        <p>
          <span>Weekdays:</span>
          9:00-18:00
        </p>
      </div>
    </div>
    <div className="info3">
      <div className="left">
        <i className="fas fa-mobile-alt" />
      </div>
      <div className="right">
        <p>+1(409)987-5874</p>
        <h6>info@demolink.org</h6>
      </div>
    </div>
  </div>
);
const Blog = ({ h2 }) => (
  <div className="blog">
    <h2>{h2}</h2>
    <Text
      image={img1}
      p="The Latest Fine Art Trends: Autumn 2018 "
      h6="October 12, 2018 "
    />
    <Text
      image={img2}
      p="Fine Art Basics: Techniques You Need to Master "
      h6="October 26, 2018 "
    />
    <Text
      image={img3}
      p="Why Keeping Your Studio Organized is Important "
      h6=" August 23, 2018"
    />
  </div>
);
const Text = ({ image, p, h6 }) => (
  <div className="text">
    <div className="left">
      <img src={image} alt="" />
    </div>
    <div className="right">
      <p>{p}</p>
      <h6>
        <i className="far fa-clock" />
        {h6}
      </h6>
    </div>
  </div>
);
const Message = ({ h2 }) => (
  <div className="message">
    <h2>{h2}</h2>
  </div>
);
export default ContactBlock;
