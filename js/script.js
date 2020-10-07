$(document).ready(function () {
  let concept_blog = document.querySelectorAll('#card-blog p');
  if (concept_blog) {
    concept_blog.forEach((item) => {
      let sliceContent =
        item.innerHTML.replace(/\s+/g, ' ').trim().slice(0, 120) + '...';
      item.innerHTML = sliceContent;
    });
  }
  // let status_collapse = false;
  // let change_status_collapse = document.querySelector('.navbar-toggler-icon');
  // if (change_status_collapse) {
  //   change_status_collapse.addEventListener('click', (e) => {
  //     status_collapse = !status_collapse;
  //     let background = document.querySelector('.wrap-contacts');
  //     if (background) {
  //       if (status_collapse) {
  //         background.classList.add('hidden-wrap');
  //       } else {
  //         setTimeout(() => {
  //           background.classList.remove('hidden-wrap');
  //         }, 200);
  //       }
  //     }
  //   });
  // }
});
