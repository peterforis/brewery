import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import { Link } from "react-router-dom";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breweries: this.props.breweries,
            selected: [],
            value: ""
        }
    }

    render() {
        return (
            <Autocomplete
                value={this.state.value}
                items={this.state.breweries}
                getItemValue={item => item.name}
                shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                renderItem={(item) =>
                    <div key={item.id}>
                        <Link to={`/brewery/${item.id}`}>{item.name}</Link>
                    </div>
                }
                onChange={(event, val) => this.setState({ value: val })}
            />
        )
    }
}
