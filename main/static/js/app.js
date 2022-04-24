function update() {


    let tag =  document.getElementById('inp_1').value;
    let tags = '"бизнес"';

    if(tag != null || tag != undefined) {
      tags += ' OR ' + `"${tag}"`;
    }

  $(document).ready(function () {

    let url = `https://api.goperigon.com/v1/all?q=${tags}&language=ru&from=2022-03-24&apiKey=b27c6a80-0ecb-43bc-bd1c-3a621358631b`;
    $.ajax({
      url: url,
      method: "GET",
      dataType: "JSON",

      beforeSend: function () {
        $(".progress").show();
        console.log("bro1");
      },

      complete: function () {
        $(".progress").hide();
        console.log("bro2");
      },

      success: function (newsdata) {
        let output = "";
        let News = newsdata.articles;
        for (var i in News) {
          output += `
            <div class="col l4 m6 s12">
            <div class="card medium hoverable">
              <div class="card-image">
                <img src="${News[i].imageUrl}" class="responsive-img" height='30px;'>
              </div>
              <div class="card-content">
                <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
                <h6 class="truncate" style='white-space: normal;font-size:15px'><a style='color:black;text-decoration:none;' href="${News[i].url}" title="${News[i].title}">${News[i].title}</a></h6>
                <p style='font-size:12px;'><b>Автор</b>: ${News[i].authorsByline} </p>
              </div>
  
              <div class="card-reveal">
                <span class="card-title"><i class="material-icons right">×</i></span>
                <p><b>Описание</b>: ${News[i].description}</p>
              </div>
  
              <div class="card-action">
                <a href="${News[i].url}" target="_blank" class="btn">Читать</a>
              </div>
             </div>
            </div>
          `;
        }

        if (output !== "") {
          $("#newsResults").html(output);
          console.log("Результат");
        }

      },

      error: function () {
        let errorMsg = `<div class="errorMsg center">Что-то пошло не так! Обратитесь к системному администратору.</div>`;
        $("#newsResults").html(errorMsg);
      }
    })

  });

}

$(document).ready(function () {

  let url = `https://api.goperigon.com/v1/all?q="бизнес"&language=ru&from=2022-03-24&apiKey=b27c6a80-0ecb-43bc-bd1c-3a621358631b`;
  $.ajax({
    url: url,
    method: "GET",
    dataType: "JSON",

    beforeSend: function () {
      $(".progress").show();
      console.log("bro1");
    },

    complete: function () {
      $(".progress").hide();
      console.log("bro2");
    },

    success: function (newsdata) {
      let output = "";
      let News = newsdata.articles;
      for (var i in News) {
        output += `
          <div class="col l4 m6 s12">
          <div class="card medium hoverable">
            <div class="card-image">
              <img src="${News[i].imageUrl}" class="responsive-img" height='30px;'>
            </div>
            <div class="card-content">
              <span class="card-title activator"><i class="material-icons right">more_vert</i></span>
              <h6 class="truncate" style='white-space: normal;font-size:15px'><a style='color:black;text-decoration:none;' href="${News[i].url}" title="${News[i].title}">${News[i].title}</a></h6>
              <p style='font-size:12px;'><b>Автор</b>: ${News[i].authorsByline} </p>
            </div>
            <div class="card-reveal">
              <span class="card-title"><i class="material-icons right">×</i></span>
              <p><b>Описание</b>: ${News[i].description}</p>
            </div>
            <div class="card-action">
              <a href="${News[i].url}" target="_blank" class="btn">Читать</a>
            </div>
           </div>
          </div>
        `;
      }

      if (output !== "") {
        $("#newsResults").html(output);
        console.log("Результат");
      }

    },

    error: function () {
      let errorMsg = `<div class="errorMsg center">Что-то пошло не так! Обратитесь к системному администратору.</div>`;
      $("#newsResults").html(errorMsg);
    }
  })

});