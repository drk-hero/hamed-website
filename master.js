const _images = [{
        logo: "img/section/1.png",
        url: "img/section/1-1.jpg",
        alt: "پارس نفت",
        bgcolor: "rgba(221,22,27, .8)"
    },
    {
        logo: "img/section/2.png",
        url: "img/section/2-1.jpg",
        alt: "کت نفت ایرانول",
        bgcolor: "rgba(255,212,1, .8)"
    },
    {
        logo: "img/section/3.png",
        url: "'img/section/3-1.jpg'",
        alt: "شرکت نفت بهران",
        bgcolor: "rgba(255,212,1, .8)"
    },
    {
        logo: "img/section/4.png",
        url: "img/section/4-1.jpg",
        alt: "همراه اول",
        bgcolor: "rgba(0,204,204, .8)"
    },
    {
        logo: "img/section/5.png",
        url: "img/section/5-1.jpg",
        alt: "نوین چرم",
        bgcolor: "rgba(236,28,36, .8)"

    },
    {
        logo: "img/section/6.png",
        url: "img/section/6-1.jpg",
        alt: "فروشگاه اینترنتی",
        bgcolor: "rgba(42,131,215, .8)"
    },
    {
        logo: "img/section/7.png",
        url: "img/section/7-1.jpg",
        alt: "فروشگاه 5040",
        bgcolor: "rgba(42,131,215, .8)"
    },
    {
        logo: "img/section/8.png",
        url: "img/section/8-1.jpg",
        alt: "فروشگاه مجازی شهروند",
        bgcolor: "rgba(204,26,86, .8)"
    }, {
        logo: "img/section/1.png",
        url: "img/section/1-1.jpg",
        alt: "پارس نفت",
        bgcolor: "rgba(221,22,27, .8)"
    },
    {
        logo: "img/section/2.png",
        url: "img/section/2-1.jpg",
        alt: "کت نفت ایرانول",
        bgcolor: "rgba(255,212,1, .8)"
    },
    {
        logo: "img/section/3.png",
        url: "'img/section/3-1.jpg'",
        alt: "شرکت نفت بهران",
        bgcolor: "rgba(255,212,1, .8)"
    },
    {
        logo: "img/section/4.png",
        url: "img/section/4-1.jpg",
        alt: "همراه اول",
        bgcolor: "rgba(0,204,204, .8)"
    },
    {
        logo: "img/section/5.png",
        url: "img/section/5-1.jpg",
        alt: "نوین چرم",
        bgcolor: "rgba(236,28,36, .8)"

    },
    {
        logo: "img/section/6.png",
        url: "img/section/6-1.jpg",
        alt: "فروشگاه اینترنتی",
        bgcolor: "rgba(42,131,215, .8)"
    },
    {
        logo: "img/section/7.png",
        url: "img/section/7-1.jpg",
        alt: "فروشگاه 5040",
        bgcolor: "rgba(42,131,215, .8)"
    },
    {
        logo: "img/section/8.png",
        url: "img/section/8-1.jpg",
        alt: "فروشگاه مجازی شهروند",
        bgcolor: "rgba(204,26,86, .8)"
    }
]

let _main, _header, _header_body, _info, _containerF, _fake, _navbar, _liNav, _AphoneN, _nav_imgL, _call_div, _menu_burger, _burger_span_one, _burger_span_two, _burger_span_tree, _list_menu_burger
_main = document.getElementsByClassName('main-header')[0]
_header = document.getElementsByClassName('header-scroll')[0]
_header_body = document.getElementsByClassName('header-body')[0]
_info = document.getElementsByClassName('info-more')[0]
_containerF = document.getElementById('continer')
_fake = document.getElementsByClassName('height-fake')[0]
_navbar = document.getElementsByClassName('nav-header')[0]
_liNav = document.querySelectorAll(".ul-header>li")
_AphoneN = document.getElementsByClassName("phone-number")[0]
_nav_imgL = document.querySelector(".logo-header>img")
_call_div = document.getElementsByClassName("call-div")[0]
_menu_burger = document.getElementById('menu-burger')
_burger_span_one = document.querySelector("#menu-burger>span:nth-of-type(1)")
_burger_span_two = document.querySelector("#menu-burger>span:nth-of-type(2)")
_burger_span_tree = document.querySelector("#menu-burger>span:nth-of-type(3)")

