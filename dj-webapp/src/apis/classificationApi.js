import {BASEURL} from "../commons/Config"
const ClassificationURL = `${BASEURL}/classification`;
export default {
  GetClassificationModels (cb) {
    fetch(ClassificationURL).then(res => {
      res.json().then(cb)
    });
  }
}
