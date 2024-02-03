export default {
    install(app: any) {
        lazy(app)
    }
}

const lazy = (app: any) => {
    app.directive('lazys', {
        // 当前dom元素，图片地址
        mounted(el: any, binding: any) {
            // 定义观察者，用来观察是否到可是区域
            const observe = new IntersectionObserver(([{isIntersecting}]) => {
                // 在可视区域
                if (isIntersecting) {
                    // 停止观察
                    observe.unobserve(el)
                    // 加载失败
                    el.onerror = () => {
                        console.log('img load filed')
                    }
                    // 将lazy的图片内容，交给src
                    el.src = binding.value
                }
            }, {
                threshold: 0
            })
            // 页面挂载后，开启观察
            observe.observe(el)
        }
    })
}