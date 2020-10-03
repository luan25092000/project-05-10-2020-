$(document).ready(function () {
  let concept_blog = document.querySelectorAll('#card-blog p');
  if (concept_blog) {
    concept_blog.forEach((item) => {
      let sliceContent =
        item.innerHTML.replace(/\s+/g, ' ').trim().slice(0, 120) + '...';
      item.innerHTML = sliceContent;
    });
  }
});
