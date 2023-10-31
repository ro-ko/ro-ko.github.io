---
title: "Blog development: Install minmal projects (2)"
excerpt: "minimal-mistakes 파일구조 알아보고 수정하기"
categories:
  - Blog
tags:
  - Blog
toc: true
toc_sticky: true
toc_label: "On this page"
---

## Directory configuration
기본적인 minimal-mistakes 파일구조를 기반으로 설명하겠습니다.
> 파일을 보다보면 html에 {} 같은 문구가 자주 보이는데 이는 jekyll이 `liquid`를 template언어로 채택하여 사용하기 때문입니다.

비슷한 구성을 가진 언어로 django가 있습니다.

```
.
├── 📁 assets
├── 📁 _data
├── 📁 _includes
├── 📁 _layouts
├── 📁 _pages
├── 📁 _posts
├── 📁 _sass
├── 📄 banner.js
├── 📄 Gemfile
├── 📄 _config.yml
├── 📄 index.html
├── 📄 banner.js
├── 📄 LICENSE
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 .gitignore
├── 📄 Rakefile
└── 📄 staticman.yml
```

### 📁 `assets`
```bash
.
├── 📁 css # minimal-mistakes main theme 선택, scss file
├── 📁 images # blog 에 필요한 여러 이미지 (fabicon, post, porfile 등등)
└── 📁 js # javascript file
```
scss file이란 css 전처리기(preprocessor)로 css의 단점을 보완한 컴파일 스크립트 언어입니다. 이외에도 sass가 있습니다.

### 📁 `_data`
```bash
.
├── navigation.yml # 블로그 목차 구성
└── ui-text.yml # 언어별 UI 설정
```
블로그를 구성함에 있어 사용자 정의하는 부분입니다.

### 📁 `_includes`
```bash
.
├── 📁 search               # 검색엔진 종류
├── 📁 head                 # head custum
├── 📁 footer               # footer custum
├── 📁 comments-providers   # comments platform
├── 📁 analytics-providers  # analytics 계열, 사용자 분석에 관련 파일
├── 📄 analytics.html       # 분석 엔진 종류
├── 📄 archive-single.html  # posts link들 보여주는 page에서 보여질 layout 구성
├── 📄 author-profile-custom-links.html # profile 사용자 custom 파일
├── 📄 author-profile.html  # profile 구성 파일
├── 📄 breadcrumbs.html     # 현재 page path 보여주는 기능
├── 📄 category-list.html   # category list 나열
├── 📄 comment.html         # 각 comment당 구성
├── 📄 comments.html        # comments들 전체적인 html 구성
├── 📄 documents-collection.html # 특정 기준으로 grouping posts
├── 📄 feature_row          # 이미지와 텍스트 나열
├── 📄 figure               # 이미지 생성
├── 📄 footer.html          # blog 가장 하단 html 구성
├── 📄 gallery              # 이미지만 나열
├── 📄 group-by-array 
├── 📄 head.html            # blog 가장 상단 html 구성
├── 📄 masthead.html        # header의 상단 가장 윗부분
├── 📄 nav_list             # navigation 블로그 사이드에 있는 문단 바로가기 기능
├── 📄 page__date.html 
├── 📄 page__hero.html
├── 📄 page__hero_video.html
├── 📄 page__meta.html
├── 📄 page__taxonomy.html
├── 📄 paginator.html       # 하단에 페이지 목차 기능
├── 📄 post_pagination.html
├── 📄 posts-category.html  # post들을 category로 정리한 html 구성
├── 📄 posts-tag.html       # post들을 tag로 정리한 html 구성
├── 📄 scripts.html         # js,search engine, 등등 호출하는 html
├── 📄 seo.html             # 검색 엔진 최적화
├── 📄 sidebar.html         # 사이드바 관련
├── 📄 skip-links.html      # 이전,이후 페이지 링크
├── 📄 social-share.html    # sns 링크 html 구성
├── 📄 tag-list.html        # tag list 구성
├── 📄 toc                  # toc 계열, 블로그 사이드에 있는 문단 바로가기 기능
├── 📄 toc.html             # toc layout
└── 📄 video                # 비디오 관련 파일
```
재사용되는 공통 컴포넌트를 모아 놓은 폴더입니다. 저는 새로운 기능을 이 파일에 추가하여 관리하고 있습니다.  
많은 기능이 있으니 하나씩 살펴보시고 간단하게만 주석으로 설명하겠습니다.

