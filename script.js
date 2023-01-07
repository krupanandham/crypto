fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  )
    .then((coinData) => {
      return coinData.json();
       // converted to object
    })
    .then((DataObject) => {
      let table = '';
      DataObject.map((cn) => {
        table += `<tr>
       <td class="cn"><img src="${cn.image}">${cn.name}</td>
       <td class="sml">${cn.sml}</td>
       <td class="price" >$${cn.current_price}</td>
       <td class="tl" >$${cn.market_cap.toLocaleString()}</td>
       <td class="prsnt" > ${Number.parseFloat(
         cn.price_change_percentage_24h
       ).toFixed(2)}% </td>
       <td class="cap" >Mkt Cap: ${cn.total_volume}</td>
       </tr>`;
      });
      document.getElementById('data').innerHTML = table;
    });