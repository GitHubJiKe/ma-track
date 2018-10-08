import sensors from "sa-sdk-javascreipt";

function initSensors(option) {
  sensors.init(option);
}

const _sensors = function (option) {
  initSensors(option);
  sensors.login()
  return sensors;
}

export default _sensors;
