<template lang="pug">
  circles
    svg.layout.minitablet_sm-layout.tablet_md-layout.laptop_lg-layout.desktop_xlg-layout(viewBox="0 0 750 750" fill="none" xmlns="http://www.w3.org/2000/svg")
      ellipse(cx="310" cy="200" rx="189.531" ry="183.788" transform="rotate(-21.0493 243.751 204.573)" fill="#FF003D" fill-opacity="0.5")
      ellipse(cx="500" cy="420" rx="189.053" ry="183.309" transform="rotate(-21.0493 242.444 239.648)" fill="#00F0FF" fill-opacity="0.5")
      ellipse(cx="300" cy="580" rx="189.531" ry="183.309" transform="rotate(-21.0493 242.974 239.573)" fill="#9E00FF" fill-opacity="0.5")
      ellipse(cx="120" cy="400" rx="189.531" ry="183.309" transform="rotate(-21.0493 242.724 239.996)" fill="#FFB800" fill-opacity="0.5")
    //- svg.turquoise(width="484" height="479" viewBox="0 0 484 479" fill="none" xmlns="http://www.w3.org/2000/svg")
</template>

<style lang="scss">
  circles {
    position: absolute;
    z-index: -1;
    -webkit-filter: blur(160px); 
    -moz-filter: blur(160px);
    -ms-filter: blur(160px);
    -o-filter: blur(160px);
    filter: blur(160px);
    // filter: url(#blur);   
    // filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='160');
  }
</style>