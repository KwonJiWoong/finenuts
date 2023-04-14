# finenuts - 권지웅

#scss 사용 방법(대표적인 두가지 방법)
1. vscode 등 에디터에서 extension을 활용하여 sass(scss) Compiler를 사용한다.(vscode에서는 Live Sass Compiler)
2. node.js를 활용하여 터미널에 "npm install -g sass"를 입력하여 설치한다.

##세팅 방법
1. 에디터 extension으로 설치 시 해당 settings.json 에서 포멧을 결정한다.(아래는 제 세팅 예시입니다.)
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

## custom property / scss 활용한 가이드
1. css 소스
해당 예시 주소
<https://kwonjiwoong.github.io/finenuts/guide.html>
- 컴포넌트(공통화)를 활용한 css 작성 가능
