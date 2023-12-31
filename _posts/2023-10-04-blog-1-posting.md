---
title: "Blog development: Install minmal projects (1)"
excerpt: "gitpage와 minimal-mistakes를 이용한 블로그 만들기"
categories:
  - Blog
tags:
  - Blog
toc: true
toc_sticky: true
toc_label: "On this page"
---

## Background  
### What is gitpage?  
<div style="text-align:center;padding:10px;">
  <img src="https://qph.cf2.quoracdn.net/main-qimg-6ad8361237d74cc2894a6b63005dbc28-pjlq" alt="Git N Github relation" width="60%">
</div>

github는 VCS(version control system)인 git을 백업해 관리하는 오픈소스 웹호스팅 플랫폼입니다. 프로젝트의 버전을 관리하기도 하고 여러 사람들과 협업할 때 사용하는 유용한 툴이죠.

github에서는 무료로 정적 사이트 호스팅 서비스를 제공해주고 있습니다. 하지만 비용이 드는 부분 서비스이기 때문에 usage limits가 있는데요.


[Gitpage reference](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages){:target="_blank"}

```
1. 웹호스팅으로 사용할 저장소의 최대 용량은 1GB
2. Gitpage 매달 100GB의 soft bandwidth 지원
3. 매 시간당 10번의 soft build limit
4. static site만 지원 server side programming language(PHP, Ruby, Python) 지원하지 않음
```

이러한 제한을 본다면 개인 기술 블로그로 사용하기 적절하다는걸 알 수 있습니다.  

### Template
<img src="https://mmistakes.github.io/minimal-mistakes/assets/images/mm-layout-archive.png" alt="template sample" width="80%">

