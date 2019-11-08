import {BASEURL} from "../commons/Config"
const HOMEURL = `${BASEURL}/home`;
export default {
  getHomeInfo (cb) {
    fetch(HOMEURL).then(res => {
      res.json().then(cb)
    });
  }
}
