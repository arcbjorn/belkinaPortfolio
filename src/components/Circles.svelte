<template lang="pug">
  circles
    svg.layout.minitablet_sm-layout.tablet_md-layout.laptop_lg-layout.desktop_xlg-layout(viewBox="0 0 680 660" fill="none" xmlns="http://www.w3.org/2000/svg")
      ellipse(cx="300" cy="150" rx="189.531" ry="183.788" transform="rotate(-21.0493 243.751 204.573)" fill="#FF003D" fill-opacity="0.5")
      ellipse(cx="550" cy="400" rx="189.053" ry="183.309" transform="rotate(-21.0493 242.444 239.648)" fill="#00F0FF" fill-opacity="0.6")
      ellipse(cx="300" cy="700" rx="189.531" ry="183.309" transform="rotate(-21.0493 242.974 239.573)" fill="#9E00FF" fill-opacity="0.6")
      ellipse(cx="100" cy="400" rx="189.531" ry="183.309" transform="rotate(-21.0493 242.724 239.996)" fill="#FFB800" fill-opacity="0.5")
    //- svg.turquoise(width="484" height="479" viewBox="0 0 484 479" fill="none" xmlns="http://www.w3.org/2000/svg")
</template>

<style lang="scss">
  circles {
    position: absolute;
    filter: blur(14rem);
    z-index: -1;
  }
</style>