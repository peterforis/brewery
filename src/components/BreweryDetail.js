import React, { Component } from "react";

export default class BreweryDetail extends Component {

    constructor({ match }) {
        super();
        this.state = {
            id: match.params.id,
            isLoaded: false,
            selected: []
        }
    }

    componentDidMount() {
        fetch(`https://api.openbrewerydb.org/breweries/${this.state.id}`)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    selected: result
                });
            });
    }

    render() {

        const selected = this.state.selected;

        if (!this.state.isLoaded) {
            return <div>Loading ... </div>;
        } else {
            return (
                <div className="brewerydetail-container">
                    <div>
                        <p>ID:</p>
                        <p>Name:</p>
                        <p>Type:</p>
                        <p>Street:</p>
                        <p>City:</p>
                        <p>State:</p>
                        <p>Postal code:</p>
                        <p>Country:</p>
                        <p>Longitude:</p>
                        <p>Latitude:</p>
                        <p>Phone:</p>
                        <p>Website:</p>
                        <p>Last update:</p>
                    </div>
                    <div>
                        <p>{selected.id === "" ? "_" : selected.id}</p>
                        <p>{selected.name === "" ? "_" : selected.name}</p>
                        <p>{selected.brewery_type === "" ? "_" : selected.brewery_type}</p>
                        <p>{selected.street === "" ? "_" : selected.street}</p>
                        <p>{selected.city === "" ? "_" : selected.city}</p>
                        <p>{selected.state === "" ? "_" : selected.state}</p>
                        <p>{selected.postal_code === "" ? "_" : selected.postal_code}</p>
                        <p>{selected.country === "" ? "_" : selected.country}</p>
                        <p>{selected.longitude === "" ? "_" : selected.longitude}</p>
                        <p>{selected.latitude === "" ? "_" : selected.latitude}</p>
                        <p>{selected.phone === "" ? "_" : selected.phone}</p>
                        <p>{selected.website_url === "" ? "_" : selected.website_url}</p>
                        <p>{selected.updated_at === "" ? "_" : selected.updated_at}</p>
                    </div>
                </div>
            )
        }
    }
}