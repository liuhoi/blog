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
    }, 550);
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
}

newInstance.finish = function(){
    hide();
}

export default newInstance ;