var searchForm = document.getElementById('search-bar-form');
    searchForm.addEventListener("submit", function(e){
        e.preventDefault()
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
                var data = JSON.parse(xhttp.responseText);
                var photoData = data.photos;
                console.log(photoData);
                var columns = document.getElementsByClassName('img-column');
                var imgSection = document.getElementById('photo-section')
                var column1 = document.getElementById('img-column1');
                var column2 = document.getElementById('img-column2');
                var column3 = document.getElementById('img-column3');

                column1.innerHTML = "";
                column2.innerHTML = "";
                column3.innerHTML = "";
                var i = 0;
                photoData.forEach(function(image){
                    var imgContainer = document.createElement('div');
                    imgContainer.classList.add('imgContainer');
                    imgContainer.innerHTML = `
                        <img class="img" src=${image.src.original}>
                        <p class="photographer">${image.photographer}</p>
                    `;
                    columns[i].appendChild(imgContainer);
                    if (i<imgSection.childElementCount-1){
                        i++;
                    } else {
                        i = 0;
                    }
                })
    }
};
    var textValue = document.getElementById('search-bar').value;
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
    xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001a770e4bfaf9e4fe591c3920836acd65c");
    xhttp.send();
})


