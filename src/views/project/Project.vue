<template>
  <div>
    <div
      id="article-banner"
      :style="{backgroundImage: 'url('+require('@/assets/images/bg3.svg')+')'}"
    >
      <h2>Projects</h2>
      <p class="post-date">开源项目</p>
    </div>
    <div class="app-body project-app">
      <div class="card-container" id="all-project">
        <section class="project-card" v-for = "(item,index) in projectList" :key="index">
          <a class="card-wrap" :href="item.html_url" target="_blank">
            <div class="card-header" :data-name="item.name" :style="{backgroundImage: geopattern(item.name)}"></div>
            <h3 class="card-title">{{item.name}}</h3>
            <p class="card-description">{{description(item.description)}}</p>
            <div class="card-footer">
              <span>
                <i class="fa fa-star"></i>{{item.stargazers_count}}
              </span>
              <span>
                <i class="fa fa-code-fork"></i>{{item.forks_count}}
              </span>
            </div>
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectsFrmGithub } from "@/api/data";
import GeoPattern from "geopattern";

export default {
  name: "Projects",
  data() {
    return {
      projectList: ""
    };
  },
  methods:{
    description(item){
      var description = item || "";
        if (description.replace(/[\u0391-\uFFE5]/g, "aa").length > 72) {
          description = description.slice(0, 72) + "...";
        }
        return description
    },
    geopattern(name){
      return GeoPattern.generate(name).toDataUrl();
    }
  },
  created(){
  
  },
  mounted() {
    getProjectsFrmGithub().then(res => {
      console.log(data);
      let data = res.data;
      var repos = data
        .sort(function(a, b) {
          return b.stargazers_count - a.stargazers_count;
        })
        .slice(0, 6);
      console.log(repos);
      this.projectList = repos;
      // $(".card-header").each(function() {
      //   var name = $(this).data("name");
      //   $(this).geopattern(name);
      // });
    });
  }
};
</script>
