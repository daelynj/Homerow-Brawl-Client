export async function fetchGlobalStatsAPI(setGlobalStats: any) {
  let uuid = sessionStorage.getItem("uuid");

  await fetch("http://localhost:3000/api/players_rooms/", {
    method: "GET",
    mode: "cors",
    headers: { uuid: JSON.stringify(uuid) }
  })
    .then(result => result.json())
    .then(result => {
      setGlobalStats(result);
    });
}
