function timelineItem(title, body, date, imgSrc) {
  return `
  <div class="timeline-item">
    <div class="timeline-img"></div>
      <div class="card timeline-content">
        <img class="card-img-top img-fluid" src=${imgSrc}>
        <span class="date badge">${date}</span>
        <section class="card-body">
          <h4 class="card-title">${title}</h4>
          <p class="card-text text-justify">${body}</p>
        </section>
    </div>
  </div>
      `;
}
