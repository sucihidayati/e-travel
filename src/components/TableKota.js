import react, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button, Container } from 'react-bootstrap'
import { API_KOTA } from '../utils/api'
import axios from 'axios'
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const { SearchBar } = Search;

// function buildTable(kotas) {
//     const renderMapUrl =
//       (val, row) =>
//         <a href={`https://www.google.com/maps?q=${row['latitide']},${row['longitude']}`}>
//           Google Maps
//         </a>;

const columns = [{
    dataField: 'areaName',
    text: 'Area Name',
    sort: true,
    headerStyle: () => {
        return { width: "20%" }
    }
}, {
    dataField: 'areaCode',
    text: 'Area Code',
    sort: true
}, {
    dataField: 'latitude',
    text: 'Latitude',
    sort: true
}, {
    dataField: 'longitude',
    text: 'Longitude',
    sort: true
}, {
    dataField: 'countryName',
    text: 'Country Name',
    sort: true
}, {
    dataField: 'countryCode',
    text: 'Country Code',
    sort: true
},{
    dataField: 'renderMapUrl',
    text: 'Action',
    formatter: (rowContent, row) => {
        return (
            <div>
                <a target="_blank" class="btn btn-primary" href={"https://www.google.com/maps/search/?api=1&query="+row['latitude']+","+row['longitude']+""}>
                       <FontAwesomeIcon icon={faEye} /> Map
                </a>
            </div>
        )
    }
    
},];

const defaultSorted = [{
    dataField: 'areaName',
    order: 'asc'
}];


export default class TableKota extends Component {
    constructor(probs) {
        super(probs)
        this.state = {
            kotas: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios
            .get(API_KOTA)
            .then(res => {
                console.log("Respons : ", res)
                const kotas = res.data.data.content;
                this.setState({ kotas });
            })
            .catch(error => {
                console.log("Error ", error)
            })
    }

    render() {
        const { kotas } = this.state

        //console.log(this.state.kotas)
        return (
            <div>
                <Container>

                    <ToolkitProvider
                        bootstrap4
                        keyField="areaId"
                        data={kotas}
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
