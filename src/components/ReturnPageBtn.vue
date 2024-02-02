<script setup lang="ts">
const props = defineProps({
  align: {
    type: String,
    default: 'left',
    required: true,
    validator(value) {
      if (value === 'left' || value === 'center-top' || value === 'center-bottom' || value === 'right') {
        return true
      } else {
        return false
      }
    },
  },
  content: {
    type: String,
    default: '返回上一页',
    required: true,
    validator(value: string) {
      if (value?.toString().length < 10) {
        return true
      } else {
        return false
      }
    },
  },
})
const className: string = 'top-button-box ' + 'align-' + props.align;
let iconCode: string = '';
if (props.align === 'left') {
  iconCode = '\ue68a'
} else if (props.align === 'center-top') {
  iconCode = '\ue698'
} else if (props.align === 'right') {
  iconCode = '\ue69a'
} else if (props.align === 'center-bottom') {
  iconCode = '\ue685'
}
</script>

<template>
  <div :class="'top-button-box align-'+className">
    <i class="icon iconfont">{{ iconCode }}</i>
    <div class="content">
      <p>{{ props.content }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.top-button-box {
  width: 12rem;
  height: 3rem;
  background: #a0cfff;
  line-height: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  border-radius: 1rem;

  .content, i {
    font-family: "Microsoft YaHei";
    font-size: 1.4rem;
    color: var(--text--deep);
  }

  .content {
    width: 8rem;
  }

  i {
    font-size: 1.8rem;
  }

  &:hover {
    i, .content {
      color: #2f6f44;
    }
  }
}

.align-center-top, .align-center-bottom {
  margin: 2rem auto;
}

.align-left {
  margin: 2rem auto 2rem 2rem;
}

.align-right {
  margin: 2rem 2rem 2rem auto;
}
</style>