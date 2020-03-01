const avatarPath = 'http://localhost:5000/hdgc/upload/images/avatar/' // 头像地址前缀
const articleCoverPath = 'http://localhost:5000/hdgc/article/images/articleCover/' // 封面地址前缀

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  avatarPath: avatarPath,
  articleCoverPath: articleCoverPath
}
