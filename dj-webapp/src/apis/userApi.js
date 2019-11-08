import {BASEURL} from "../commons/Config"
const USERURL = `${BASEURL}/user`;
export default {
  getuserInfo (cb) {
    fetch(USERURL).then(res => {
      res.json().then(cb)
    });
  }
}
