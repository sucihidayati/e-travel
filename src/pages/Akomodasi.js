import react, { Component } from 'react'
import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { TableAkomodasi, ListCategories } from '../components'

export default class Akomodasi extends Component {
  constructor(probs) {
    super(probs)
    this.state = {
      akomodasis: [],

    }
  }

  render() {
    const { akomodasis } = this.state
    return (
      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Data Akomodasi</strong></h4>
              <hr />
              <Row>
                <TableAkomodasi akomodasis={akomodasis} />
                <tr />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}
