$(function(){
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



    // 탭 초기화
    function tab_init(){
        if($('.tab-default').length > 0){
            $('.tab-default').each(function(){
                let $this = $(this).children('.selected');
                let $width = $this.outerWidth();
                let $left = $this.position().left;
                if(!$(this).children('.bar').length > 0){
                    $(this).append('<span class="bar"></span>');
                }
                $this.addClass('selected').siblings('.selected').removeClass('selected');
                $this.siblings('.bar').stop().animate({
                    'width' : $width,
                    'left' : $left
                },400);
            });
        }
    }
    // 탭 클릭 모션
    $('.tab-default > button, .tab-default > a').on('click', function(e){
        let $this = $(this);
        let $width = $this.outerWidth();
        let $left = $this.position().left;
        e.preventDefault();
        $this.addClass('selected').siblings('.selected').removeClass('selected');
        $this.siblings('.bar').stop().animate({
            'width' : $width,
            'left' : $left
        },400);
    });
    tab_init();
});