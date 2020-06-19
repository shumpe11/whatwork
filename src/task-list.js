Vue.component('task-list',{
  template:`<div class="task-list">
              <ul>
                <li v-for="task in tasks">
                  <label v-bind:for="task.id">
                    <input type="checkbox" v-bind:id="task.id" v-model="task.checked" v-on:change="saveTask">{{ task.name }} <span>～{{task.deadline}}</span>
                  </label>
                </li>
              </ul>
              <div id="input">
                <p>課題名(授業名 課題名という風に間にスペースを空けてください)</p>
                <input type="text" v-model="newTask" v-on:keyup.enter="addTask">
                <p>期限
                  <input type="text" v-model="newdeadline">
                </p>
                <button type="button" v-on:click="addTask">追加</button>
                <button type="button" v-on:click="OpenModal">チェックしたものを完了リストへ</button>
                <button type="button" v-on:click="sortTask">期限が近いものを上に</button>
                <button type="button" v-on:click="switchList"></button>
              </div>
            </div>`,


    mounted:function(){
      this.loadTask();
      bus.$on('bus-complete',this.completeTask)
    },
    data: function(){
      return {
        newTask:'',
        newdeadline:'',
        tasks:[],
        open:true,
        completedTasks:[]
      }
    },


    methods:{
      addTask:function(){
        that = this;
        let numberForId = 1;
        let d = Date.parse(this.newdeadline);
        this.tasks.push({id:this.tasks.length + numberForId,
                        name: that.newTask,
                        deadline:that.newdeadline,
                        numberForSort:d,
                        checked:false});
        this.saveTask();
      },

      OpenModal:function(){
        bus.$emit('bus-event',open)
      },

      completeTask:function(){
      // component('open-modal').OpenModal()
        this.completedTasks = this.tasks.filter(function(task){
          return task.checked == true;
        })

        this.tasks = this.tasks.filter(function(task){
          return task.checked == false;
        });
        this.saveTask();
      },

      switchList:function(){

      },

      loadTask: function(){
        this.tasks = JSON.parse( localStorage.getItem('tasks') );
      },

      saveTask: function(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      },

      sortTask:　function(a,b){
        if (a.numberForSort > b.numberForSort) {
          return -1;
        }else{
          return 1;
        }
      }
    }





})
