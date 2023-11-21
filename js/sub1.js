let xhr = new XMLHttpRequest();
xhr.open("GET", "sub1.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let steam = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
          <figure><img src="${steam[index].event}" alt=""></figure>
          <div class="txt">
            <h3>${steam[index].tit}</h3>
            <p>${steam[index].date}</p>
          </div>
      `;
      result.innerHTML = output;
    });

  }
};

