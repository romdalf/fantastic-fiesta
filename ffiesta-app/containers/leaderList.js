// leaderList.js renders the leader list gotten from the Strapi backend.
import LeaderItem from "../components/leaderItem";
function LeaderList({ leaders, deleteLeaderItem }) {
  return (
    <div className="leaderListContainer">
      <div className="leadersText">Leaders</div>
      {leaders
        .sort((a, b) => a.Time.localeCompare(b.Time))
        .map((leader, i) => (
          <LeaderItem
            leader={leader}
            key={i}
            deleteLeaderItem={deleteLeaderItem}
          />
        ))}
    </div>
  );
}
export default LeaderList;