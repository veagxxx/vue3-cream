<template>
  <div class="search-input__wrapper" v-click-outsize="onClickOutsize" @click="onEnlarge">
    <span class="search-input__prefix" @click="onSearch">
      <span class="prefix-icon">
        <el-icon><Search /></el-icon>
      </span>
    </span>
    <input 
      v-if="isDisplay"
      v-focus
      class="search-input__inner"
      :value="modelValue" 
      :placeholder="placeholder" 
      @input="(e: any) => onInput(e.target.value)" 
    />
  </div>
</template>
<script lang='ts' setup>
  import { computed, reactive, ref } from 'vue';
  interface Props {
    modelValue: string;
    placeholder?: string;
    clearable?: boolean;
    size?: 'default' | 'small' | 'large';
  }
  const props = withDefaults(defineProps<Props>(), {
    placeholder: '搜索',
    clearable: false,
    size: 'default',
  })
  const styleMap = {
    default: { 
      minWidth: '24px', 
      width: '24px', 
      maxWidth: '250px', 
      height: '28px', 
      fontSize: '14px', 
      radius: '16px' 
    },
    small: { 
      minWidth: '20px', 
      width: '20px', 
      maxWidth: '200px', 
      height: '24px', 
      fontSize: '13px', 
      radius: '16px' 
    },
    large: { 
      minWidth: '30px', 
      width: '30px', 
      maxWidth: '250px', 
      height: '32px', 
      fontSize: '16px', 
      radius: '18px' 
    },
  }
  const showInput = ref<boolean>(false)
  const isDisplay = computed<boolean>(() => {
    return !!props.modelValue || !!showInput.value
  })
  const style = reactive(styleMap[props.size]);
  const emit = defineEmits(['update:modelValue', 'onSearch'])
  const onInput = (value: string) => {
    emit('update:modelValue', value)
  }
  const onClear = () => {
    emit('update:modelValue', '')
  }
  const onEnlarge = () => {
    showInput.value = true;
    style.width = style.maxWidth;
  }
  const onClickOutsize = (event: Event) => {
    if (event && !props.modelValue) {
      showInput.value = false;
      style.width = style.minWidth;
    }
  }
  const onSearch = () => {
    if (!isDisplay.value) {
      return;
    }
    emit('onSearch', props.modelValue)
  }
</script>
<style lang='scss' scoped>
  .search-input__wrapper {
    position: relative;
    overflow: hidden;
    width: v-bind('style.width');
    height: v-bind('style.height');
    line-height: v-bind('style.height');
    border: 1px solid #ccc;
    padding: 2px 4px 2px 4px;
    display: flex;
    align-items: center;
    border-radius: v-bind('style.radius');
    transition: all 0.5s;
    font-size: v-bind('style.fontSize');
    &:focus-within {
      border: 1px solid var(--el-color-primary);
    }
    .search-input__prefix {
      cursor: pointer;
    }
    .search-input__prefix {
      display: inline-block;
      height: 100%;
      line-height: v-bind('style.height');
      width: v-bind('style.minWidth');
      .prefix-icon {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        line-height: v-bind('style.height');
      }
    }
    .search-input__inner {
      min-width: 0px;
      flex: 1 1 0px;
      height: 100%;
      color: #333;
      outline: none;
      margin: 0;
      border: none;
      font-size: v-bind('style.fontSize');
      transition: all 0.5s;
      line-height: v-bind('style.height');
    }
  }
</style>