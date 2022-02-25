import Interesting from "./interesting";
import Trends from "./trends";

export default function RightSide() {

	return (
		<div className="LeftList">
			<div className="trends">
				<input className="input" type="search" placeholder="Search Twitter" />
			</div>
			<Trends />
			<Interesting />
		</div>
	)
}