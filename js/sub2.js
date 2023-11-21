let xhr = new XMLHttpRequest();
xhr.open("GET", "sub2.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let trailer = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
      <a href="login.html">
        <figure><img src="${trailer[index].img}" alt=""></figure>
        <div class="txt"> 
          <h4>${trailer[index].tit}</h4>
          <p>${trailer[index].name}</p>
          <span>${trailer[index].key}</span>
        </div>
      </a>
      `;
      result.innerHTML = output;
    });

  }
};