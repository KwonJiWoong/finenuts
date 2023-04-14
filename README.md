# scss 사용 방법(대표적인 두가지 방법)
1. vscode 등 에디터에서 extension을 활용하여 sass(scss) Compiler를 사용한다.(vscode에서는 Live Sass Compiler)
2. node.js를 활용하여 터미널에 "npm install -g sass"를 입력하여 설치한다.

## 세팅 방법
### 에디터 extension
1. 설치 시 해당 settings.json 에서 포멧을 결정한다.(아래는 제 세팅 예시입니다.)
```
{
    "liveSassCompile.settings.formats":[
        // This is Default.
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": null
        },
        // You can add more
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "~/"
        }
    ],
    "liveSassCompile.settings.includeItems": [],
    "liveSassCompile.settings.autoprefix": [],
    "liveSassCompile.settings.generateMap": false,
    "git.autofetch": true,
    "beautify.options": {},
    "security.workspace.trust.untrustedFiles": "open"
}
```
2. 해당 소스중 Default 부분의 format의 값은 두개가 존재하는데 expanded (풀어서 저장) / compressed (minify하여 저장)이므로 둘 다 저장 후 min파일을 실제로 서버에서 활용하는걸 추천합니다.(expanded버전 css는 확인용으로만 사용)
### node 세팅 방법
1. node.js 설치 후 "npm install sass -g" 로 sass를 설치한다.
2. 아래 코드에서 필요한 걸로 컴파일 한다.(에디터 확장팩과 다르게 1개만 감시 설정이 가능하다.)
3. css format 방식은 에디터 방식과 동일하게 "--style expanded" / "--style compressed" 두가지 이다.
```
// 컴파일 방법
$ sass input.scss output.css

// compact 형식으로 컴파일
$ sass --style compact input.scss out.css

// Map파일 제외하고 컴파일
$ sass --sourcemap=none input.scss output.css

// 자동컴파일 방법
$ sass --watch input.scss:output.css

// 자동으로 Map파일 제외하고 컴파일
$ sass --watch --sourcemap=none input.scss:output.css

// 자동으로 compact형식으로 컴파일
$ sass --watch --style compact input.css

// 자동으로 Map파일 제외하고 compact 형식으로 컴파일
$ sass --watch --sourcemap


```

## custom property / scss 활용한 가이드
1. css 소스
해당 예시 주소
<https://kwonjiwoong.github.io/finenuts/guide.html>
- 컴포넌트(공통화)를 활용한 css 작성 가능
