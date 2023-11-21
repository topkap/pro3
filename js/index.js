let xhr = new XMLHttpRequest();
xhr.open("GET", "index.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let notice = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
      <ul>
        <li><a href="/proj3/sub/sub3.html">${notice[index].list1}<span>${notice[index].date1}</span></a></li>
        <li class="point"><a href="/proj3/sub/sub3.html">${notice[index].list2}<span>${notice[index].date2}</span></a></li>
        <li><a href="/proj3/sub/sub3.html">${notice[index].list3}<span>${notice[index].date3}</span></a></li>
      </ul>
      `;
      result.innerHTML = output;
    });

  }
};