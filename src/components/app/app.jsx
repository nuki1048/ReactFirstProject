import "./app.css";
import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
class App extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: "John Smith", salary: 950, increase: true, id: 1 },
				{ name: "Alex Wolf", salary: 1000, increase: true, id: 2 },
				{ name: "Pepa Svinka", salary: 100, increase: false, id: 3 },
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
		const newTask = { name: name, salary: salary, increase: false, id: this.maxId++ };
		this.setState(({ data }) => {
			const newArr = [...data, newTask];
			return {
				data: newArr,
			};
		});
	};
	render() {
		return (
			<div className="app">
				<AppInfo />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployeesList data={this.state.data} onDelete={this.deleteItem} />
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}
export default App;
