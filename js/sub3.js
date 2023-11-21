let xhr = new XMLHttpRequest();
xhr.open("GET", "sub3.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let experience = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
      <a href="login.html">
        <figure><img src="${experience[index].img}" alt=""></figure>
          <p>${experience[index].date}</p>
          <h3>${experience[index].name}</h4>
      </a>
      `;
      result.innerHTML = output;
    });

  }
};

