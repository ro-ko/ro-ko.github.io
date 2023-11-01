---
title: "Blog development: Install minmal projects (3)"
excerpt: "minimal-mistakes layout 설정하기"
categories:
  - Blog
tags:
  - Blog
toc: true
toc_sticky: true
toc_label: "On this page"
---

## navigation.yml 수정
location : `<username>.github.io/_data/navigation.yml`
```yml
# main links
main:
  - title: "Posts"
    url: /archives/
  - title: "Categories"
    url: /categories/
  - title: "Tags"
    url: /tags/
  - title: "Toolbox"
    url: /toolbox/
  - title: "About"
    url: /about/
  - title: "Contact"
    url: /contact/
```
블로그 상단의 큰 목차에 해당하는 부분입니다.  
title은 화면에 보여줄 문자열을 의미하고 url은 해당 page의 url을 부여합니다. 

예를 들어 about page를 주소창을 통해 접근하려면 `https://<username>.github.io/about/` 으로 접근해야합니다.

## _pages 수정
location : `<username>.github.io/_pages/`
```
---yml
title: "Posts by Tags"
layout: tags
permalink: /tags/
---
```
예시로 제 블로그 Tags에 해당하는 부분을 가져왔습니다. `title` 은 Tags 목차를 눌렀을때 나오는 page의 제목이고 `layout`은 page를 보여줄때 어떤 layout을 사용할 것인지 명시합니다. `permalink`는 /tags/ 라는 url에 연결하여 보여준다는 뜻입니다.  
따라서 **navigation.yml의 url**과 해당하는 **_pages의 permalink**는 일치해야합니다.

permalink란 permanent link의 뜻으로 변경될일이 없는 링크를 의미합니다. post들은 수정이 많겠지만 블로그의 구조를 구성하는 page들은 변경될 일이 거의 없겠죠?

## toc 설정
```yml
---
title: "Blog: Get started" # post 제목
excerpt: "My first post"   # post 내용 요약
categories:
  - Blog
tags:
  - Blog
toc: true                  # toc 사용여부
toc_sticky: true           # 위아래 드래그시 toc이 따라옵니다
toc_label: "On this page"  # toc 제목
---
```
toc은 table of contents의 약칭으로 블로그 post의 길이가 길때 문단 바로가기 기능을 제공할 수 있는 유요한 기능입니다. 사용하지 않아도 되기는 하지만 기술 블로그를 쓰게 되면 내용이 길어지기도 하고 독자가 문맥을 파악하거나 필요한 정보를 찾는데 유용합니다. 지금 보고계시는 제 post의 오른쪽 상단에 목차들이 바로 toc입니다.   

위의 예시는 제 [첫번째 post][blog-get-started]{:target="_blank"} header에 설정해놓은 yaml 변수들입니다.  

[blog-get-started]: {{ "" | relative_url }}{% post_url 2023-09-30-get-started %}

excerpt는 게시글 모음에서 post에 대해 간략히 설명하는 역할입니다. 내용을 수정하며 전체 게시글에 해당 post가 어떻게 바뀌는지 확인해보세요. categories와 tags는 post를 분류하는데 사용됩니다.

## SCSS 수정
location : `<username>.github.io/_sass/`
```bash
.
├── 📁 minimal-mistakes
└── 📄 minimal-mistakes.scss
```
`minimal-mistakes.scss` 파일에서는 minimal-mistakes style이 명시된 폴더를 import 하는 코드가 포함되어 있습니다. 만약 template style을 수정하고 싶다면 `minimal-mistakes` 폴더에서 해당하는 부분을 변경하거나 추가하면 됩니다.

location : `<username>.github.io/_sass/minimal-mistakes/_base.scss/`
```scss
a {
  text-decoration: none; // modified section

  &:focus {
    @extend %tab-focus;
  }

  &:visited {
    color: $link-color-visited;
  }

  &:hover {
    color: $link-color-hover;
    outline: 0;
  }
}

```
예를 들어 저는 post의 hyperlink 제목이 밑줄로 나타나는게 싫어서 이 부분을 제거 했습니다.  

> Reference
>
> [blog-Kang DaYoung](https://alledy.netlify.app/posts/add-excerpt-in-gatsby/){:target="_blank"}  
> [blog-공유의 가치를 추구하는 개발자](https://velog.io/@eona1301/Github-Blog-minimal-mistakes-%EB%B3%B8%EB%AC%B8-%EC%98%81%EC%97%AD-%EB%B0%8F-%EA%B8%80%EC%9E%90-%ED%81%AC%EA%B8%B0){:target="_blank"}  
> [stackoverflow](https://stackoverflow.com/questions/35858356/jekylls-excerpt-separator-works-in-posts-front-matter-but-not-in-config-yml){:target="_blank"}  
> [docs-minimal-mistakes](https://mmistakes.github.io/minimal-mistakes/)  
> [docs-jekyll](https://jekyllrb-ko.github.io/){:target="_blank"}