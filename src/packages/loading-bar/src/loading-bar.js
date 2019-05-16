import Vue from 'vue';
import Main  from './loading-bar.vue';
const LoadingBar = Vue.extend(Main);

let instance,
    timer;

function getLoadingBarInstance () {
    instance = instance || newInstance();
    return instance;
}

function hide() {
    setTimeout(() => {
        instance.show = false
        setTimeout(() => {
            clearInterval(timer)
            timer = null;
            instance.percent = 0
        }, instance.transition.opacitySpeed);
    }, instance.transition.duration);
}

const newInstance = function(options = {}){

    instance = new LoadingBar({data:options});

    instance.$mount();

    document.body.appendChild(instance.$el)
    
    return instance;
}

newInstance.start =function(){
    let instance  = getLoadingBarInstance();
    
    instance.show = true;
    instance.percent = 0;
    
  
    // 定义每 100 秒来执行一次动画
    timer = setInterval(() => {
        instance.percent += 3;
        // 如果进度大于 95%，并且设置了自动完成，那么执行结束动作
        if (instance.percent > 95) {
            this.finish()
        }
    }, 10)
}

newInstance.finish = function(){
    instance.percent = 100
    hide();
}

export default newInstance ;