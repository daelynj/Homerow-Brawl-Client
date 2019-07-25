export const fetchRoomAPI = (path: any, setRoomStatus: any) => {
  fetch("http://localhost:3000/api/rooms/" + path, {
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
