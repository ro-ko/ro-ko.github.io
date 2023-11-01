---
title: "Blog development: Install minmal projects (4)"
excerpt: "minimal-mistakes post 작성하기"
categories:
  - Blog
tags:
  - Blog
toc: true
toc_sticky: true
toc_label: "On this page"
---

## post 작성하기
### post file 만들기
location : `<username>.github.io/_posts/`
`_docs`폴더의 구조를 참고하여 markdown 파일을 `_posts` 폴더에 작성하면 post가 업데이트 됩니다. 

post의 확장자는 `.md`(markdown)을 사용하고 `yyyy-mm-dd-title.md`형식을 맞추어 줍니다. 이유는 파일 이름을 통해 작성일을 추출하여 보여주기 때문입니다.

그러면 하나의 post기준으로 자세히 알아보도록 하겠습니다.
```md
---
title: "Blog: Get started"
excerpt: "My first post"
categories:
  - Blog
tags:
  - Blog
toc: true
toc_sticky: true
toc_label: "On this page"
---

## Welcome to my blog

Hello, guys!✋ I'm Keonwoo Ro, studying AI in Korea university as a M.S.

My blog development is finally finished. There were many difficulty and time of preservence.  

At first, I'll post my development progress, then introduce several AI information and related paper.  

## Blog implemetation

My blog is made of [minimal mistakes](https://mmistakes.github.io/minimal-mistakes/){:target='_blank'} theme by [Jekyll](https://jekyllrb-ko.github.io/){:target='_blank'}.  



Thank you for your visit, let's see you soon! 


<!--more-->

```

### header yml 변수

| yaml 변수         | 의미 -------------------------------------|
|:-----------------|:-----------------------------------------|
| title            | post title                               |
| excerpt          | post 개요 직접 작성                         |
| excerpt_seperator| 개요 문단 post에서 발췌 시 end token 설정     |
| last_modified_at | 수정일자 표시                               |
| categorires      | category 분류                             |
| tags             | tag 분류                                  |
| toc              | 문단 바로가기 기능 사용 여부                   |
| toc_label        | toc 표시문구                               |
| toc_sticky       | toc 고정여부, true 설정시 스크롤 상관없이 고정   |
| toc_icon         | toc icon                                 |
| last_modified_at | 수정일자 표시                               |


이런 변수들은 어디서 호출되서 사용될까요?  
location: `<username>.github.io/_layouts/single.html`  

tag 의 변수들을 살펴보면 `page.xxx`형테로 호출되는 값들이 있습니다. 호출되는 변수들은 layout에 맞추어 post 구성을 이룹니다.  

물론 이외에도 많은 설정 변수가 있지만 _config.yml과 겹치는 경우도 있고 너무 세부적인 설정이라 나중에 개인적으로 필요하시다면 검색을 통해 사용하시거나 custom해서 사용하시길 바랍니다.

### post 문단 작성
markdown을 기본 문법으로 사용합니다. 따라서 markdown 사용법과 minimal-mistakes에서 설정한 문단 작성 기능, html tag활용을 알아놓으면 좋습니다.  

이 부분은 각자 스타일과 필요에 따라 검색하여 알아보면 되기 때문에 도움되는 레퍼런스를 나열하기로 하겠습니다.  

[markdown 사용법](https://goddaehee.tistory.com/307){:target="_blank"}  
[html 사용법](https://www.tcpschool.com/html/intro){:target="_blank"}  
[minimal-mistakes demo](https://mmistakes.github.io/minimal-mistakes/about/#demo-pages){:target="_blank"}

Demo Pages table의 링크를 하나씩 보시면 많은 도움이 되실겁니다. `HTML Tags and Formatting Post`에서 markdown 작용방법에 대해서 설명하지 않는 경우도 있는데 이는 github file을 코드로 비교하시며 참고하시면 됩니다.  
**[code link](https://github.com/mmistakes/minimal-mistakes/blob/master/docs/_posts/2013-01-11-markup-html-tags-and-formatting.md?plain=1){:target="_blank"}**

## page와 site의 차이
layout 쪽의 코드를 살펴보시면 `page.xxx` 나 `site.xxx`가 자주 사용되는데요. 이것이 무엇인지도 헷갈리겠지만 어떻게 다른 파일에서 선언한 yml을 자유자재로 참조하는지도 궁금하실겁니다. python이나 java라면 상속 혹은 import를 써야하니까요.  

결론부터 말하자면 jekyll에서는 site와 page를 전역변수로 사용합니다. 이때 site는 _config.yml에서 선언된 변수들을 참조할 수 있고 page는 각 post 작성시 header에 선언한 yml을 참조할 수 있습니다.

자세한 설명은 [jekyll docs-variables](https://jekyllrb-ko.github.io/docs/variables/){:target="_blank"}를 확인하세요.

jekyll과 minimal-mistakes의 docs를 모두 읽어본다면 jekyll기반 blog는 마스터하게 될 겁니다. 하지만 시간이 많이 걸리고 우리의 목적은 블로그를 만들어 내는것 단지 그뿐이니 필요한 기능이 아니라면 내용에 대한 궁금증은 잠시 참아주시면 좋겠습니다. 시간이 날때 각각의 문서를 정리해서 포스팅해보도록 하겠습니다.

> Reference
>
> [docs-minimal-mistakes](https://mmistakes.github.io/minimal-mistakes/){:target="_blank"}  
> [docs-jekyll](https://jekyllrb-ko.github.io/){:target="_blank"}