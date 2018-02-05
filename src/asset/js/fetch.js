import {
	baseUrl
} from './env'

// import{
// 	Promise
// } from 'bluebird'
// console.log()

import axios from 'axios'

export default async(type = 'GET', url = '', data = {},go = 'fetch',file="") => {
	type = type.toUpperCase();
	if(url.indexOf("http") == -1)  url = baseUrl + url;
	
	if (type == 'GET'||type == 'DELETE') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
	}

	// var tkres = await axios.get("http://api.aituyou.me:8002/api/v1/auth/getToken?appId=f5e3aa9d025745fd9e8b692413a776f8&appSecret=403622b4301945559244785130818a41")
	var trkes ="";
	var jwt = "123";

	if(type =="GET"||type=="DELETE") {
		if(url.indexOf("?") != -1){
			url +="&jwt="+jwt;
		}else{
			url +="?jwt="+jwt;
		}
	}	
	if(type =="POST"||type=="PUT"||type=="PATCH") url += "?jwt="+jwt;

	let ajaxPromise = new Promise ((resolve,reject)=>{	
		switch(type){
			case "GET":
				axios.get(url,{timeout:120000}).then((res)=>{
					resolve(res.data)
				}).catch((err)=>{
					reject(err)
				});return;
			case "POST":
				axios.post(url,data).then((res)=>{
					resolve(res.data)
				}).catch((err)=>{
					reject(err)
				});return;
			case "DELETE":
				axios.delete(url).then((res)=>{
					resolve(res.data)
				}).catch((err)=>{
					reject(err)
				});return;
			case "PUT":
				axios.put(url,data).then((res)=>{
					resolve(res.data)
				}).catch((err)=>{
					reject(err)
				});return;	
			case "PATCH":
				axios.patch(url,data).then((res)=>{
					resolve(res.data)
				}).catch((err)=>{
					reject(err)
				});return;
			}
		})
	return ajaxPromise;
}