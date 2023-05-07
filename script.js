
let password_gen_obj = {
  final_password :'',
  user_input:{limit_val :'',uppercase_val:'',lowercase_val:'',number_val:'',symbol_val:''},
  prompt_input : function(){
              this.user_input.limit_val = window.prompt("Enter the limit of your password \nPls enter from value 8 to 128")
              console.log("limit_val = ",this.user_input.limit_val)

              // if (!this.user_input.limit_val) {
              //   return;
              // }
              if((this.user_input.limit_val < 8 && this.user_input.limit_val > 128) || this.user_input.limit_val.length == 0){
                window.alert("Please type a number between 8 TO 128")
                this.prompt_input()
              }

              this.user_input.uppercase_val = window.confirm("Do you want to include UPPERCASE in your password?")
              console.log("uppercase_val  = ",this.user_input.uppercase_val)               

              this.user_input.lowercase_val = window.confirm("Do you want to include LOWERCASE in your password?")
              console.log("LOWERCASE -VAL = ",this.user_input.uppercase_val) 

              this.user_input.number_val = window.confirm("Do you want to include NUMBER in your password?")
              console.log("NUMBER VAL = ",this.user_input.uppercase_val) 
              
              this.user_input.symbol_val = window.confirm("Do you want to include SYMBOL in your password?")
              console.log("SYMBOL VAL = ",this.user_input.uppercase_val) 

              if(!this.user_input.uppercase_val && !this.user_input.lowercase_val && !this.user_input.number_val && !this.user_input.symbol_val){
                window.alert("PLEASE SELECT ATLEAST 1 CRITERIA TO GENERATE PASSWORD")
                this.prompt_input()
              }

              this.generateRandChar();
  },
  generateRandChar : function(){

                        console.log("------------")
                        const random_gen_main=(min,max)=>{
                          const ascii_limit = (max - min)+1
                          let logic = String.fromCharCode(Math.floor(Math.random() * ascii_limit)+min)
                          console.log("logic ==== ",logic)
                          return logic
                          // this.result()
                        }

                        console.log("*********************")
                        const upperCaseVal=()=>{
                          const up_rand = random_gen_main(65,90)
                          console.log("Uppercase rand = ",up_rand)
                          return up_rand

                          // return random_gen_main(65,90)


                        }
                      
                        const lowerCaseVal=()=>{
                          const lw_rand = random_gen_main(97,122)
                          console.log("Lowercase rand = ",lw_rand)
                          return lw_rand

                          // return random_gen_main(97,122)


                        }
                      
                        const numberVal=()=>{
                          const num_rand = random_gen_main(48,57)
                          console.log("Number rand = ",num_rand)
                          return num_rand

                          // return random_gen_main(48,57)


                        }
                      
                        const symbolVal=()=>{
                          const sym = '~!@#$%^&*()_+|}{<>*./'
                          const sym_rand = sym[Math.floor(Math.random() * sym.length)]
                          console.log("sym_rand = ",sym_rand)
                          return sym[Math.floor(Math.random() * sym.length)]
                        }


            const limit = this.user_input.limit_val;
            console.log(limit, "= LIMIT")

            let password = ""

            for (let i=0; i< limit;i++){
              const pwdgen_func_array = [
                {
                  element : this.user_input.uppercase_val,
                  func:upperCaseVal()
                },
                {
                  element : this.user_input.lowercase_val,
                  func:lowerCaseVal()
                },
                {
                  element : this.user_input.number_val,
                  func:numberVal()
                },
                {
                  element : this.user_input.symbol_val,
                  func:symbolVal()
                }
              ]
              
              const arr = pwdgen_func_array.filter((e)=>e.element === true)

              const index=Math.floor(Math.random()*arr.length);
              console.log(index, "= INDEX")
              console.log("ARRAY", arr)
              const letter=arr[index].func;
              password+=letter;
            }

            console.log("password = ",password)

            let passwordText = document.querySelector("#password");
            passwordText.value = password;
          
            
  },
  main: function () {
    this.prompt_input();
  },
};

