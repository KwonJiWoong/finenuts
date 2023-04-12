$(function(){
    $('.btn_copy').on('click',function(){
        var content = $(this).siblings('.hidden').text();
        console.log(content);
        navigator.clipboard.writeText(content)
            .then(() => {
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
    });
})