### 📁 `_layouts`
```bash
.
├── 📄 archive.html
├── 📄 archive-taxonomy.html
├── 📄 categories.html
├── 📄 category.html
├── 📄 collection.html
├── 📄 compress.html
├── 📄 default.html
├── 📄 home.html
├── 📄 posts.html
├── 📄 search.html
├── 📄 single.html
├── 📄 splash.html
├── 📄 tag.html
└── 📄 tags.html
```
각 기능과 목적에 따라 구성한 layout들 모음입니다. `_includes`에 있는 파일들과 연동되어 많이 사용됩니다. `liquid`를 이용한 template 구성과 header의 yaml 형식에 기반해서 이해하시면 됩니다.

### 📁 `_pages`
```bash
.
├── 📄 404.md
├── 📄 about.md
├── 📄 archives.md
├── 📄 categories.md
├── 📄 contact.md
├── 📄 cookbook.md
├── 📄 nlp.md
├── 📄 notebooks.md
├── 📄 tags.md
├── 📄 toolbox.md
└── 📄 web-toolbox.md
```
반복되지 않는 특정 목적을 가진 문서들입니다. static한 특징이 있으며 변동이 많은 dynamic한 `_posts`와 차이가 있습니다. [Reference](https://ojji.wayful.com/2014/01/Google-Blogger-Difference-between-Posts-and-Pages.html)

### 📁 `_posts`
게시물을 저장할 폴더입니다.

### 📁 `_sass`
```bash
.
├── 📁 minimal-mistakes
└── 📄 minimal-mistakes.scss
```
minimal-mistakes template에 관련된 css 파일을 다룹니다. scss는 css의 컴파일용 언어입니다. [Reference](https://sass-lang.com/guide/)

### 📄 `banner.js`
배포가 아닌 테마 개발 과정에서 필요한 파일입니다. js 파일들을 압축하고 배너 텍스트를 추가해주는 역할을 합니다. [Reference](https://github.com/mmistakes/minimal-mistakes/issues/2143)

### 📄 `_config.yml`
블로그를 구성하는 기본적인 설정값들을 모아놓은 파일입니다.  
내부 변수는 `site.xxx` 형태로 접근 가능합니다. `xxx.yml`파일이 아닌 헤더에서 정의된 yaml 변수들 같은 경우 `page.xxx` 형태로 접근이 가능합니다. 파일구조를 분석하시면서 혼동없으시길 바랍니다.

### 📄 `Gemfile`
필요한 plugin들을 gem으로 설치합니다.

### 📄 `index.html`
블로그 기본 홈페이지로 상속을 통해 여러 페이지를 구성합니다. 

### 📄 `LICENSE`
해당 템플릿의 저작권에 권련된 내용입니다. MIT 라이센스로 자유롭게 사용가능합니다.

### 📄 `package.json`
npm으로 설치한 파일들의 명세를 표시합니다. 호환문제나 협업에 필수적입니다. [Reference](https://hoya-kim.github.io/2021/09/14/package-json/)

### 📄 `package-lock.json`
npm을 실행하면 자동적으로 생성되는 파일입니다.

### 📄 `.gitignore`
gitpage에 올리지 않을 내용을 기입합니다. 보안에 관련되거나 개인정보에 관련된 파일을 써넣으면 됩니다.

### 📄 `Rakefile`
ruby syntax와 Makefile 역할을 수행합니다.

### 📄 `staticman.yml`
static website를 만드는데 필요한 설정파일입니다. [Reference](https://staticman.net/docs/configuration)

## _config.yml 수정
하나씩 값을 바꿔보며 확인하시면서 필요한부분을 쓰시면 됩니다. 대표적인 부분만 설명하겠습니다.
### Basic configuration
```yml
minimal_mistakes_skin    : "dark" # "air", "aqua", "contrast", "dark", "dirt", "neon", "mint", "plum", "sunrise"

# Site Settings
locale                   : "en-US"
title                    : "ROKO"
title_separator          : "-"
subtitle                 : # site tagline that appears below site title in masthead
name                     : "Ro Keonwoo"
description              : >- # this means to ignore newlines until "baseurl:"
  I study about Artificial intelligence, Machine learning, Deep learning
  I am a AI Researcher in korea unviersity
  I explain machine learning concepts using diagrams, animations and intuition
url                      : "https://ro-ko.github.io" # the base hostname & protocol for your site e.g. "https://mmistakes.github.io"
baseurl                  : "" # the subpath of your site, e.g. "/blog"
repository               : "ro-ko/ro-ko.github.io" # GitHub username/repo-name e.g. "mmistakes/minimal-mistakes"
teaser                   : # path of fallback teaser image, e.g. "/assets/images/500x300.png"
logo                     : # path of logo image to display in the masthead, e.g. "/assets/images/88x88.png"
masthead_title           : # overrides the website title displayed in the masthead, use " " for no title
```
yml에 기본주석으로 자세한 설명이 되어있으니 참고하시고 꼭 수정해야하는 부분만 말씀드리겠습니다.  

1. `locale` : 언어 설정입니다. 한국어는 `ko-KR`로 하시면 됩니다.
2. `title` : 본인 블로그이니 본인만의 블로그 대표 이름을 지으셔야겠죠?
3. `name` : 2번과 같은 이유입니다.
4. `baseurl` : 공백으로 남겨놔 주세요. 최상위 root에서 시작하는게 아니라면 쓸 일이 없습니다. [Reference](https://wodonggun.github.io/html/Baseurl-%EC%A0%95%EB%A6%AC.html)
5. `url` : `https://<username>.github.io` 접속할 웹 주소입니다.
6. `repository` : 계정 이름으로 만들었으므로 `<username>/<username>.gihub.io` 입니다.

### Profile configuration
```yml
author:
  name             : "Keonwoo Ro"
  avatar           : "/assets/images/profile/bio-image.jpeg" # path of avatar image, e.g. "/assets/images/bio-photo.jpg"
  bio              : "M.S, AI in KU"
  location         : "Seoul, South Korea"
  email            : 
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:ro_keonwoo@korea.ac.kr"
    - label: "Website"
      icon: "fas fa-fw fa-link"
      # url: "https://your-website.com"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/rokeonwoo"
```
1. `author` : email빼고 모두 필수입니다. email은 아래 links를 통해 표시됩니다. avatar는 자기소개 얼굴이라고 생각하시면 됩니다.
2. `links` : 보이는 규칙대로 적성하시고 필요없으신 분들은 빈칸으로 놔두면 됩니다. 내부적으로 모든 입력이 되었을때만 표시하도록 로직이 되어 있습니다.

### Outputting configuration
```yml
# Outputting
permalink: /:categories/:title/
paginate: 5 # amount of posts to show
paginate_path: /page:num/
timezone: Asia/Seoul # https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
```
1. `paginate` : 페이지당 게시물 개수
2. `timezone` : 세계 시간 기준

### Footer configuration
```yml
# Site Footer
footer:
  links:
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/rokeonwoo"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://facebook.com/rokeonwoo"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/ro-ko"
```
profile과 비슷하게 작성하시면 됩니다. footer 위치에 커스텀이나 다른 위젯을 추가 할수도 있는데, 이는 나중에 알아봅시다.

### Defaults configuration
```yml
# Defaults
defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      show_date: true
      show_category: true
      comments: true
      share: true
      related: true

# _pages
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true
      
```
1. `author_profile` : 프로필 노출 여부
2. `read_time` : post 읽는데 걸리는 예상 시간 표시
3. `show_date` : post 작성일 표시
4. `show_category` : psot category 표시
5. `comments` : 댓글기능 사용 여부

기본적인 설정 사항을 알아 보았습니다. 세부적인 내용은 수정하거나 추가 업로드 하도록 하겠습니다. 블로그 구성을 본인입맛대로 바꾸시길 원한다면 파일구조를 파악하시는걸 추천드립니다.  

순서는 top-down이든 bottom-up 상관없이 보셔도 됩니다. 시간이 된다면 파일구조 시각화도 해보겠습니다.

> Reference
>
> [blog-공부하는식빵맘](https://ansohxxn.github.io/blog/jekyll-directory-structure/#-gemfile)  
> [blog-suhwan jee](https://suhwan.dev/2017/06/23/jekyll-project-structure/)  
> [docs-minimal-mistakes](https://mmistakes.github.io/minimal-mistakes/)  
> [docs-jekyll](https://jekyllrb-ko.github.io/)