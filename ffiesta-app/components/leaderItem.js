// leaderItem.js will hold the single leader display.

function LeaderItem({ leader, deleteLeaderItem }) {
    return (
      <>
        <div className="leaderItem">
          <div className="leaderItemText">{leader.Nickname}</div>
          <div className="leaderItemText">{leader.Time} seconds</div>
          <div className="leaderItemControls">
            {/* <i className="leaderItemControlEdit">
              <button className="bg-default" onClick={() => editLeaderItem(leader)}>
                Edit
              </button>
            </i> */}
            <i className="leaderItemControlDelete">
              <button className="bg-danger" onClick={() => deleteLeaderItem(leader)}>
                -
              </button>
            </i>
          </div>
        </div>
      </>
    );
  }
  export default LeaderItem;