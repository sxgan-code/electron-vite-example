import {defineStore} from 'pinia'
import {sleep} from "@/utils/CommonUtils";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMainStore = defineStore('mainStore', {
    // other options...
    // 推荐使用 完整类型推断的箭头函数
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            counter: 0,
            count: 0,
            isMask: false,
        }
    },
    actions: {
        /*自增函数*/
        increment() {
            this.counter++
        },
        async autoIncrement() {
            this.changeMaskState()
            while (true) {
                await sleep(50)
                if (this.count === 100) {
                    this.changeMaskState()
                    return
                }
                this.counter++
                this.count++
            }

        },
        /* 设置遮罩状态 */
        changeMaskState() {
            this.isMask = !this.isMask
        }
    },
    getters: {
        // 类型是自动推断的，因为我们没有使用 `this`
        doubleCount: (state) => state.counter * 2,
        // 返回全局遮罩状态
        getIsMask: (state) => state.isMask,
    }
})