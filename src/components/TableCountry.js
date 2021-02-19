import react, { Component } from 'react'
import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from 'react-bootstrap'
import { API_COUNTRY } from '../utils/api'
import axios from 'axios'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { SearchBar } = Search;

const columns = [{
    dataField: 'continentName',
    text: 'Continent Name',
}, {
    dataField: 'countryName',
    text: 'Country Name',
    sort: true
}, {
    dataField: 'countryCode',
    text: 'Country Code',
}, {
    dataField: 'latitude',
    text: ' Latitude',
}, {
    dataField: 'longitude',
    text: ' Longitude',
},];

const defaultSorted = [{
    dataField: 'countryName',
    order: 'asc'
}];


export default class TableCountry extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            country: [],
            response: '',
            display: 'none',
        }
    }

    componentDidMount() {
        axios
            .get(API_COUNTRY)
            .then(res => {
                console.log("Respons : ", res)
                const country = res.data.data;
                this.setState({ country });
            })
            .catch(error => {
                console.log("Error ", error)
            })
    }

    render() {
        const { country } = this.state
        return (
            <div>
                <Container>
                    <ToolkitProvider
                        bootstrap4
                        keyField="countryId"
                        data={country}
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
