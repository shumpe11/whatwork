<template id="">
  <div id="switch">
    <div id="toAddComplete">
    </div>
    <div class="toCompletedList">
    </div>
  </div>
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
    <button type="button" v-on:click="completeTask">チェックしたものを完了リストへ</button>
    <button type="button" v-on:click="sortTask">期限が近いものを上に</button>
    <button type="button" v-on:click="switchList"></button>
  </div>
</template>

<script type="text/javascript">
  
</script>
