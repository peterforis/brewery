import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import BreweryDetail from "./BreweryDetail";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.css';
import "../style.css";

export default class BrewerieList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            isLoaded: false,
            itemsPerPage: 10,
        };
    }

    componentDidMount() {
        fetch('https://api.openbrewerydb.org/breweries')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    breweries: result
                });
            });
    }

    render() {
        if (!this.state.isLoaded) {
            return <div>Loading ... </div>;
        } else {
            return (
                <div className="brewerielist-container">
                    <Router>
                        <div className="brewerielist-main">
                            <Switch>
                                <Route path="/brewery/:id" component={BreweryDetail}></Route>
                                <Route path="/breweries/:number" component={() => <Main breweries={this.state.breweries} itemsPerPage={this.state.itemsPerPage} />}></Route>
                                <Redirect to="/breweries/1" />
                            </Switch>
                        </div>
                    </Router>
                </div>
            );
        }
    }
}