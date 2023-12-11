import moment from "moment";

export default (seconds) => momemt.utc(seconds * 1000).format("mm:ss");