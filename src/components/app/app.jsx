import { Component } from "react";
import nextId from "react-id-generator";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.scss";
class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John Smith", salary: 950, increase: true, rise: true, id: nextId("data-id-") },
				{ name: "Alex Wolf", salary: 1001, increase: true, rise: false, id: nextId("data-id-") },
				{ name: "Pepa Svinka", salary: 100, increase: false, rise: false, id: nextId("data-id-") },
			],
			term: "",
			filter: "all",
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
		if (name.length > 3 && salary.length >= 3 && typeof salary == Number) {
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
	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.name.indexOf(term) > -1;
		});
	};
	onUpdateSearch = (term) => {
		this.setState({ term });
	};
	filterPost = (items, filter) => {
		// eslint-disable-next-line default-case
		switch (filter) {
			case "rise":
				return items.filter((item) => item.rise);
			case "moreThen1000":
				return items.filter((item) => item.salary > 1000);
			default:
				return items;
		}
	};
	onFilterSelect = (filter) => {
		this.setState({ filter });
	};

	onChangeSalary = (id, salary) => {
		const SalaryValue = +salary;
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return { ...item, salary: SalaryValue };
				}
				return item;
			}),
		}));
	};
	render() {
		const { data, term, filter } = this.state;
		const employees = this.state.data.length;
		const increase = this.state.data.filter((item) => item.increase === true).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<div className="app">
				<AppInfo onNumberEmpolyees={employees} onNumberIncrease={increase} />
				<div className="search-panel">
					<SearchPanel onUpdateSearch={this.onUpdateSearch} />
					<AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
				</div>
				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onChangeSalary={this.onChangeSalary}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
