import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/header";
import AddLeader from "../containers/addLeader";
import LeaderList from "../containers/leaderList";
import axios from "axios";
export default function Home() {
  const [leaders, setLeaders] = useState([]);
  useEffect(async () => {
    const result = await axios.get("http://localhost:1337/leaders");
    setLeaders(result?.data);
  }, []);
  const addLeader = async (Nickname,FirstName,LastName,Email) => {
    if (Nickname && Nickname.length > 0 && FirstName && FirstName.length > 0 && LastName && LastName.length > 0 && Email && Email.length > 0 ) {
      const result = await axios.post("http://localhost:1337/leaders", {
        Nickname: Nickname,
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
      });
      setLeaders([...leaders, result?.data]);
    }
  };
  const deleteLeaderItem = async (leader) => {
    if (confirm("Do you really want to delete this item?")) {
      await axios.delete("http://localhost:1337/leaders/" + leader.id);
      const newLeaders = leaders.filter((_leader) => _leader.id !== leader.id);
      console.log(newLeaders);
      setLeaders(newLeaders);
    }
  };
  // const editLeaderItem = async (leader) => {
  //   const newNickname = prompt("Enter new leader text or description:");
  //   if (newNickname != null) {
  //     const result = await axios.put("http://localhost:1337/leaders/" + leader.id, {
  //       Nickname: newNickname,
  //     });
  //     const moddedLeaders = leaders.map((_leader) => {
  //       if (_leader.id === leader.id) {
  //         return result?.data;
  //       } else {
  //         return _leader;
  //       }
  //     });
  //     setLeaders(moddedLeaders);
  //   }
  // };
  return (
    <div>
      <Head>
        <title>kubecon Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <AddLeader addLeader={addLeader} />
        <LeaderList
          leaders={leaders}
          deleteLeaderItem={deleteLeaderItem}
        />
      </main>
    </div>
  );
}