_list_menu_burger = document.getElementById('list-menu-burger')
let q = 1
_menu_burger.addEventListener("click", () => {
    if (q % 2) {
        _menu_burger.style.transform = "rotate(360deg)"
        _burger_span_one.style.transform = "translate(13px, 0px) rotate(38deg)"
        _burger_span_tree.style.transform = "translate(13px, 0px) rotate(-38deg)"
        _list_menu_burger.style.transform = "translateX(0px)"
        _burger_span_two.style.backgroundColor = "#d0d2d2"
    } else {
        _menu_burger.style.transform = "rotate(0deg)"
        _burger_span_one.style.transform = "translate(0, 0) rotate(0deg)"
        _burger_span_tree.style.transform = "translate(0, 0) rotate(0deg)"
        _list_menu_burger.style.transform = "translateX(305px)"
        _burger_span_two.style.backgroundColor = "#149ed9"
    }
    q++
})
let x, _st = 0
_main.addEventListener("scroll", _scroll)

function _scroll() {
    x = x + 2
    _st = ((window.pageYOffset) / 10)
    _4x = ((window.pageYOffset) / 100)
    _smt = ((window.pageYOffset) / 1000)
    _mt = ((window.pageYOffset) / 2000)
    _info.style.top = "29%"

    for (i = 0; i < _liNav.length; i++) {
        if (window.pageYOffset < 500) {
            _liNav[i].style.color = "#fff"
            _AphoneN.style.color = "#fff"
            _nav_imgL.style.opacity = _smt
            _call_div.style.border = "3px solid rgba(255, 255, 255, 0.2)"
            _burger_span_one.style.backgroundColor = "#d0d2d2"
            _burger_span_tree.style.backgroundColor = "#d0d2d2"
        } else {
            _liNav[i].style.color = "#212529"
            _nav_imgL.style.opacity = _smt
            _AphoneN.style.color = "#212529"
            _call_div.style.border = "3px solid rgba(0,0,0,0.1)"
            _burger_span_one.style.backgroundColor = "#d0d2d2"
            _burger_span_tree.style.backgroundColor = "#d0d2d2"


        }
    }
    console.log(window.pageYOffset)
    if (window.pageYOffset <= 1800) {
        _header.style.transform = "rotate(-" + _st + "deg)"
        _containerF.style.transform = "rotate(+" + _st + "deg)"
        _containerF.style.backgroundColor = "rgba(21, 158, 217, " + _mt + ")"
        _fake.style.height = "500vh"
        _navbar.style.backgroundColor = "rgb(255 255 255 / " + _smt + ")"
        _header.style.opacity = "1"
        _header.style.visibility = "visible"
        _header_body.style.position = "fixed"
        _header_body.style.top = "55px"

    } else if (window.pageYOffset > 1800) {
        _header_body.scrollTo = 0
        _header.style.opacity = "0"
        _header.style.visibility = "hidden"
        _header_body.style.position = "relative"
        _header_body.style.top = "117rem"
        _navbar.style.backgroundColor = "rgb(255 255 255)"
        _fake.style.height = "187vh"
    }
}

let _row = document.getElementById('creact-child')
let _append
for (i = 0; i < _images.length; i++) {
    _append = document.createElement('div')
    _append.classList.add("box-body")
    _append.classList.add("col-12")
    _append.classList.add("col-md-6")
    _append.classList.add("col-lg-4")
    _append.classList.add("col-xl-3")
        // console.log(_images[i].url)
    _append.innerHTML = `
            <div class="div-box" style="background: url(${_images[i].url})">
                <figure class="figure-box">
                    <img id="logo-img" src="${_images[i].logo}" alt="${_images[i].alt}">
                    <div class="info-box" style="background-color: ${_images[i].bgcolor}">
                        <div class="compuni-info">
                            <strong>${_images[i].alt}</strong>
                            <p>طراحی سایت و برنامه نویسی پرتال اینترنتی</p>
                        </div>
                        <div class="btn-nemune">
                            <span>مشاهده</span>
                        </div>
                    </div>
                </figure>
            </div>
            `
    _row.appendChild(_append)
}