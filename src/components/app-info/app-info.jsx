import "./app-info.css";
const AppInfo = (props) => {
	return (
		<div className="app-info">
			<h1>
				Учет работников в компании <span>YURI-OO-SCAM 💸</span>
			</h1>
			<h2>Общее число сотрудников: {props.onNumberEmpolyees}</h2>
			<h2>Премию получат: {props.onNumberIncrease}</h2>
		</div>
	);
};
export default AppInfo;
