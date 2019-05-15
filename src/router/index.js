import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
  mode:'hash',
  routes
})

router.beforeEach((to, from, next)=>{
  console.log(to);
  next();
})
router.afterEach((to, from, next)=>{
  console.log(to);
})

export default router;
