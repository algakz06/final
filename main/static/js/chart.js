const renderContent = (response) => {
  const items = response.data.rates;
  let content = document.getElementById("data");
  let returnData = "";

  Object.entries(items).forEach((el) => {
    const [key, value] = el;
    if (key != "RUB") {
      returnData += `
				  <tr onclick="">
					  <td>${key}</td>
					  <td class="money">${(items["RUB"] / items[key]).toFixed(4)}</td>
				  </tr>
				  `;
    } else {
      returnData += `
				  <tr>
					  <td>USD</td>
					  <td class="money">${items[key].toFixed(4)}</td>
				  </tr>
				  `;
    }
  });
  console.log(content);
  document.getElementById("data").innerHTML = returnData;
};

axios
  .get(
    "https://openexchangerates.org/api/latest.json?app_id=d268e68663c340c28b78331f95e8c81e&symbols=EUR,RUB,GBP,JPY,AZN"
  )
  .then((r) => {
    renderContent(r);
  });
