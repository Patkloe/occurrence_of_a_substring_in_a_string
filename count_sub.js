function count_sub(t,s){
 var tab = t.split(" ");
 alert(tab);
 var dist = {};
 var res;
 for(var i = 0; i < tab.length; i++){
  let index = tab[i];
  dist[index] = (dist[index] || 0) + 1;
 }
   
  let val = Object.keys(dist);
 
   for(var j in val){
       alert(val[j]);
     if( val[j] === s)
          res = dist[val[j]];
   }
 tab;
  return res;
}
 var test = "the quick brown fox jumps over the lazy dog";
 count_sub(test,'the');
