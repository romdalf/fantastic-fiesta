// addLeader.js is where new leaders are added to our backend.
function AddLeader({ addLeader }) {
    return (
      <>
        <div className="addLeaderContainer">
          <input
            className="leaderInputText"
            type="text"
            placeholder="nickname..."
            id="Nickname"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addLeader(Nickname.value);
                Nickname.value = "";
              }
            }}
          />

          <input
            className="leaderInputText"
            type="text"
            placeholder="first name..."
            id="FirstName"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addLeader(FirstName.value);
                FirstName.value = "";
              }
            }}
          />

<input
            className="leaderInputText"
            type="text"
            placeholder="last name..."
            id="LastName"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addLeader(LastName.value);
                LastName.value = "";
              }
            }}
          />

          <input
            className="leaderInputText"
            type="text"
            placeholder="email..."
            id="Email"
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                addLeader(Email.value);
                Email.value = "";
              }
            }}
          />

          <input
            className="leaderInputButton"
            type="button"
            value="+"
            onClick={() => {
              addLeader(Nickname.value,FirstName.value,LastName.value,Email.value);
              Nickname.value = "";
              FirstName.value = "";
              LastName.value = "";
              Email.value = "";
            }}
          />
        </div>
      </>
    );
  }
  export default AddLeader;