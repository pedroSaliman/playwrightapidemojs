const {test,expect,request}=require("@playwright/test");
/////////////////////////////////
///////////////First call/////////////
/////////////////////////////////
test("firstcall",async()=>{
const api =await request.newContext();
const get=await api.get("https://dummyjson.com/users");
expect(get.ok()).toBeTruthy();
const bodyrequest=await get.json();
console.log(bodyrequest);
expect(bodyrequest.users[0].firstName).toEqual("Terry");


})


test("SingleUser",async()=>{
    const api =await request.newContext();
    const get=await api.get("https://dummyjson.com/users/1");
    expect(get.ok()).toBeTruthy();
    const bodyrequest=await get.json();
    console.log(bodyrequest);
     expect(bodyrequest.lastName).toEqual("Medhurst");
    
    
    })



    test("filterUser",async()=>{
        const api =await request.newContext();
        const get=await api.get("https://dummyjson.com/users/filter?key=hair.color&value=Brown");
        expect(get.ok()).toBeTruthy();
        const bodyrequest=await get.json();
        console.log(bodyrequest);
          expect(bodyrequest.users[0].firstName).toEqual("Mavis");
        
        
        })



        test("searchUser",async()=>{
            const api =await request.newContext();
            const get=await api.get("https://dummyjson.com/users/search?q=John");
            expect(get.ok()).toBeTruthy();
            const bodyrequest=await get.json();
            console.log(bodyrequest);
               expect(bodyrequest.users[0].firstName).toEqual("Johnathon");
            
            
            })

            test("LimitAndSkipUser",async()=>{
                const api =await request.newContext();
                const get=await api.get("https://dummyjson.com/users?limit=5&skip=10&select=firstName,age");
                expect(get.ok()).toBeTruthy();
                const bodyrequest=await get.json();
                console.log(bodyrequest);
                    expect(bodyrequest.users[4].firstName).toEqual("Jeanne");
                
                
                })

                test("usercart",async()=>{
                    const api =await request.newContext();
                    const get=await api.get("https://dummyjson.com/users/5/carts");
                    expect(get.ok()).toBeTruthy();
                    const bodyrequest=await get.json();
                    console.log(bodyrequest);
                    
                    
                    })






                    
                test("userpost",async()=>{
                    const api =await request.newContext();
                    const get=await api.get("https://dummyjson.com/users/5/posts");
                    expect(get.ok()).toBeTruthy();
                    const bodyrequest=await get.json();
                    console.log(bodyrequest);
                    expect(bodyrequest.posts[0].title).toEqual("She was in a hurry.");

                    
                    
                    })
                    test("post",async()=>{
    
                        const api =await request.newContext();
                        const post=await api.post("https://dummyjson.com/users/add",{
                            data:{
                                "firstName": "mohamed",
                                "lastName": "walled",
                                "age":22
                            }
                        });
                        expect(post.ok()).toBeTruthy();
                        const bodyrequest=await post.json();
                        console.log(bodyrequest);
                        const name= await bodyrequest.firstName;
                        expect(name).toEqual("mohamed");
                        
                        
                        });
                        test("put",async()=>{
                            const api =await request.newContext();
                            const post=await api.put("https://dummyjson.com/users/1",{
                                data:{
                                    
                                    "lastName": "walled",
                                    
                                }
                            });
                            expect(post.ok()).toBeTruthy();
                            const bodyrequest=await post.json();
                            console.log(bodyrequest);
                            const name= await bodyrequest.lastName;
                            expect(name).toEqual("walled");
                            
                            
                            });
                            test("delete",async()=>{
                                const api =await request.newContext();
                                const post=await api.delete("https://dummyjson.com/users/1")
                                expect(post.ok()).toBeTruthy();
                               
                                
                                });