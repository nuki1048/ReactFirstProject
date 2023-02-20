import "./employees-list-item.css";
const classNames = require("classnames");
const EmployeesListItem = (props) => {
	const { name, salary, onDelete, onToggleProp, increase, rise } = props;
	const ListClass = classNames({
		"list-group-item d-flex justify-content-between": true,
		increase: increase,
		like: rise,
	});

	return (
		<li className={ListClass}>
			<span onClick={onToggleProp} data-toggle="rise" className="list-group-item-label">
				{name}
			</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
			<div className="d-flex justify-content-center align-items-center">
				<button onClick={onToggleProp} data-toggle="increase" type="button" className="btn-cookie btn-sm ">
					<i className="fas fa-cookie"></i>
				</button>

				<button onClick={onDelete} type="button" className="btn-trash btn-sm ">
					<i className="fas fa-trash"></i>
				</button>
				<i className="fas fa-star"></i>
			</div>
		</li>
	);
};
export default EmployeesListItem;
