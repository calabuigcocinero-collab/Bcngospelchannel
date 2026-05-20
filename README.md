https://live1.ovalcast.com/live-stream-video-widget/bcngospeltv
```html id="r5j2xc"
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BCN Gospel Channel TV</title>

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>

<style>

body{
    margin:0;
    background:#000;
    color:white;
    font-family:Arial, sans-serif;
    text-align:center;
}

.container{
    margin-top:40px;
    padding:20px;
}

h1{
    color:#00d4ff;
    font-size:48px;
}

p{
    color:#ccc;
    font-size:20px;
}

video{
    width:90%;
    max-width:900px;
    margin-top:30px;
    border-radius:12px;
    box-shadow:0 0 20px rgba(0,212,255,0.4);
}

.footer{
    margin-top:40px;
    color:#777;
    font-size:14px;
}

</style>
</head>

<body>

<div class="container">

    <h1>📺 BCN Gospel Channel TV</h1>

    <p>Canal Gospel Online en Vivo</p>

    <video id="video" controls autoplay></video>

    <div class="footer">
        © BCN Gospel Channel TV
    </div>

</div>

<script>

const video = document.getElementById('video');
const videoSrc = 'https://live1.ovalcast.com:3916/live/bcngospeltvlive.m3u8';

if (Hls.isSupported()) {

    const hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);

} else if (video.canPlayType('application/vnd.apple.mpegurl')) {

    video.src = videoSrc;

}

</script>

</body>
</html>
```
