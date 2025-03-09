document.querySelectorAll('.component-video video').forEach(video =>{
  let videoSrc = video.src;
  let a = document.createElement('a')
  a.href = videoSrc;
  document.body.appendChild(a)
  a.click();
})
