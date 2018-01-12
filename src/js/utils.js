
function getJSON(url) {
  return new Promise((resolve , reject) => {
    const request = new XMLHttpRequest();

    request.open("GET", url);

    request.onload = () => {
      try {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject(this.status + " " + this.statusText);
        }
      } catch (e) {
        reject(e.message);
      }
    };

    request.onerror = () => {
      reject(this.status + " " + this.statusText);
    };

    request.send();

  });
}

let utils = {
  getJSON
};

export default utils;

