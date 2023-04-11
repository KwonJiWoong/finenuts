# finenuts

## 권지웅

### custom property 사용법

```
:root {
    --main-color: #f00;
    --main-bg: #0f0;
    --border-color: #ff0;
    --header-height: 70px;
    --content-padding: 10px 20px;
    --base-line-height: 1.5;
    --transition-duration: 0.5s;
    --external-link: "external link";
    --margin-top: calc(2vh + 20px);
    /* 유효 커스텀 속성은 후에 JavaScript에서 재사용될 수 있다. */
    --foo: if(x > 5) this.width = 10;
}
<https://custom_Properties.html>
```