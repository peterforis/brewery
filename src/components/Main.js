import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Pagination from "./Pagination";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breweries: this.props.breweries,
            currentPage: 1
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Header breweries={this.state.breweries} />
                </div>
                <table className="main-table" >
                    <thead className="main-table-header">
                        <tr>
                            <th className="main-column">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.breweries.slice((this.state.currentPage - 1) * this.props.itemsPerPage, this.state.currentPage * this.props.itemsPerPage).map(brewery => (
                            <tr key={brewery.id}>
                                <td className="main-column">
                                    <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>
                                </td>
                            </tr>))
                        }
                    </tbody>
                </table >
                <Pagination itemsPerPage={this.props.itemsPerPage} totalItems={this.state.breweries.length} paginate={(number) => this.setState({ currentPage: number })} />
            </div>
        )
    }
}