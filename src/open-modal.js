Vue.component('modal-window',{

  template:
  `<div id="overlay" v-show="this.showContent">
    <div id="content">
      <p>選択したものを削除してもよろしいですか？</p>
      <button type="button" v-on:click="closeModal">閉じる</button>
      <button type="button" name="button" v-on:click="completeTask">削除</button>
    </div>
  </div>`,

  data: function(){
    return{
      showContent: false,
      comp:true
    }
  },

  mounted: function(){
    bus.$on('bus-event',this.OpenModal)
  },

  methods:{
    closeModal:function(){
      this.showContent = false
    },
    OpenModal:function(e){
      this.showContent = e
    },
    completeTask:function(){
      bus.$emit('bus-complete')
      this.showContent = false
    },
  }




})
