import Vue from 'vue';
import Main  from './loading-bar.vue';
const LoadingBar = Vue.extend(Main);

let instance,
    timer,
    duration = 800;

function getLoadingBarInstance () {
    instance = instance || newInstance();
    return instance;
}

function clearTimer(){
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function update(options){
    let instance  = getLoadingBarInstance();
    instance.update(options);
}

function hide() {
    setTimeout(() => {
        update({
            show: false
        });
        setTimeout(() => {
            update({
                percent: 0
            });
        }, 200);
    }, duration);
}

const newInstance = function(options = {}){

    instance = new LoadingBar({data:options});

    instance.$mount();

    document.body.appendChild(instance.$el)
    
    return instance;
}

newInstance.start =function(){
    if (timer) return;

    let percent = 0;

    update({
        percent: percent,
        show: true
    });

    timer = setInterval(() => {
        percent += Math.floor(Math.random () * 3 + 1);
        if (percent > 95) {
            clearTimer();
        }
        update({
            percent: percent,
            show: true
        });
    }, 200);
}

newInstance.finish = function(){
    clearTimer();
    update({
        percent: 100,
        show: true
    });
    hide();
}

export default newInstance ;