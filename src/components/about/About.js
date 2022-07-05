import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  return (
    <div>
      <div className='about-content' id='about'>
        <div className='header'>
          <h2>About</h2>
          <hr></hr>
        </div>
        <p>
          Vo-CAL Doors, LLC is commited to helping California businesses keep
          their doors secured and functioning efficiently. We are proud to offer
          quality and experienced repair, as well as new installation on
          commercial doors at affordable and understandable rates. We will help
          our customers make the important decision on choosing the correct door
          and hardware to help their company maintain their business each day.
        </p>
        <p>
          We offer same day service and provide emergency board up services to
          secure your building. Vo-CAL Doors has helped many of our customers
          vision become a physical and operang reality. We respect and value
          all our customers me and property and will do everything we can to
          protect that.
        </p>
        <p>
          Our sales team will offer fast communication, same day quotes, and
          quick dependable response times. Our experienced, respectful, and
          Certified Service Technicians have a great deal of knowledge to
          maintain and repair your facility and understands that this means all
          doors and hardware. Our customer service representatives will be there
          to answer any questions or connect you with our sales or service
          techs.
        </p>
      </div>
    </div>
  );
}
export default About;
