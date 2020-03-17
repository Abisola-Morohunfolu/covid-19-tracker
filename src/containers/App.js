import React, { Component } from 'react';

// import { customTheme } from '../Theme/theme';
import './App.css';
// import GetData from './GetData';
import Header from '../components/Header';
import Summary from '../components/Summary';
import Auxiliary from '../hoc/Auxiliary/Auxiliary';
import DailySummary from '../components/DailySummary';
import CountryStats from '../components/CountryStats';
import Attribution from '../components/Attribution';

class App extends Component {
	state = {
		globalSummary: null,
		dailySummary: null,
		dailySummaryLoading: false,
		dailySummaryError: null,
		isLoading: false,
		selectedCountry: {},
		allCountries: null,
		allCountriesError: null,
		loadingCountries: false,
		globalSummaryError: null
	};

	//fecth data for global summary
	fetchData = async () => {
		fetch('https://covid19.mathdro.id/api')
			.then(response => {
				if (response.ok) {
					this.setState({
						...this.state,
						isLoading: true
					});
				} else {
					const error = new Error('Something went wrong');
					throw error;
				}
				return response.json();
			})
			.then(responseData => {
				const { confirmed, recovered, deaths } = responseData;
				this.setState({
					...this.state,
					globalSummary: { confirmed, recovered, deaths },
					isLoading: false
				});
			})
			.catch(error => {
				this.setState({
					...this.state,
					globalSummaryError: error
				});
			});
	};

	fetchDailySummary = async () => {
		fetch('https://covid19.mathdro.id/api/daily')
			.then(response => {
				if (response.ok) {
					this.setState({
						...this.state,
						dailySummaryLoading: true,
						dailySummaryError: null
					});
				} else {
					const error = new Error('Something went wrong');
					throw error;
				}
				return response.json();
			})
			.then(responseData => {
				let currentDay = responseData[responseData.length - 1];
				let prevDay = responseData[responseData.length - 2];
				this.setState({
					...this.state,
					dailySummary: [{ ...currentDay }, { ...prevDay }],
					dailySummaryLoading: false
				});
			})
			.catch(error => {
				this.setState({
					...this.state,
					dailySummaryError: error
				});
			});
	};

	//fetch all countries
	fetchCountries = async () => {
		fetch('https://covid19.mathdro.id/api/countries')
			.then(response => {
				if (response.ok) {
					this.setState({
						...this.state,
						loadingCountries: true
					});
				} else {
					const error = new Error('Something went wrong');
					throw error;
				}
				return response.json();
			})
			.then(countries => {
				let allCountries = countries.countries;
				this.setState({
					...this.state,
					loadingCountries: false,
					allCountries
				});
			})
			.catch(error => {
				this.setState({
					...this.state,
					allCountriesError: error
				});
			});
	};

	//fetchSelectedCountry
	fetchSelectedCountry = async country => {
		fetch(`https://covid19.mathdro.id/api/countries/${country}`)
			.then(response => {
				if (response.ok) {
					this.setState({
						...this.state,
						loadingCountries: true,
						allCountriesError: null
					});
				} else {
					const error = new Error(`Error ${response.status} : ${response.statusText}`);
					error.response = response;
					console.log(error);
					throw error;
				}
				return response.json();
			})
			.then(countryData => {
				this.setState({
					...this.state,
					loadingCountries: false,
					selectedCountry: { name: country, data: { ...countryData } },
					allCountriesError: null
				});
			})
			.catch(error => {
				this.setState({
					...this.state,
					loadingCountries: false,
					selectedCountry: null,
					allCountriesError: error
				});
			});
	};

	componentDidMount() {
		this.fetchData();
		this.fetchDailySummary();
		this.fetchCountries();
		this.fetchSelectedCountry('US');
	}

	render() {
		return (
			<Auxiliary>
				<Header />
				<Summary summary={this.state.globalSummary} loading={this.state.isLoading} />
				<DailySummary dailySummary={this.state.dailySummary} />
				<CountryStats
					allCountries={this.state.allCountries}
					selectCountry={this.fetchSelectedCountry}
					country={this.state.selectedCountry}
					loading={this.state.loadingCountries}
					error={this.state.allCountriesError}
				/>
				<Attribution />
			</Auxiliary>
		);
	}
}

export default App;
