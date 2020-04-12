const goss_concat =require('goss_concat');
 function getRGB(r=255, g=255, b=255) {
     return goss_concat('rgb(',r,',',g,',',b,')');
 }

 console.log(getRGB());