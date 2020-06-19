<template>
  <div style="float:left">
        <el-date-picker
                style="width: 190px"
                type="datetime"
                v-model="value"
                @change="changeTime"
                placeholder="选择日期时间"
                value-format="yyyy-MM-dd HH:MM:SS"
                size="small"
                align="right">
        </el-date-picker>
        <el-button size="small" @click="create">
          提交订单
        </el-button>

    <el-dialog title="选择下单的淘宝账号" :visible.sync="dialogTableVisible">

    <el-checkbox :indeterminate="isIndeterminate"  style="margin-right: 1" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedUsers" @change="handleCheckedChange">
        <el-checkbox style="display:block;" v-for="user in userList" :label="user" :key="user">{{user}}</el-checkbox>
    </el-checkbox-group>
    <div slot="footer" class="dialog-footer">
        <el-button type="small" @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="small" @click="orderOk">确 定</el-button>
    </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "OrderModel",
        props: ['userList','selectedUsers'],
        data() {
            return {
                value: '',
                dialogTableVisible: false,
                dialogFormVisible: false,
                checkAll: false,
                checkedUsers: [],
                users: [],
                isIndeterminate: true
            }
        },
        methods: {
            create(){
                // this.getUserList()
                this.dialogTableVisible = true;
            },
            orderOk(){
                this.dialogTableVisible = false
                this.$emit('orderOk')
            },
            //全选下单账户
            handleCheckAllChange(val) {
                this.checkedUsers = val ? this.users : [];
                this.isIndeterminate = false;
                this.$emit("userchange", this.checkedUsers);
            },
            //勾选下单账户
            handleCheckedChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.users.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.users.length;
                this.$emit('userchange',value)
            },
            //修改下单时间
            changeTime(val){
                this.$emit("change", val);
            },
        },

        watch: {
            userList:function(newData,oldData){
                console.info("dalhdaiojoin")
                console.log(oldData)  //newData就是orderData
                console.log(newData)
				this.users = newData;     
				//	methods的函数在这里调用可以获取到newOrderData的值	      
			}
        },
        mounted() {
            
        }
    }
</script>

<style>
    .el-checkbox:last-of-type {
    margin-right: 1;
}
</style>

