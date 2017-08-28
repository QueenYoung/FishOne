function navbarTemplate() {
  const { pathname } = location;
  let link1, link2, link3;
  if (pathname === '/index.html' || pathname === '/') {
    link1 = '#';
    link2 = './reason.html';
    link3 = './secret.html';
  } else if (pathname === '/reason.html') {
    link1 = './index.html';
    link2 = '#';
    link3 = './secret.html';
  } else {
    link1 = './index.html';
    link2 = './reason.html';
    link3 = '#';
  }

  const template = `
   <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbar" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <a href="#" class="navbar-brand my-auto">Fish One</a>
      <ul class="navbar-nav mr-auto ml-3">
        <li class="nav-item active">
          <a class="nav-link" href="${link1}">Introduction</a>
        </li>
        <li class="nav-item justify-content-around">
          <a class="nav-link" href="${link2}">Reason
            <span class="badge badge-danger badge badge-pill">1</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="${link3}" >Secret</a>
        </li>
      </ul>
    </div>
    <a href="#" data-toggle="modal" data-target="#brief">
      <img class="rounded-circle mr-2" width="40px" height="40px" src="img/logo.jpg" />
    </a>
  </nav>

  <header class="jumbotron">
    <h1 class="display-2">For You</h1>
    <p class="lead">It's a website that helps me remember the only girl I like in university</p>
    <hr class="jumbotron-hr" />
    <p class="small text-muted">
      Something is like a cloud of smoke but something will last forever.
      <br>Hope you can remember me after graduation.
    </p>
    <a class="btn btn-primary btn-lg" href="#" role="button" data-toggle="tooltip" data-placement="right" title="其实这个 Button 并没什么卵用">Let's Start</a>

  </header>

  <div class="modal fade" id="brief" tabindex="-1" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content card">
        <header class="modal-header card-header" style="background: white">
          <h5 class="modal-title">Profile</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </header>
        <article class="card-body modal-body mx-4" style="font-family: 'My Font'">
          <figure class="d-flex justify-content-center mb-2 figure">
            <img class="rounded-circle figure-img" src="img/logo.jpg" width="88px" height="88px">
          </figure>
          <h4 class="card-title">About Her</h4>
          <form>
            <div class="row" style="margin-bottom: -20px">
              <div class="form-group col">
                <label>
                  <small>Birthday</small>
                  <p class="form-control-static">1998/1/6 🎂</p>
                </label>
              </div>

              <div class="form-group col">
                <label>
                    <small>Symbolic Animal</small>
                    <p class="form-control-static">Tiger 🐯</p>
                  </label>
              </div>

              <div class="form-group col">
                <label>
                    <small>Constellation</small>
                    <p class="form-control-static">Capricorn ♑️</p>
                  </label>
              </div>
            </div>
          </form>
          <!--First Line End-->
          <ul class="nav nav-tabs my-3 nav-justified">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#baseinformation">基本信息</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#schoolinformation">在校情况</a>
            </li>
          </ul>
          <div class="tab-content">
            <form class="tab-pane active" id="baseinformation" role="tabpanel">
              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">名字</label>
                <div class="col-sm-9">
                  <p class="form-control-static">邱译莹</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">昵称</label>
                <div class="col-sm-9">
                  <p class="form-control-static">一一，小仙女</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">地址</label>
                <div class="col-sm-9">
                  <p class="form-control-static">江西赣州市章贡区</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">喜欢的东西</label>
                <div class="col-sm-9">
                  <p class="form-control-static">小狗狗，大狗狗，鱼，马云爸爸</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">爱好</label>
                <div class="col-sm-9">
                  <p class="form-control-static">舞蹈，运动，足球</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">小目标</label>
                <div class="col-sm-9">
                  <p class="form-control-static">环游世界</p>
                </div>
              </div>
              <a class="card-link d-flex justify-content-end" href="mailto:c6swift@gmail.com"><small class="">Add More Information</small></a>
            </form>
            <!--first tab pane end-->
            <form class="tab-pane" role="tabpanel" id="schoolinformation">
              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">学校</label>
                <div class="col-sm-9">
                  <p class="form-control-static">江西农业大学</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">班级</label>
                <div class="col-sm-9">
                  <p class="form-control-static">1611</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">寝室</label>
                <div class="col-sm-9">
                  <p class="form-control-static">4-419 South</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">室友</label>
                <div class="col-sm-9">
                  <p class="form-control-static">李文洁，邓韵丰，姜帅</p>
                </div>
              </div>

              <div class="form group row">
                <label class="col-sm-3 col-form-label text-muted">职务</label>
                <div class="col-sm-9">
                  <ul class="list-unstyled form-control-static">
                    <li>团支书</li>
                    <li>广播站音制部</li>
                    <li>长跑组</li>
                    <li>团委实践部</li>
                  </ul>
                </div>
              </div>

            </form>
          </div>
          <!--Tab content end-->
        </article>
        <!--Card Block and Modal Body End-->
        <footer class="card-footer text-right">
          <small class="text-muted mx-3">仅仅是我掌握的信息</small>
        </footer>
      </div>
    </div>
  </div>
  `;
  let div = document.createElement('div');
  div.outerHTML = template;
  return div;
}
export default navbarTemplate;