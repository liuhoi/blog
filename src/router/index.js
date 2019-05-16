import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import LoadingBar from '@/packages/loading-bar';

Vue.use(Router);

let progress ;

const router = new Router({
  mode:'hash',
  routes
})

router.beforeEach((to, from, next)=>{
  LoadingBar.start();
  next();
})
router.afterEach((to, from, next)=>{
  LoadingBar.finish();
})

export default router;
