import react, { Component } from 'react'
import { TableKota, ListCategories } from '../components'
import { Row, Col, Container } from 'react-bootstrap'

export default class Home extends Component {
  constructor(probs) {
    super(probs)
    this.state = {
      kotas: [],

    }
  }

  render() {
    const { kotas } = this.state

    // console.log(this.state.kotas)
    return (

      <div className="mt-3">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4><strong>Data Kota</strong></h4>
              <hr />
              <Row>
                <TableKota kotas={kotas} />
                <tr />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

    )
  }
}


