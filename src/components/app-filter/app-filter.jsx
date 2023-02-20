import "./app-filter.css";
const AppFilter = (props) => {
	const buttonsData = [
		{ name: "all", label: "Все скамери" },
		{ name: "rise", label: "	На повишение" },
		{ name: "moreThen1000", label: "	З/П больше 1000$" },
	];
	const buttons = buttonsData.map(({ name, label }) => {
		const active = props.filter === name;
		const clazz = active ? " btn-light" : " btn-outline-light";
		return (
			<button onClick={() => props.onFilterSelect(name)} type="button" key={name} className={`btn ${clazz}`}>
				{label}
			</button>
		);
	});
	return <div className="btn-group">{buttons}</div>;
};
export default AppFilter;
