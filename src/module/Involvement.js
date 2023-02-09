export default class Involvement {
  constructor() {
    this.appID = 'RBrsUTVautuAC386npFh';
    this.baseURI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.appID}/`;
  }

  getLikes = async () => fetch(`${this.baseURI}likes`).then((response) => response.json());

  getComments = async (id) => {
    const response = await fetch(`${this.baseURI}comments?item_id=${id}`);
    if (response.status === 400) {
      return [];
    }
    const data = await response.json();
    return data;
  }

  addLike = async (id, user, message) => {
    fetch(`${this.baseURI}likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: user,
        comment: message,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }

  addComment = async (id) => {
    fetch(`${this.baseURI}comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json());
  }
}