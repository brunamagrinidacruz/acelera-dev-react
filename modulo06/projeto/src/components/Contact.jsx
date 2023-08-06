import React from 'react';

import "./Contact.scss"

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    
  }

  formatarData(data) {
    let dataSplit = data.split("-");
    const year = dataSplit[0]
    const month = dataSplit[1]
    const day = dataSplit[2].substr(0, 2);
    return (`${day}/${month}/${year}`)
  }

  render() {
    const data = this.props.data;

    return (
        <article className="contact" data-testid="contact">
            <span className="contact__avatar">
              <img src={data.avatar} alt={data.name}/>
            </span>
            <span className="contact__data" data-testid="contact-name">{data.name}</span>
            <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
            <span className="contact__data" data-testid="contact-country">{data.country}</span>
            <span className="contact__data" data-testid="contact-date">{this.formatarData(data.admissionDate)}</span>
            <span className="contact__data" data-testid="contact-company">{data.company}</span>
            <span className="contact__data" data-testid="contact-department">{data.department}</span>
        </article>
    );
  }
}

export default Contact;
