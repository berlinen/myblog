/**
 * @description 管理员 API 接口
 * @description Administrator's routing API interfaces
 * @author berlin
 */

const Router = require("koa-router");

const { AdminDao } = require('../dao/admin');
const { Auth } = require("../middlewares/auth");
const { Login } = require('../service/login');
const { Resolve } = require("../lib/helper")
const res = new Resolve()

const AUTH_ADMIN = 16;

const router = new Router({
  prefix: "/api/admin"
});

// login 登录获取token
router.post('/login', async (ctx) => {
  // 生成token
  const token = await Login.userLogin({
    email: v.get('body.email'),
    password: v.get('body.password')
  });

  ctx.response.status = 200;
  ctx.body = {
    code: 200,
    msg: '登录成功',
    token
  }
})

// 管理员 注册功能
router.post('/register', async (ctx) => {

  // 创建管理员
  const admin = await AdminDao.create({
    email: v.get('body.email'),
    password: v.get('body.password2'),
    nickname: v.get('body.nickname')
  });

  // 返回结果
  ctx.response.status = 200;
  ctx.body = res.json(admin);
})


module.exports = router;

export {};