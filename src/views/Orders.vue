<template>
  <div style="float:left">
      <h5>{{name}}</h5>
      <div v-for="(item, index) in props"
        :key="index" style="display:block;float:left;width:100%">
        <h5>{{item.name}}</h5>
        <el-radio-group v-model="item.values.vid" @change="(val)=>readioChange(val,index)">
        <el-radio-button 
        v-for="(item, index) in item.values"
        :key="index"
        :label="item.vid"
        >{{item.name}}
        </el-radio-button>
        </el-radio-group>
        </div>
      <div style="float:left;width:100%"><p>选择下单时间</p></div>
      


        <OrderModel 
            :userList="users"
            :selectedUsers="selectedUsers"
            @change="timeChange"
            @userchange="userSelect"
            @orderOk="createOrder"
        ></OrderModel>
  </div>
    <!-- <Goods></Goods> -->
</template>

<script>
import OrderModel from "@/components/OrderModel";
import {getWoods,buy,getUsers} from "@/api/login";
export default {
  name: 'Orders',
  components: {
    OrderModel
  },
  // props: ['data', 'limitOffset', 'total', "loading", "height", "maxHeight"],
  data() {
    return {
        name:"",
        
        sku:[],
        props:[],
        radio:'',
        spu:"",
        time:"",
        visible: false,
        confirmLoading: false,
        checkList: [],
        checkedList: [],
        indeterminate: true,
        checkAll: false,
        order_result:"",
        users:[], 
        selectedUsers:[],      

    }
        },
        methods:{
            async getWoods(){
              let spu = this.$route.query.spu;
              let id = this.$route.query.id;
              // this.form.id = id;
              this.getUserList(id);
              let params = {spu:spu,id:id}
              console.info(params)
              let wood = await getWoods(params);
              this.name = wood.data.name;
              this.props = wood.data.props;
              // this.radio = this.props[0].
              this.spu = wood.data.spu;
           },
           readioChange(val,index){
              this.sku[index] = val
              console.info(this.sku)
           },
           timeChange(data){
             this.time=data
             console.warn('ordertime')
           },
           userSelect(userName){
            this.selectedUsers = userName
           },

          async getUserList(id){
                let params = {open_id:id}
                let response = await getUsers(params);

                this.users = response.data.data;
                this.selectedUsers.push(this.users[0]);   
            },
           async createOrder(){
             let params = {
               spu:this.spu,
               time:this.time,
               name:this.name,
               sku:this.sku,
               users:this.selectedUsers,
               props:this.props,
               }
               console.info(params)
              let response = await buy(params);
              if (response.data.code==200) {
                    this.loading = false;
                    this.$message({
                        type: 'success',
                        message: '下单成功'
                    });
                    await this.list();
                } else {
                    this.loading = false;
                    this.$message({
                        type: 'error',
                        message: '下单失败'
                    });
                }
           }
        },
        mounted(){
          this.getWoods();
          
        }
}
</script>
