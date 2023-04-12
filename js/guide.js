$(function(){
    $('.btn_copy').on('click',function(){
        var content = $(this).siblings('.hidden').text();
        console.log(content);
        navigator.clipboard.writeText(content)
            .then(() => {
            alert('클립보드에 복사되었습니다.')
        })
            .catch(err => {
            console.log('복사에 실패하였습니다.', err);
        })
    });
})