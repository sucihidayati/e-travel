import react, { Component } from 'react'
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from 'react-bootstrap'
import { API_AKOMODASI } from '../utils/api'
import axios from 'axios'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;

const columns = [{
    dataField: 'referenceName',
    text: 'Referance Name',
    sort: true
}, {
    dataField: 'ticketName',
    text: 'Ticket Name',
    sort: true
}, {
    dataField: 'description',
    text: 'Description',
    sort: true,
    headerStyle: () => {
        return { width: "15%" }
    }
}, {
    dataField: 'isRecomended',
    text: 'Recomended',
    sort: true,
    headerStyle: () => {
        return { width: "12%" }
    }
}, {
    dataField: 'noted',
    text: 'Noted',
    sort: true
}, {
    dataField: 'duration',
    text: 'Duration',
    sort: true
}, {
    dataField: 'validateTime',
    text: 'Validate Time',
    sort: true
}, {
    dataField: 'termAndCondition',
    text: 'Term adn Condition',
    sort: true,
    headerStyle: () => {
        return { width: "13%" }
    }
}, {
    dataField: 'cancelationPolicy',
    text: 'Cancelation Policy',
    sort: true,
    headerStyle: () => {
        return { width: "13%" }
    }
},];

const defaultSorted = [{
    dataField: 'referenceName',
    order: 'asc'
}];


export default class TableAkomodasi extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            akomodasis: [],
            response: '',
            display: 'none',
        }
    }

    componentDidMount() {
        axios
            .get(API_AKOMODASI)
            .then(res => {
                console.log("Respons : ", res)
                const akomodasis = res.data.data.content;
                this.setState({ akomodasis });
            })
            .catch(error => {
                console.log("Error ", error)
            })
    }

    render() {
        const { akomodasis } = this.state
        return (
            <div>
                <Container>
                    <ToolkitProvider
                        bootstrap4
                        keyField="referanceId"
                        data={akomodasis}
                        columns={columns}
                        defaultSorted={defaultSorted}
                        search
                    >
                        {
                            props => (
                                <div>
                                    <div className="float-right">
                                        <SearchBar {...props.searchProps} placeholder="Search..." />
                                    </div>
                                    <BootstrapTable {...props.baseProps}
                                        pagination={paginationFactory()}
                                        striped
                                        hover
                                        condensed
                                    />
                                </div>
                            )
                        }
                    </ToolkitProvider>
                </Container>

            </div>

        )
    }
}
