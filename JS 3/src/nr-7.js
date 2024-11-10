let makeBanner = prompt("Write banner name");

let myfunction = (text) => {
   let banner = "";
   let bannerSize = text.length + 4;
   for (let i = 0; i < bannerSize; i++){
        banner += "*";
   }  
   banner += "\n";
        banner += `* ${text} *`;
        banner += "\n";
      for (let i = 0; i < bannerSize; i++){
        banner += "*";
   }
        return banner;
    }
    console.log(myfunction(makeBanner));
