//一下資料為模擬集合，個人理解js中的集合就是將物件放進陣列
var strs = [
    {
    "id":123,"pwd":456
    },{
    "id":456,"pwd":123
    },{
    "id":4681,"pwd":9815
    },{
    "id":471,"pwd":4981
    },{
    "id":1234789,"pwd":156
    },{
    "id":789,"pwd":158
    },{
    "id":"vgwh","pwd":"vgsya"
    },{
    "id":1,"pwd":"tcv"
    },{
    "id":256,"pwd":"vtc0"
    }
   ];
   //假設規定每頁顯示長度為3
   var len = 3;
   //確認該集合會被分成幾頁，分成幾頁就代表需要幾個頁面按鈕,封裝封裝方便多次運用
   function limits(){
    var countLim = Math.ceil(strs.length/len);//餘數也算是一頁，這裡用向上取整
    //確認頁面按鈕個數，進行迴圈顯示到頁面上
    document.getElementById("inputs").innerHTML='';//清空一下
    for(var i=1;i<=countLim;i++){
    document.getElementById("inputs").innerHTML+='<input type="button" value="'+i+'" onclick="limitinput(this)"/>';//每個頁面按鈕都繫結上一個點選事件
    }
   }
   var choose = 0;//建立一個全域性變數用來儲存當前處於第幾個頁面
   //點選按鈕獲取當前按鈕的值進行選擇當前table是第幾頁資料
   function limitinput(ids){
    choose = ids.value;
    tablestr(choose);//重新整理table資料
    limits();//重新整理頁面按鈕
     ids.style.backgroundColor='red';//當前點選的頁面按鈕背景顏色改變為紅色
    liminputcolor(choose);//頁面按鈕變色
   }
   //通過當前頁面按鈕和頁面資料長度將資料放進table內，封裝封裝！！！必須封裝
   function tablestr(num){//num是指當前哪個頁面
    var num1 = (num-1)*len;//確定迴圈開始的集合下標
    var num2 = num*len;//確定迴圈結束的結束下標
    document.getElementById("table").innerHTML='';//清空一下
    for(var i=num1;i<num2;i++){//遍歷陣列
    var str = '';
    for(var h in strs[i]){//遍歷集合
     str+='<td>'+strs[i][h]+'</td>';
    }
    document.getElementById("table").innerHTML+='<tr>'+str+'</tr>';//每迴圈一次新增一條資料
    }
   }
   function liminputcolor(choose){
    document.getElementById("inputs").childNodes[choose-1].style.backgroundColor="red";
   }
   //初始化，當前頁面顯示為第一頁
   limits();//頁面按鈕生成
   document.getElementById("inputs").childNodes[0].style.backgroundColor="red";//第一個按鈕的背景顏色為紅色
   tablestr(1);//table資料顯示
   /*
   到這裡就結束了，但是！！！這些都是被封裝好了的，意思就是說，在最開始的時候這就是通用的做法；
   最開始的資料就是在模擬後端的集合，也就是說，不論你後端傳遞給前端什麼集合都可以實現分頁功能 */
