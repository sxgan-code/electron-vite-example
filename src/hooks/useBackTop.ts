import {Ref, ref} from 'vue'

export default function useBackTop(anchorsRef: Ref) {
    // const scrollTop = ref(0);
    const backTopFlag = ref(false);
    // const anchorsRef = ref<HTMLElement>('anchorsRef')
    const scrollToTop = (el: any) => {
        // console.log(el.target.clientHeight);
        // console.log(el.target.scrollHeight);
        // console.log(el.target.scrollTop);
        // scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        backTopFlag.value = el.target.scrollTop > 60;
    };

    const goBackAnchors = (direction: string) => {
        // console.log(anchorsRef)
        // console.log(direction)
        /*
        behavior:表示滚动方式。auto 表示使用当前元素的 scroll-behavior 样式。instant 和 smooth 表示 直接滚到底 和 使用平滑滚动。
        block :表示块级元素排列方向（Y轴）要滚动到的位置。对于默认的 writing-mode: horizontal-tb 来说，就是竖直方向。start 表示将视口的顶部和元素顶部对齐；
              center 表示将视口的中间和元素的中间对齐；end 表示将视口的底部和元素底部对齐；nearest 表示就近对齐。
        inline:表示行内元素排列方向（X轴）要滚动到的位置。对于默认的 writing-mode: horizontal-tb 来说，就是水平方向。其值与 block 类似。
         */
        // @ts-ignore
        anchorsRef.value.scrollIntoView({behavior: "smooth", block: "start", inline: "center"})
    }
    return {
        backTopFlag,
        scrollToTop,
        goBackAnchors,

    };
}