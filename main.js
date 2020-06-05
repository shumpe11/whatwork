const vm = new Vue ({
  el:'#app',
  data:{
    newTask:'',
    newdeadline:'',
    tasks:[],
    completedTasks:[]
  },

  mounted:function(){
    this.loadTask();
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

    completeTask:function(){
        // this.tasks.checked == true;
      // for(i=1; i<this.tasks.length; i++){
      //   if()
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
