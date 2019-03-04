<template>
    <div class="container">
         <div class="form-contact">
                    <h3>CONTACT FORM</h3>
                    <p>Proin pharetra volutpat quam, nec malesuada elit lobortis id. Curabitur mauris sem, scelerisque et sem et, auctor lobortis felis.</p>
                            
                            <div class="input" :class="{ invalid: $v.name.$error }">
                            <input type="text" name="tekst" @blur="$v.name.$touch()" placeholder="Name" class="input-field" v-model="name" >
                            <p v-if="$v.name.$error">Import name!</p>
                            </div>
                            <div class="input" :class="{ invalid: $v.email.$error }">
                                <input type="email" class="input-field" @blur="$v.email.$touch()" placeholder="Email Address"  v-model="email">
                                <p v-if="$v.email.$error">Please valid email address!</p>
                            </div>
                            <input type="text" name="subject" placeholder="Subject" class="input-field">
                             <br>
                             <!-- <div class="input" :class="{ invalid: $v.textarea.$error }"> -->
                            <textarea class="input-text" rows="10" maxlength="500" @input="$v.textarea.$touch()" v-model="textarea" ></textarea>
                            <!-- </div> -->
                            <br>
                            <button type="button" name="send" class="btn-contact">SEND MESSAGE</button>
         </div>
    </div>
</template>

<script>
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Form',
    data() {
     return {
         email: '',
         name: '',
         minLength:5,
         maxLength:10
        
     }
    },
    validations: {
        email: {
         required,
         email
        },
        name: {
            required,
            name
        },
        // textarea: {
        //     required,
        //     textarea
        // }
    },
}
</script>

<style>
.container {
    height: 620px;
}
  .form-contact h3{
    color: #8a8888;
    width: 190px;
    height: 18px;
    font-size: 19px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .form-contact p{
    width: 555px;
    height: 35px;
    color: #8a8888;
    font-size: 15px;
  }
  .input-field {
    width: 350px;
    height: 45px;
    border: 2px solid #8a8888;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  input.input-field {
      margin-bottom: 5px;
  }
  .input.invalid p {
      color: red;
      height: 10px;
  }
  .input-text {
    width: 560px;
    height: 221px;
    border: 2px solid #8a8888;
    margin-bottom: 10px;
  } 
  .btn-contact {
    width: 140px;
    height: 40px;
    font-weight: 600;
    border: none;
    background-color: rgb(45,204,114); 
    color: white;
  }
</style>