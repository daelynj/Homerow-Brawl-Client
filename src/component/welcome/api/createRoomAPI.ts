export const createRoomAPI = (
  setRoomID: any,
  setIsLoaded: any,
  setError: any
) => {
  return (event: React.MouseEvent) => {
    fetch("https://typinggame-server.herokuapp.com/api/rooms", {
      method: "POST",
      mode: "cors"
    })
      .then(response => response.json())
      .then(
        result => {
          setRoomID(result.id);
          setIsLoaded(true);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
    event.preventDefault();
  };
};
