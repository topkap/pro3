let xhr = new XMLHttpRequest();
xhr.open("GET", "map.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let store = JSON.parse(xhr.responseText);

    let results = document.querySelectorAll(".result");
    results.forEach((result, index) => {
      let output = "";
      output += `
          <h3>${store[index].name}</h3> 
          <p>${store[index].location}</p>
          <div class="map-store-img">
            <div class="xi-shop"></div>
            <span>${store[index].store}</span>
          </div>
      `;
      result.innerHTML = output;
    });

  }
};

