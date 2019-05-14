import Main from '@/views/main/Main';
export default [
  {
    path: "/",
    name: "_home",
    redirect: '/index',
    component:  Main,
    children:[{
      path: "/index",
      name: "home",
      component:  () => import("@/views/home/Home.vue"),
    }]
  },
  {
    path: "/tags",
    component: Main,
    children:[{
      path:'',
      name:'tags',
      component:() => import("@/views/tags/Tags.vue")
    }]
  },
  {
    path: "/archives",
    component: Main,
    children:[{
      path:'',
      name:'archives',
      component:() => import("@/views/archives/Archives.vue")
    }]
  },
  {
    path: "/project",
    component: Main,
    children:[{
      path:'',
      name:'project',
      component:() => import("@/views/project/Project.vue")
    }]
  },
  {
    path: "/about",
    component: Main,
    children:[{
      path:'',
      name:'about',
      component:() => import("@/views/about/About.vue")
    }]
  }
];
