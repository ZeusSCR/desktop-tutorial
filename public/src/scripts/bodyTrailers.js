let trailers = [
    {url:'./src/videos/trailer_01.webm'},
    {url:'./src/videos/trailer_02.webm'},
    {url:'./src/videos/trailer_03.webm'},
];

let maxTrailers = 2;
let trailer = 0;

function nextTrailer2()
{
    setTimeout(function() {
        trailer++;
        if (trailer > maxTrailers) {
            trailer = 0;
        }

        document.querySelector('.container-body-trailers').src = trailers[trailer].url
        nextTrailer()
    }, 15000)
}

function nextTrailer()
{
    setTimeout(function() {
        trailer++;
        if (trailer > maxTrailers) {
            trailer = 0;
        }

        document.querySelector('.container-body-trailers').src = trailers[trailer].url
        nextTrailer2()
    }, 15000)
}

nextTrailer()