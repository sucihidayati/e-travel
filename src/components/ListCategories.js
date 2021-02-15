import react, { Component } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faCity, } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

export default class ListCategories extends Component {
	constructor(probs) {
		super(probs)
		this.state = {
			kotas: [],

		}
	}

	render() {
	
		const activeUrl = window.location.path
		return (
			<Col md={2} mt="2">
				<h4><strong>Daftar Kategori</strong></h4>
				<hr />
				<ListGroup>
					<ListGroup.Item > <NavLink exact activeClassName="category-aktif" to="/" className="link"> <h5><FontAwesomeIcon icon={faCity} className="mr-1" /> Kota </h5></NavLink></ListGroup.Item>
					<ListGroup.Item > <NavLink exact activeClassName="category-aktif" to="/akomodasi" className="link"> <h5><FontAwesomeIcon icon={faHotel} className="mr-2" /> Hotel </h5> </NavLink></ListGroup.Item>
				</ListGroup>
			</Col>
		)
	}
}