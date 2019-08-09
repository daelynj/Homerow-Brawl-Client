export const fetchRoomAPI = (path: any, setRoomStatus: any) => {
  fetch("https://typinggame-server.herokuapp.com/api/rooms/" + path, {
    method: "GET",
    mode: "cors"
  })
    .then(response => response.json())
    .then(result => {
      if (result.id === parseInt(path)) {
        setRoomStatus(true);
      }
    });
};
