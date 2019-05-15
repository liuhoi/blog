<template>
  <div class="projects-view">
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
  name: "projectsView",
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
    });
  }
};
</script>

<style lang="scss" scoped>
.projects-view{
  .project-app {
    max-width: 1020px;
    min-width: 300px;
    padding: 1em 0;
  }
  .card-container {
    margin: 30px auto;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .project-card {
      width: 320px;
      height: 160px;
      margin-bottom: 20px;
      position: relative;
      .card-wrap {
        box-sizing: border-box;
        height: 100%;
        display: block;
        padding: 20px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        color: #34495e;
        transition: border-color 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
        &:hover {
          border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.15);
          box-shadow: 0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.1);
        }
        .card-header {
          position: absolute;
          width: 100%;
          height: 20px;
          top: 0;
          left: 0;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        .card-title {
          margin-top: 10px;
          margin-bottom: 5px;
          font-size: 1.2em;
        }
        .card-footer {
          box-sizing: border-box;
          position: absolute;
          width: 100%;
          padding: 0 20px;
          bottom: 20px;
          left: 0;
          span:first-child {
            padding-right: 20px;
          }
          .fa {
            padding-right: 5px;
          }
        }
      }
    }
  }
}
</style>
