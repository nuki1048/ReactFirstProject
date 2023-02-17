import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
function App() {
	const data = [
		{
			name: "John Smith",
			salary: 950,
			increase: true,
			key: 1,
		},
		{
			name: "Alex Wolf",
			salary: 1000,
			increase: true,
			key: 2,
		},
		{
			name: "Pepa Svinka",
			salary: 100,
			increase: false,
			key: 3,
		},
	];
	return (
		<div className="app">
			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployeesList data={data} />
			<EmployeesAddForm />
		</div>
	);
}
export default App;
