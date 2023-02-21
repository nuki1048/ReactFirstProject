import "./search-panel.scss";
import { Component } from "react";
class SearchPanel extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			term: "",
		};
	}
	onValueChange = (e) => {
		const term = e.target.value;
		this.setState({ term });
		this.props.onUpdateSearch(term);
	};
	render() {
		const { term } = this.state;
		return (
			<input
				placeholder="Найти cкамера"
				type="text"
				className="form-control search-input"
				value={term}
				onChange={this.onValueChange}
			/>
		);
	}
}
export default SearchPanel;
