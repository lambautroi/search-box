var search = document.querySelector('.search');
var searchBox = document.querySelector('.searchBox');
var close = document.querySelector('.close');

search.onclick = function () {
  searchBox.classList.add('active');
};

close.onclick = () => {
  searchBox.classList.remove('active');
};
