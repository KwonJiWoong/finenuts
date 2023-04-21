## scss 의 변수 선언
1. 예시 파일은 <https://github.com/KwonJiWoong/finenuts/blob/main/css/utils.scss> 참고
2. 변수로 지정할 명칭 앞에 "$"를 붙입니다.
```
// font 컬러
$font-color-01: #666;
$font-color-02: #999;
$font-color-03: #004e5a;
$font-color-04: #006f80;
$font-color-05: #222;
$font-color-red: #e53e30;

// border 컬러
$border-color-01: #ebebeb;
$border-color-02: #222;

// background 컬러
$background-color-01: #fff;
$background-color-02: #222;

/*반응형 화면 크기*/
$mobile: 767px;
$tablet: 1023px;
$desktop: 1024px;
```

## mixin 사용
1. mixin은 css 템플릿(반복되는 작업들)을 줄이기 위해 사용합니다.
2. 예시로 똑같은 사이즈에 컬러값만 다른 네모를 그리기위해선 css로는 아래 코드와 같이 나옵니다.
```
.box1{width:100px; height:100px; background:red;}
.box2{width:100px; height:100px; background:blue;}
.box3{width:100px; height:100px; background:green;}
```
3. 위 과정처럼 반복되는 작업에 scss mixin을 적용하면 아래 코드로 변경 가능 합니다.
```
@mixin boxStyle($bg){
  width:100px; height:100px; background:$bg;
}
.box1{
  @include boxStyle(red);
}
.box2{
  @include boxStyle(blue);
}
.box3{
  @include boxStyle(green);
}

//혹은

@mixin boxStyle(){
  width:100px; height:100px;
}
.box1{
  @include boxStyle();
  background:red;
}
.box2{
  @include boxStyle();
  background:blue;
}
.box3{
  @include boxStyle();
  background:green;
}

```
3. 위 코드와 같이 다양하게 사용이 가능 합니다. 변수와 활용도 가능합니다.
```
$color1:red;
$color2:blue;
$color3:green;
@mixin boxStyle($bg){
  width:100px; height:100px; background:$bg;
}
.box1{
  @include boxStyle($color1);
}
.box2{
  @include boxStyle($color2);
}
.box3{
  @include boxStyle($color3);
}
```
## extends
