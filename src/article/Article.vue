<template>
  <div class="wrapper wrapper-content animated fadeInRight">
        <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"   v-model="checked">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary"  v-on:click='submit'>Submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Article' ,
  data(){
    return{
      email:'123@163.com',
      password:'',
      checked:''
    }
  },
  methods:{
      submit:function(){
        console.log(this.email,this.password,this.checked)
        
      }
  }
 
}

</script>
