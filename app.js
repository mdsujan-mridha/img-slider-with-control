// ===============get image id ======================
const img1=document.getElementById('img-1');
const img2 = document.getElementById('img-2');
const img3 = document.getElementById('img-3');
const img4 = document.getElementById('img-4');
const img5 = document.getElementById('img-5');
const img6 = document.getElementById('img-6');

// =============add event======== 
document.getElementById('btn-1').addEventListener('click',function(){
    const addPic=document.getElementById('btn-1');
    img1.style.display="block";
    img5.style.display="none";
    img4.style.display="none";
    img3.style.display = "none";
    img2.style.display = "none";
    img6.style.display = "none";
});

document.getElementById('btn-2').addEventListener('click',function(){
    const addPic=document.getElementById('btn-2');
    img2.style.display = "block";
    img1.style.display = "none";

});
document.getElementById('btn-3').addEventListener('click',function(){
    const addPic=document.getElementById('btn-3');
    img3.style.display="block"
    img2.style.display = "none";
    img1.style.display = "none";

});
document.getElementById('btn-4').addEventListener('click',function(){
    const addPic=document.getElementById('btn-4');
    img4.style.display="block"
    img3.style.display = "none";
    img2.style.display = "none";
    img1.style.display = "none";
    
});
document.getElementById('btn-5').addEventListener('click',function(){
    const addPic=document.getElementById('btn-5');
    img5.style.display="block";
    img4.style.display="none";
    img3.style.display = "none";
    img2.style.display = "none";
    img1.style.display = "none";
    
});
document.getElementById('btn-6').addEventListener('click',function(){
    const addPic=document.getElementById('btn-6');
    img6.style.display="block";
    img5.style.display="none";
    img4.style.display="none";
    img3.style.display = "none";
    img2.style.display = "none";
    img1.style.display = "none";
    
});