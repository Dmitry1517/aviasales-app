/* eslint-disable class-methods-use-this */

export default class AviasalesApi {
  async getSearchId() {
    const res = await fetch("https://aviasales-test-api.kata.academy/search");
    if (!res.ok) {
      throw new Error(`Couldn't fetch url, received ${res.status}`);
    }
    return res.json();
  }

  async getTicketsGroup(id) {
    const res = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`,
    );
    if (!res.ok) {
      throw new Error(`Couldn't fetch url, received ${res.status}`);
    }
    // if(res.status===502 || res.status===500 || res.status===404 || res.status !== 200) {
    //   await this.getTicketsGroup(id)
    // }
    else return res.json();
  }
}
