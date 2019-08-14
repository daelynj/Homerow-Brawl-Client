export const createRoomAPI = (
  setRoomID: any,
  setIsLoaded: any,
  setError: any
) => {
  return (event: React.MouseEvent) => {
    fetch("http://localhost:3000/api/rooms", {
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
