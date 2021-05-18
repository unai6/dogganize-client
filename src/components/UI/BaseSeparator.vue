<template>
  <div class="separator"><span>or</span></div>
</template>
<style>
.separator {
  margin: 20px 0px;
  position: relative;
  text-align: center;
}

.separator span {
  background: rgb(255, 255, 255);
  padding: 0px 10px;
  font-size: 14px;
  font-weight: normal;
  line-height: 16px;
  color: rgb(93, 108, 116);
  text-align: center;
  position: relative;
  
}
.separator::before {
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
.separator::before {
  width: 300px;
}
</style>
