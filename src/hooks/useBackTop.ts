import {ref} from 'vue'

export default function useBackTop() {
    const scrollTop = ref(0);
    const backTopFlag = ref(false);
    const scrollToTop = () => {
        scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
        backTopFlag.value = scrollTop.value > 60;
    };
    /* 回到距离顶部top的位置 */
    const goBackTop = (top:number) => {
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    };
    window.addEventListener('scroll', scrollToTop);
    return {
        scrollToTop,
        backTopFlag,
        goBackTop,
    };
}