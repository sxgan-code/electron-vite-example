import {defineStore} from 'pinia'
import {sleep} from "@/utils/CommonUtils.ts";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMainStore = defineStore('mainStore', {
    // other options...
    // 推荐使用 完整类型推断的箭头函数
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            counter: 0,
            count:0
        }
    },
    actions: {
        /*自增函数*/
        increment() {
            this.counter++
        },
        async autoIncrement(){
            while (true){
                await sleep(50)
                if (this.count===100){
                    return
                }
                this.counter++
                this.count++
            }
        }
    },
    getters:{
        // 类型是自动推断的，因为我们没有使用 `this`
        doubleCount: (state) => state.counter * 2,
    }
})