[Minimal mistakes](https://mmistakes.github.io/minimal-mistakes/){:target="_blank"}를 기본 템플릿으로 사용했습니다.  
**Release version - 4.24.0**


### Environment  
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/UbuntuCoF.svg/512px-UbuntuCoF.svg.png" alt="ubuntu logo" width="20%">

**Ubnuntu version - 22.04**  

jekyll은 ruby 언어 기반 framework입니다. 따라서 ruby를 설치합니다.  
각 OS별 install ruby 명령어를 참고하여 설치해주세요. $\rightarrow$ [Ruby install docs](https://www.ruby-lang.org/en/documentation/installation/){:target="_blank"}  

**jekyll은 32bits 기반으로 (x86) 버전 ruby를 다운받으셔야 합니다.**

ruby의 패키지 관리 시스템은 gem 입니다.
```bash
# install jekyll
gem install jekyll
```
설치 후 `ruby -V` or `jekyll -V` 명령어를 통해 version을 확인할 수 있습니다.


## Create repo
> 우선 gitpage에서 웹 호스팅으로 사용할 repo를 생성해야 합니다.
gitpage는 3가지 type의 구성 방식이 존재합니다.


1. user - `http(s)://<username>.github.io`
2. organization - `http(s)://<organization>.github.io`
3. project - `http(s)://<username>.github.io/<repository>` or `http(s)://<organization>.github.io/<repository>`

필요에 따라 맞게 선택하면 되는데 개인 기술 블로그로 사용할 예정이라면 1번 형태로 이름을 지으면 됩니다.

![gitpage-repo]({{ site.url }}{{ site.baseurl }}/assets/images/posts/blog/gitpage-repo.png)

ex)
``` 
Repository name : `ro-ko.github.io`  
<user> : github 사용자 계정명

Description :  `personal blog`  
부연설명 (선택사항)  

Public or Private : `Public`  

Initialize this repo with : `None`  
초기화 옵션 (선택사항)  
```

repo 생성 이후 해당 repo의 settings에 들어가 왼쪽 목록에서 Pages를 클릭합니다.  
정상적이라면 윗 부분에 `Your site is live at https://ro-ko.github.io/` 를 확인 할 수 있습니다.

gitpage는 jekyll을 기반으로 웹호스팅을 제공해줍니다. 만약 jekyll과 markdown을 사용하기 싫다면 `.nojekyll` 파일을 추가하고 원하는대로 커스텀하면 됩니다.

## Install minimal mistakes template
Username으로 repo를 만들고 jekyll을 사용한다는 가정하에 설명하겠습니다.  
website layout을 모두 구현해도 되지만 맘에 드는 jekyll theme이 있다면 이를 이용하는 것도 좋습니다.

저는 [minimal mistakes](https://github.com/mmistakes/minimal-mistakes){:target="_blank"}를 선택하였습니다. 다른 테마를 원한다면 [https://github.com/topics/jekyll-theme](https://github.com/topics/jekyll-theme){:target="_blank"} 이나 [http://jekyllthemes.org/](http://jekyllthemes.org/){:target="_blank"} 에서 찾아보시면 됩니다.

> jekyll theme을 이용해 블로그를 설치하고 운영하는 방식은 크게 3가지로 나뉩니다.
> 1. Gem based method
> 2. Remote theme method
> 3. fork minimal-mistakes repository or download files directly

여기서 우리는 gitpage를 이용할 목적이므로 3번을 이용하면 되고 1,2번은 기호에 따라 시도해 보시기 바랍니다.

### Gem based method
저는 local server에서 작성 후 이상이 없는지 확인 후 gitpage에 push하여 블로그를 업데이트하고 있습니다.  
어떠한 기능을 사전에 테스트 해볼 수도 있고 혹시나 중간 과정에서 에러가 생겨 꼬이는것을 방지하는 목적입니다.  

**download minimal-mistakes repo**  
minimal-mistakes template repo에서 clone을 통해 파일 전체 다운로드

![template-files]({{ site.url }}{{ site.baseurl }}/assets/images/posts/blog/template-files.png)

🟥 는 필요없는 파일들로 삭제해도 됩니다. 그중 travis.yml은 CI를 위한 환경설정 파일인데 test가 필요하신분만 사용하시고 아니신분들은 삭제하시면 됩니다.  

🟩 또한 블로그 구성에는 필요없지만 레이아웃이나 작성 요령을 살펴볼 수 있어 post 작성시 참고하시면 좋습니다. docs에서 _pages와 _posts는 기본적으로 필요하기 때문에 상위 폴더로 복사해주세요.

그러면 위의 구조에서 _pages와 _posts가 추가된 파일구조를 가지게 됩니다.

```bash
gem install bundler
bundle exec jekyll serve
```
bundler를 설치하고 다음 명령어를 실행하면 local server를 이용해 웹호스팅이 진행됩니다. local server 주소는 https://127.0.0.1:4000 를 확인하시면 정상적으로 호스팅 되는것을 볼 수 있습니다.

하지만 결과가 보이지않고 에러가 뜨시는 분들은 2가지 경우가 대부분인데요.
1. denpendency library 설치 필요
2. library incomptible problem

1번은 필요로 하는 파일을 설치 후 gemfile 파일에 적어주시고 2번은 해당 library를 지우시고 호환되는 버전으로 다시 재설치하시면 됩니다.

### Remote theme method

gem based method 방식과 똑같이 진행하는데 차이점은 파일 다운로드 후 _config.yml 파일을 수정해야 합니다.

`_config.yml` 수정
```yaml
# theme             : "minimal-mistakes-jekyll"
remote_theme   : "mmistakes/minimal-mistakes"

...

plugins:
  - jekyll-include-cache
```

`Gemfile` 수정
```
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-include-cache" 
```

bundler 설치 후 실행
```bash
gem install bundler
bundle exec jekyll serve
```

https://127.0.0.1:4000 or https://localhost:4000 로 확인  
과정에서 발생하는 에러는 대부분 library 설치나 호환성 문제입니다.

### Fork minimal-mistakes repository or Download files directly
gitpage와 연동하여 사용하려면 위 방식을 이용해야 합니다.

우선 minimal-mistakes repo를 fork하거나 직접 다운로드하여 gitpage repo에 push하거나 원하는대로 진행합니다. 이후 필요없는 파일을 삭제해줍니다.  
[gem based method](#gem-based-method) 참고

`_config.yml` file 수정
```yaml
 # theme             : "minimal-mistakes-jekyll"
 # remote_theme   : "mmistakes/minimal-mistakes"
```

bundler 설치 후 실행
```bash
gem install bundler
bundle exec jekyll serve
use_math: true
```

https://127.0.0.1:4000 or https://localhost:4000 로 확인  

수정된 내역을 내 gitpage repo에 push 하고 `https://<username>.github.io` 로 확인합니다.  
바로 뜨지 않는 경우는 빌드시간이 걸리는 것이므로 잠시 기다렸다가 새로고침, 재접속 해주시면 됩니다. 장기간 동안 뜨지 않거나 error 화면이 뜬다면 과정에서 발생하는 에러는 대부분 library 설치나 호환성 문제입니다.

제가 참고한 블로그를 링크로 남겨놓겠습니다. 제 설명이 부족하거나 어려우시다면 참고링크를 보시면 좋을 것 같습니다.  

> Reference
>
> [blog-extrabrain](https://seungwubaek.github.io/){:target="_blank"}  
> [blog-dodev](https://wlqmffl0102.github.io/posts/Making-Git-blogs-for-beginners-1/){:target="_blank"}  
> [blog-공유의 가치를 추구하는 개발자](https://velog.io/@eona1301/Github-Blog-Jekyll-minimal-mistakes-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0){:target="_blank"}  
> [blog-kimss](https://kimss1502.github.io/%EB%B8%94%EB%A1%9C%EA%B9%85/2.-GitHub-pages-%EB%A1%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0/#31-gem-%EA%B8%B0%EB%B0%98-%EB%B0%A9%EB%B2%95-minimal-mistakes-%ED%85%8C%EB%A7%88%EB%8A%94-github-%EC%A7%80%EC%9B%90-x){:target="_blank"}