import React from "react";

import Contact from './Contact.jsx'
import "./Contacts.scss"

class Contacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: []
		}
	}

	render() {
		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
			  		<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
				  	</article>
	  
				{this.state.contacts.map((contact) => (
					<Contact key={contact.id} data={contact} />
				))}

				</section>
			</div>
		);
	}
}

export default Contacts;
