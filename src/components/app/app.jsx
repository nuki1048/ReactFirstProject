import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";
class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John Smith", salary: 950, increase: true, rise: true, id: nextId("data-id-") },
				{ name: "Alex Wolf", salary: 1000, increase: true, rise: false, id: nextId("data-id-") },
				{ name: "Pepa Svinka", salary: 100, increase: false, rise: false, id: nextId("data-id-") },
			],
		};
		this.maxId = 4;
	}
	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};
	addItem = (name, salary) => {
		if (name.length > 3 && salary.length >= 3) {
			const newTask = { name: name, salary: salary, increase: false, rise: false, id: nextId("data-id-") };
			this.setState(({ data }) => {
				const newArr = [...data, newTask];
				return {
					data: newArr,
				};
			});
		}
	};
	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] };
				}
				return item;
			}),
		}));
	};
	render() {
		const employees = this.state.data.length;
		const increase = this.state.data.filter((item) => item.increase === true).length;
		return (
			<div className="app">
				<AppInfo onNumberEmpolyees={employees} onNumberIncrease={increase} />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList data={this.state.data} onDelete={this.deleteItem} onToggleProp={this.onToggleProp} />
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
