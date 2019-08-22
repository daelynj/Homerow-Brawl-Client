export async function fetchGlobalStatsAPI(setGlobalStats: any) {
  let uuid = sessionStorage.getItem("uuid");

  await fetch("https://homerow-brawl-server.herokuapp.com/api/players_rooms/", {
    method: "GET",
    mode: "cors",
    headers: { uuid: JSON.stringify(uuid) }
  })
    .then(result => result.json())
    .then(result => {
      setGlobalStats(result);
    });
}
