export function handleURL(setAuthenticated: any) {
  var url = new URL(window.location.href);
  var search_params = new URLSearchParams(url.search);

  var state = search_params.get("state");
  var code = search_params.get("code");
  var error = search_params.get("error");

  if (code !== null && state === "goodtimes" && error !== "access_denied") {
    getSlackOAuth(code, setAuthenticated);
  }
}

const getSlackOAuth = (code: any, setAuthenticated: any) => {
  var entryURL = "http://" + window.location.host + window.location.pathname;
  var data: any = { code: code, redirectURI: entryURL };

  fetch("http://localhost:3000/api/slack/oauth", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      sessionStorage.setItem("uuid", result.uuid);
      sessionStorage.setItem("authenticated", result.authenticated);

      setAuthenticated(result.authenticated);
    });
};
