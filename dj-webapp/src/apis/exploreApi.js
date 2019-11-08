import {BASEURL} from "../commons/Config"
const EXPLOREURL = `${BASEURL}/explore`;
export default {
  getexploreInfo (cb) {
    fetch(EXPLOREURL).then(res => {
      res.json().then(cb)
    });
  }
}