=======

let password_gen_obj = {
  final_password :'',
  user_input:{limit_val :'',uppercase_val:'',lowercase_val:'',number_val:'',symbol_val:''},
  prompt_input : function(){
              this.user_input.limit_val = window.prompt("Enter the limit of your password \nPls enter from value 8 to 128")
              console.log("limit_val = ",this.user_input.limit_val)

              // if (!this.user_input.limit_val) {
              //   return;
              // }
              if((this.user_input.limit_val < 8 && this.user_input.limit_val > 128) || this.user_input.limit_val.length == 0){
                window.alert("Please type a number between 8 TO 128")
                this.prompt_input()
              }

              this.user_input.uppercase_val = window.confirm("Do you want to include UPPERCASE in your password?")
              console.log("uppercase_val  = ",this.user_input.uppercase_val)               

              this.user_input.lowercase_val = window.confirm("Do you want to include LOWERCASE in your password?")
              console.log("LOWERCASE -VAL = ",this.user_input.uppercase_val) 

              this.user_input.number_val = window.confirm("Do you want to include NUMBER in your password?")
              console.log("NUMBER VAL = ",this.user_input.uppercase_val) 
              
              this.user_input.symbol_val = window.confirm("Do you want to include SYMBOL in your password?")
              console.log("SYMBOL VAL = ",this.user_input.uppercase_val) 

              if(!this.user_input.uppercase_val && !this.user_input.lowercase_val && !this.user_input.number_val && !this.user_input.symbol_val){
                window.alert("PLEASE SELECT ATLEAST 1 CRITERIA TO GENERATE PASSWORD")
                this.prompt_input()
              }

              this.generateRandChar();
  },
  generateRandChar : function(){

                        console.log("------------")
                        const random_gen_main=(min,max)=>{
                          const ascii_limit = (max - min)+1
                          let logic = String.fromCharCode(Math.floor(Math.random() * ascii_limit)+min)
                          console.log("logic ==== ",logic)
                          return logic
                          // this.result()
                        }

                        console.log("*********************")
                        const upperCaseVal=()=>{
                          const up_rand = random_gen_main(65,90)
                          console.log("Uppercase rand = ",up_rand)
                          return up_rand
                          // return random_gen_main(65,90)
                        }
                      
                        const lowerCaseVal=()=>{
                          const lw_rand = random_gen_main(97,122)
                          console.log("Lowercase rand = ",lw_rand)
                          return lw_rand
                          // return random_gen_main(97,122)
                        }
                      
                        const numberVal=()=>{
                          const num_rand = random_gen_main(48,57)
                          console.log("Number rand = ",num_rand)
                          return num_rand
                          // return random_gen_main(48,57)
                        }
                      
                        const symbolVal=()=>{
                          const sym = '~!@#$%^&*()_+|}{<>*./'
                          const sym_rand = sym[Math.floor(Math.random() * sym.length)]
                          console.log("sym_rand = ",sym_rand)
                          return sym[Math.floor(Math.random() * sym.length)]
                        }


            const limit = this.user_input.limit_val;
            console.log(limit, "= LIMIT")

            let password = ""

            for (let i=0; i< limit;i++){
              const pwdgen_func_array = [
                {
                  element : this.user_input.uppercase_val,
                  func:upperCaseVal()
                },
                {
                  element : this.user_input.lowercase_val,
                  func:lowerCaseVal()
                },
                {
                  element : this.user_input.number_val,
                  func:numberVal()
                },
                {
                  element : this.user_input.symbol_val,
                  func:symbolVal()
                }
              ]
              
              const arr = pwdgen_func_array.filter((e)=>e.element === true)

              const index=Math.floor(Math.random()*arr.length);
              console.log(index, "= INDEX")
              console.log("ARRAY", arr)
              const letter=arr[index].func;
              password+=letter;
            }

            console.log("password = ",password)

            let passwordText = document.querySelector("#password");
            passwordText.value = password;
          
            
  },
  main: function () {
    this.prompt_input();
  },
};



