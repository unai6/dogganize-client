<template>
  <div class="separator"><span class="separator__span">or</span></div>
</template>
<style lang="scss">
.separator {
  margin: 20px 0px;
  position: relative;
  text-align: center;

  &::before {
    display: inline-block;
    border-top: 1px solid rgb(184, 196, 194);
    content: '';
    margin: 0px auto;
    position: absolute;
    height: 0px;
    inset: 50% 0px 0px;
    transform: translateY(-50%);
    width: 300px;
  }
  &__span {
    background: rgb(255, 255, 255);
    padding: 0px 10px;
    font-size: 14px;
    font-weight: normal;
    line-height: 16px;
    color: rgb(93, 108, 116);
    text-align: center;
    position: relative;
  }
}
</style>
