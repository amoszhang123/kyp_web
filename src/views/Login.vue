<template>
  <div class="home">
    <img :src="data">
  </div>
</template>

<script>
  import {query} from "@/api/login";
export default {
  computed:{
    
  },
  data(){
    return{
      data:"",
    }
  },
  methods:{
    async getQrCode(){
      // let id = this.$route.params.id;
      let id = this.$route.query.id;
      let params = {id:id}
      let code = await query(params);
      // let code = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQAAAABRBrPYAAAB9ElEQVR42u2aPXKDUAyEl3FByRF8FI4GR+MoHIGSgnmK/gAbOx4XqbKPwg7oc6ORdvVEIN9cCypWsYpVrGIywa67jHYzA+W2dnMv/hQDI+Z/3icUtHbfyIr7NDRnjA4D2kXzhpvRGl87fdhsMJoX07zdvKw0fQt6ocfEAxqHdRYGZiw6yyrIxKXZ2uVDAxJgob3TEY+vXySaADuvDeZCYlLzycT/O2Z5U3EBLGHoR9laV5wwaUJMRreffVwZVGpMcZq4Y8RMbfE0rnT+22u9sWCTVhAskONKsR/lHSWmFeRGHOOKJiy0N7NIiLkZ7QOKSk1qjNXTfPUsCswylWfAGFdseNFCAq7aS4Jp3nyE9QbTTJWIvzYgC5YJ0xRtbtLmzrYs0M56Ti8LNvnn3I9yWpPX07UBibDQGOyZ8i3BMd4SYgjfKeHOkuOK6w8nVmLCN3eeM33vOosHy0AuSso+4b+aOAk2uOh6S9nkkovYJgWZEcsKknDnpP0cJJyYT7LI9I0+2qf+PO3fWLC8/IkvYsOdJU4+hNixaSypOLEvyc00Ixa76HBnDZSHvAknFq9vDsV5mGHevOUhwtKdva5McXBxZzosj4K2JcjVq7wrJAIs32ft7hxLlFd3psF27U13zvnNTj5zz4jV/yCqWMUqVrG/wX4Ak39OmtIUta4AAAAASUVORK5CYII=";
      this.data = code.data;
    },
  },
  mounted(){
    this.getQrCode();
  }
}
</script>
