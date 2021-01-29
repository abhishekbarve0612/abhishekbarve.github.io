function calcTotal(){
  var total = document.querySelectorAll("tr");
  console.log(total);
  var items = document.querySelectorAll("td[data-ns-test='price']");
  let sum = 0;
  for (const item of items) {
    sum += parseInt(item.innerText);
  }
  console.log(sum);
  var ans = document.querySelector('td[data-ns-test="grandTotal"]');
  ans.innerText = sum;
  total[5].style.display = "block";
}