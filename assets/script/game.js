cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad(){
        cc.log('onLoad')
    },

    clickButton:function(sender,str){//sender相当于调用函数的组件自身，str是customeventdata的传值
        if(str=='pintu'){
            cc.log('点击了拼图按钮')
        }
    },

    update(dt){
        cc.log('update')
    },
});
