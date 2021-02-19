import react, { Component } from 'react'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { TableCountry, ListCategories } from '../components'

export default class Country extends Component {
  constructor(probs) {
    super(probs)
    this.state = {
      country: [],

    }
  }

  render() {
    const { country } = this.state
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Data Country</strong></h4>
              <hr />
              <Row>
                <TableCountry country={country} />
                <tr />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
