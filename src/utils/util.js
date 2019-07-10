import CryptoJS from 'crypto-js'

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export default {
    // 时间转换
    timestampToTime(timestamp) {
        var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear();
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) ;
        var D = date.getDate();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        return [Y, M, D].map(formatNumber).join('-') + ' ' + [h, m, s].map(formatNumber).join(':')
    },
    // aes加解密
    aesMethod(word, method = 'decrypt') { 
        // 默认decrypt解密 encrypt进行加密
        // key 和 iv 配合设置
        let key = CryptoJS['enc']['Utf8']['parse']('akeyakeyakeyakey');
        let iv = CryptoJS['enc']['Utf8']['parse']('');
        let srcs = '';
        if (method == "decrypt") {
            // Base64 解密
            var encryptedHexStr = CryptoJS.enc.Base64.parse(word);
            // 十六进制 解密
            // var encryptedHexStr = CryptoJS.enc.Hex.parse(word);  
            srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
        } else {
            srcs = CryptoJS['enc']['Utf8']['parse'](word);
        }
        let aesData = CryptoJS.AES[method](srcs, key, { iv: iv, mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
        if (method == "decrypt") {
            let decryptedStr = aesData.toString(CryptoJS.enc.Utf8);
            return decryptedStr.toString();
        } else {
            // 返回大写十六进制加密结果
            // return aesData.ciphertext.toString().toUpperCase();
            // 返回大写Base64加密结果
            return aesData.toString();
        }
    },
}