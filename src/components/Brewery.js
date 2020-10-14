import React, { Component } from "react";
import "../style.css";
import { Link } from 'react-router-dom';

export default class Brewery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            url: props.url
        }
        // console.log(this.state.id);
    }

    render() {

        return (
            <tr>
                <td className="brewerie-table-column">
                    <Link to={`/${this.state.id}`}> {this.state.name}</Link>
                </td>
                <td className="brewerie-table-column">{this.state.url}</td>
                <td className="brewerie-table-column">Some text here.</td>
            </tr>
        )
    }
}