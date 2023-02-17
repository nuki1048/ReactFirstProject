import "./app-filter.css";
const AppFilter = () => {
	return (
		<div className="btn-group">
			<button type="button" className="btn btn-light">
				Все скамери
			</button>
			<button type="button" className="btn btn-outline-light">
				На повишение
			</button>
			<button type="button" className="btn btn-outline-light">
				З/П больше 1000$
			</button>
		</div>
	);
};
export default AppFilter;
