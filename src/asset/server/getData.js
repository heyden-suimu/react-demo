import fetch from '../js/fetch'
let testUrl = ''
// 获取视频列表
const vedioApi = (type = 'get', obj = {}) => fetch(type, "/api/v1/vw/cardvr/info", obj);
// 删除
const vedioDel = (type = 'get', obj = {}) => fetch(type, "/api/v1/vw/cardvr/delete", obj);

// 通知后台上传
const uploadVideo = (type = 'get', obj = {}) => fetch(type, "/api/v1/vw/cardvr/upload", obj);
const progressVideo = (type = 'get', obj = {}) => fetch(type, "/api/v1/vw/cardvr/progress", obj);


// 获取设备列表
const deviceApi = (type = 'get', obj = {}) => fetch(type, `/api/v1/vw/device/status`, obj);
// 获取总数
const deviceCount = (type = 'get', obj = {}) => fetch(type, `/api/v1/vw/device/count`, obj);

// 设备入库
const addDevice = (type = 'get', obj = {}) => fetch(type, `/api/v1/vw/cardvr/device/statics`, obj);

// 统计报表
const getReport = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/staticalReport`, obj);
//统计在线设备
const onlineReport = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/staticalReportOne`, obj);

// 用户api
const userApi = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/user`, obj);
// 用户登录
const login = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/login`, obj);

// 振动参数Api
const shakeApi = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/shakeSensity`, obj);
// 重置
const refreShake = (type = 'get', obj = {}) => fetch(type, `${testUrl}/api/v1/vw/cardvr/shakeSensityReset`, obj);

// 删除版本
export {
    vedioApi,
    deviceApi,
    vedioDel,
    uploadVideo,
    addDevice,
    deviceCount,
    progressVideo,
    getReport,
    userApi,
    login,
    shakeApi,
    refreShake,
    onlineReport
}