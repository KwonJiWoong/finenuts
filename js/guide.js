let ui;
$(function(){
    ui = {
        selectFunc : {
            el : {
                tabWrap : $('.tab-motion'),
                tabBtn : $('.tab-motion').children('button, a')
            },
            selectTab : (element) => {      
                element.addClass('selected').siblings('.selected').removeClass('selected');
                ui.selectFunc.tabMotion(element);
            },
            tabMotion : (element) => {
                const $bar = element.siblings('.bar');
                const $width = element.outerWidth(true);
                const $left = element.position().left;  
                $bar.stop().animate({ 'left':$left, 'width':$width }, 400); 
            },
            initTabs : (element) => {
                element.each(function(){
                    const $selected = $(this).children('.selected');
                    const $bar = $(this).children('.bar');
                    /*  bar 없으면 추가 해주기 */
                    if($bar.length < 1){
                        $(this).append('<span class="bar"></span>');
                    }
                    ui.selectFunc.tabMotion($selected);
                    ui.selectFunc.selectTab($selected);
                });
            },
            clickEvt:(target)=> {
                ui.selectFunc.selectTab(target);
            },
            test:()=>{console.log('test')},/* 테스트용 소스 */
            init : () => {
                ui.selectFunc.initTabs(ui.selectFunc.el.tabWrap);
                $(ui.selectFunc.el.tabBtn).on('click', function(e){
                    e.preventDefault();
                    ui.selectFunc.clickEvt($(this));
                });
                
            }
        }
    }

    /* 클립보드 복사용 */
    $('.btn_copy').on('click',function(){
        var content = $(this).siblings('.hidden').text();
        navigator.clipboard.writeText(content)
            .then(() => {
            alert('클립보드에 복사되었습니다.')
        })
            .catch(err => {
            console.log('복사에 실패하였습니다.', err);
        })
    });
    /* //클립보드 복사용 */
    ui.selectFunc.init();
});

$(document).ready(function(){
    ui.selectFunc.test();
})