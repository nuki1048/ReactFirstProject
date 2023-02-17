import "./employees-list-item.css";
import { Component } from "react";
const classNames = require("classnames");
class EmployeesListItem extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			increase: false,
			star: false,
		};
	}
	onIncrease = () => {
		this.setState(({ increase }) => ({
			increase: !increase,
		}));
	};
	onStar = () => {
		this.setState(({ star }) => ({
			star: !star,
		}));
	};
	render() {
		const { name, salary } = this.props;
		const ListClass = classNames({
			"list-group-item d-flex justify-content-between": true,
			increase: this.state.increase,
			like: this.state.star,
		});
		return (
			<li className={ListClass}>
				<span onClick={this.onStar} className="list-group-item-label">
					{name}
				</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
				<div className="d-flex justify-content-center align-items-center">
					<button onClick={this.onIncrease} type="button" className="btn-cookie btn-sm ">
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button" className="btn-trash btn-sm ">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}
export default EmployeesListItem;
