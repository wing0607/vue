//实例化对象
new Vue({
    el:'#vue-app',//el:element 需要获取的元素，一定是html中根容器元素
    data:{
        name:'wing',
        age:'18',
        job:'web开发',
        website:'http://www.thenewstep.com',
        websiteTag:'<a href=\'http://www.thenewstep.com\'>Thenewstep</a>',
        x:0,
        y:0,
        tname:''
    },//data:用于数据的存储
    methods:{//用于存储各种方法
        greet:function (time) {
            return 'Good '+time+""+this.name+'!';
        },
        add:function (inc) {
            this.age+=inc
        },
        subtract:function (dec) {
            this.age-=dec
        },
        updateXY:function (event) {
            console.log(event)
            this.x=event.offsetX;
            this.y=event.offsetY;
        }
    }
});
