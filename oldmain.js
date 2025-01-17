

$(document).ready(() => {

    $("#submit").click(() => {
        let userInput = $("#search").val();
        if (userInput.trim === "") {
            alert("Enter a search term");
            return;
        }
        alert(userInput);
        $.ajax({
            url: `https://api.giphy.com/v1/gifs/search?api_key=ieXVx0OK5eZYn1qCdSjzenB0mcgbp5Vt&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`,
            method: 'get'
        })
        .done((res)=>{
            console.log("res", res);

            let gifsContainer = $("#gifsContainer");
            gifsContainer.empty();
            res.data.forEach(gif => {
                let gifUrl = gif.images.original.url;
                gifsContainer.append(`<img src="${gifUrl}" alt="GIF" class="gif-item" />`);
            });
            })
        })
    })




    fetch('https://api.giphy.com/v1/gifs/search?api_key=ieXVx0OK5eZYn1qCdSjzenB0mcgbp5Vt&q=${userInput}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips')