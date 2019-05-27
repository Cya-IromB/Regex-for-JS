window.addEventListener('DOMContentLoaded',
  function(){
    let txt = 'type=zip; filename=users.zip; size=1024;\ntype=xml; filename=posts.xml; size=2048;';

    console.log('-成型前-');
    console.log(txt);

    console.log('-処理-');
    //この正規表現はchromeでしか機能しないらしい。
    let newTxt = txt.replace(/(?<=filename=)[^;]+/gm,'hi!');

    console.log('-成型前-');
    console.log(txt);

    console.log('-成型後-');
    console.log(newTxt);


  },false
);
