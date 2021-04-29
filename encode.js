    getCyriptoHex(param) {
        var CryptoJSAesJson = {
            stringify: function (cipherParams) {
                var j = {ct: cipherParams.ciphertext.toString(Vue.CryptoJS.enc.Base64)};
                if (cipherParams.iv) j.iv = cipherParams.iv.toString();
                if (cipherParams.salt) j.s = cipherParams.salt.toString();
                return JSON.stringify(j);
            },
            parse: function (jsonStr) {
                var j = JSON.parse(jsonStr);
                var cipherParams = Vue.CryptoJS.lib.CipherParams.create({ciphertext: Vue.CryptoJS.enc.Base64.parse(j.ct)});
                if (j.iv) cipherParams.iv = Vue.CryptoJS.enc.Hex.parse(j.iv)
                if (j.s) cipherParams.salt = Vue.CryptoJS.enc.Hex.parse(j.s)
                return cipherParams;
            }
        }
        return Vue.CryptoJS.AES.encrypt(JSON.stringify(param), "KEY", {format: CryptoJSAesJson}).toString()
    }
