import { Component } from "react";
import "./employees-add-form.scss";
class EmployeesAddForm extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			salary: "",
		};
	}
	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.onAdd(this.state.name, this.state.salary);
		this.setState({
			name: "",
			salary: "",
		});
	};
	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового скамера</h3>
				<form onSubmit={this.onSubmit} className="add-form d-flex">
					<input
						onChange={this.onValueChange}
						type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						name="name"
						value={name}
					/>
					<input
						onChange={this.onValueChange}
						type="number"
						className="form-control new-post-label"
						placeholder="З/П в $"
						name="salary"
						value={salary}
					/>
					<button type="submit" className="btn btn-outline-light">
						Добавить скамера
					</button>
				</form>
			</div>
		);
	}
}
export default EmployeesAddForm;
