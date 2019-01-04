// import Vue from 'vue'

const EMAIL_REG = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const MOBILE_REG = /^1\d{10}/
const NUMBER_REG = /^[0-9]*$/
const CHINESE_REG = /^[\u4e00-\u9fa5]+$/
const VEHICLENUMBER_REG = /^[京沪津渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁]{1}[a-zA-Z]{1}[a-zA-Z0-9]{5,6}/

const isRule = function (regText, value, msg) {
  const reg = new RegExp(regText)
  if (!value || !value.length) {
    return true
  }
  if (!reg.test(value)) {
    // Vue.prototype.$toast(msg)
    return false
  }
  return true
}
export default {
  /**
   * 判断邮箱
   */
  isEmail: (email, msg) => {
    return isRule(EMAIL_REG, email, msg)
  },
  /**
   * 判断手机号，包括中国移动、联通、电信、170、171虚拟号段
   */
  isMobile: (mobile, msg) => {
    return isRule(MOBILE_REG, mobile, msg)
  },
  /**
   * 判断整数
   */
  isNumber: (value, msg) => {
    return isRule(NUMBER_REG, value, msg)
  },
  /**
   * 判断中文
   */
  isChinese: (name, msg) => {
    return isRule(CHINESE_REG, name, msg)
  },
  /**
   * 判断车牌号
   */
  isVehicleNumber: (str, msg) => {
    return isRule(VEHICLENUMBER_REG, str, msg)
  },
  /**
   * 判断身份证号
   */
  isIdCard: (card) => {
    if (!card) return true
    var num = card.toUpperCase()
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
    if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
      return false
    }
    // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    // 下面分别分析出生日期和校验位
    var len, re
    var birthday, sex
    var valnum
    var arrInt
    var arrCh
    var nTemp
    var bGoodDay
    var i
    len = num.length

    if (len === 15) {
      // 获取出生日期
      birthday = '19' + card.substring(6, 8) + '-' + card.substring(8, 10) + '-' + card.substring(10, 12)
      // 获取性别
      sex = parseInt(card.substr(14, 1)) % 2 === 1 ? 'M' : 'F'

      re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/)
      var arrSplit = num.match(re)

      // 检查生日日期是否正确
      var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
      bGoodDay = (dtmBirth.getYear() === Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) && (dtmBirth.getDate() === Number(arrSplit[4]))
      if (!bGoodDay) {
        return false
      } else {
        // 将15位身份证转成18位
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        nTemp = 0
        num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6)
        for (i = 0; i < 17; i++) {
          nTemp += num.substr(i, 1) * arrInt[i]
        }
        num += arrCh[nTemp % 11]
      }
    } else if (len === 18) {
      // 获取出生日期
      birthday = card.substring(6, 10) + '-' + card.substring(10, 12) + '-' + card.substring(12, 14)
      // 获取性别
      sex = parseInt(card.substr(16, 1)) % 2 === 1 ? 'M' : 'F'

      re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/)
      arrSplit = num.match(re)

      // 检查生日日期是否正确
      dtmBirth = new Date(arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4])
      bGoodDay = (dtmBirth.getFullYear() === Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) === Number(arrSplit[3])) && (dtmBirth.getDate() === Number(arrSplit[4]))
      if (!bGoodDay) {
        return false
      } else {
        // 检验18位身份证的校验码是否正确。
        // 校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
        nTemp = 0
        for (i = 0; i < 17; i++) {
          nTemp += num.substr(i, 1) * arrInt[i]
        }
        valnum = arrCh[nTemp % 11]
        if (valnum !== num.substr(17, 1)) {
          return false
        }
      }
    }
    return {
      birthday: birthday,
      sex: sex
    }
  }
}
