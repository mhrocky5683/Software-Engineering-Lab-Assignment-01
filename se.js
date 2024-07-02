// Question 1
function findavg(arr){
    let avg=0;
    for(let i=0;i<arr.length ;i++){
    let curentnum=arr[i];
    avg +=curentnum;
    }
    avg=avg/arr.length;
    return avg;
   }
   findavg([5,6,7]);