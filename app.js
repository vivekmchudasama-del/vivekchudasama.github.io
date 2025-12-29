// visitor count
const KEY='visitor-count';if(!localStorage.getItem('visited')){localStorage.setItem('visited','1');localStorage.setItem(KEY,(+localStorage.getItem(KEY)||0)+1)}document.getElementById('visitorCount').innerText=localStorage.getItem(KEY)||1;
// cursor
const c=document.querySelector('.cursor');document.addEventListener('mousemove',e=>{c.style.left=e.clientX+'px';c.style.top=e.clientY+'px'})
