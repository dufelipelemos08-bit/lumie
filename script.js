let cart=0;
function addCart(name){cart++;document.getElementById('cartCount').textContent=cart;document.getElementById('cartText').textContent=`${name} foi adicionado ao carrinho. Itens no carrinho: ${cart}.`;document.getElementById('cartOverlay').style.display='flex'}
function openCart(){document.getElementById('cartOverlay').style.display='flex'}
function closeCart(){document.getElementById('cartOverlay').style.display='none'}
function openSearch(){document.getElementById('searchOverlay').style.display='flex'}
function closeSearch(){document.getElementById('searchOverlay').style.display='none'}
function subscribe(e){e.preventDefault();e.target.innerHTML='<strong>Pronto! Você entrou para a lista LUMIÉ ✦</strong>'}
document.querySelectorAll('.overlay').forEach(x=>x.addEventListener('click',e=>{if(e.target===x)x.style.display='none'}));