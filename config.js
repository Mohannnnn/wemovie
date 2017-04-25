/*
 * 配置文件
 * 
 */
'use strict'

var path = require('path');
var util = require('./libs/util');

var wechat_file = path.join(__dirname,'./config/wechat.txt');

var config = {
	wechat:{
		appID:'wxc08d0b0fe411dd43',
		appSecret:'561abeefed74a1c7b659e8fd27a2f08f',
		token:'weixin_node',
		encodingAESkey : 'dtg3u7B5gbHPCttZMm5Uame3JlosOCYABwKjlIZ3EZc',
		getAccessToken:function(){
			return util.readFileAsync(wechat_file);
		},
		saveAccessToken:function(data){
			return util.writeFileAsync(wechat_file,data);
		},
	}
};

module.exports = config;