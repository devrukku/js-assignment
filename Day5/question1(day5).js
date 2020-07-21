console.log("FILTER AND MAP FUNCTIONS ON AN ARRAY ACCEPTED BY THE USER.");
let start =prompt("Enter the starting point.");
let end =prompt("Enter the ending point.");

function range(start,end){
    var ans=[];
    for (let i =start; i<= end;i++){
        ans.push(i);
    }
    return ans;
}
result = range(start,end)
console.log(result)

let odd = result.filter(el => el%2!=0)
console.log(odd)

let oddSqs = result.filter(el => el%2!=0).map(el => el**2);
console.log(oddSqs)

