import EmployeesListItem from "../empolyees-list-item/employees-list-item";
import "./employees-list.scss";
const EmployeesList = ({ data, onDelete, onToggleProp, OnChangeSalary }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;
		return (
			<EmployeesListItem
				key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
				OnChangeSalary={(e) => OnChangeSalary(id, e.target.value)}
			/>
		);
	});
	return <ul className="app-list list-group">{elements}</ul>;
};
export default EmployeesList;
