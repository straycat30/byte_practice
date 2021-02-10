import ajax from './ajax'
//验证登录的API
export const reqLogin = (nickname, password) => ajax('https://qc8o4l.fn.thelarkcloud.com/login', { nickname, password }, 'POST')
//提交注册信息的API
export const submitReg = (nickname, password, email) => ajax('https://qc8o4l.fn.thelarkcloud.com/register', { nickname, password, email }, 'POST')
//提交文章的API
export const submitArt = (nickname, title_name, content, type, title_img) => ajax('https://qc8o4l.fn.thelarkcloud.com/add_article', { nickname, title_name, content, type, title_img }, 'POST')
//获取文章的API
export const getArt = (nickname) => ajax('https://qc8o4l.fn.thelarkcloud.com/get_all_title', { keywords: nickname }, 'POST')
//修改文章内容的API
export const changeContent = (_id, title_name, content, type, title_img) => ajax('https://qc8o4l.fn.thelarkcloud.com/update_article', { title_id: _id, title_name, content, type, title_img }, 'POST')
//修改文章状态的API
export const changeLine = (_id, linestatus) => ajax('https://qc8o4l.fn.thelarkcloud.com/update_article_status', { title_id: _id, status: linestatus }, 'POST')
//删除文章
export const deleteArt = (_id) => ajax('https://qc8o4l.fn.thelarkcloud.com/delete_article', { id: _id }, 'POST')
//修改个人资料
export const changeNick = (_id, nickname) => ajax('https://qc8o4l.fn.thelarkcloud.com/update_user_nickname', { id: _id, nickname: nickname }, 'POST')
export const changePWD = (_id, password) => ajax('https://qc8o4l.fn.thelarkcloud.com/update_user_password', { id: _id, password }, 'POST')
export const changeGender = (_id, gender) => ajax('https://qc8o4l.fn.thelarkcloud.com/update_user_gender', { id: _id, gender }, 'POST')
export const changeEmail = (_id, email) => ajax('https://qc8o4l.fn.thelarkcloud.com/update_user_email', { id: _id, email }, 'POST')
export const changeAvatar = (_id, avatar) => ajax('https://qc8o4l.fn.thelarkcloud.com/update_user_avatar', { id: _id, avatar }, 'POST')
//注销用户
export const deleteUser = (id) => ajax('https://qc8o4l.fn.thelarkcloud.com/delete_user', { id }, 'POST')
