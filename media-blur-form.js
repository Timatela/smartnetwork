(()=>{$(window).on('load',function(){const params=new URL(document.location.toString()).searchParams;const MEDIA_BLUR_SESSION_KEY='hideRegBlur'
const blurParam=window.blur_param;if(blurParam!=='media-blur-group'){return}
if(sessionStorage.getItem(MEDIA_BLUR_SESSION_KEY)){return}
try{const $children=$('.article_wrapper .article_text').children()
const TAG_SKIP_LIST=['SCRIPT']
$children.each(function(index,child){if($(child).find('iframe').length===0&&!TAG_SKIP_LIST.includes($(child).prop("tagName"))){$(child).css('filter','blur(10px)')
$(child).css('user-select','none')}})
$('.article_wrapper .article_text').append(`
        <form class="media-blur-form">
            <div class="media-blur-form__title" style="font-family: 'MuseoSansCyrl-700';">
                Зарегистрируйтесь на платформе, чтобы продолжить чтение
            </div>
            <div class="media-blur-form__field">
                <label for="name">Подтвердите, что вы не робот, указав номер телефона:</label>
                <input type="text" name="phone" placeholder="(999) 999-99-99" required>
            </div>
            <div class="media-blur-form__field">
                <label for="email">Укажите свой email:</label>
                <input type="email" name="email" placeholder="Эл. почта" required>
            </div>
            <div>
                <button class="media-blur-form__submit">Зарегистрироваться</button>
            </div>
            <div style="font-size: 10px;color: #B0B0B8;line-height: 10px;">
              <span style="">Оставляя заявку, вы&nbsp;принимаете условия</span>
              <a href="https://legal.sky.pro/doc/view/Privacy_Policy_AHO_rus" target="_blank" rel="noreferrer noopener" style="color: #B0B0B8;text-decoration: underline;">политики
                  в&nbsp;отношении обработки персональных данных</a><span style=""> и </span><a href="https://legal.sky.pro/doc/view/Data%20processing%20Agreement_ANO" target="_blank" rel="noreferrer noopener" style="color: #B0B0B8;text-decoration: underline;">соглашение
                  на&nbsp;обработку и&nbsp;хранение персональных данных</a>
            </div>
        </form>
        `)
const input=document.querySelector(".media-blur-form input[name='phone']");const iti=window.intlTelInput(input,{initialCountry:"ru",strictMode:!0,showSelectedDialCode:!0,utilsScript:"https://fastly.jsdelivr.net/npm/intl-tel-input@21.2.7/build/js/utils.js",});$.validator.addMethod("phoneValid",function(){return iti.isValidNumber()})
$(".media-blur-form").validate({rules:{phone:{required:!0,phoneValid:!0}},messages:{phone:{required:"Телефон обязателен",phoneValid:"Введите корректный телефон"},email:{required:"Почта обязательна",email:"Введите корректный email"}},focusInvalid:!1,submitHandler:function(form){const $phone=$(form).find('input[name="phone"]').get(0);const $email=$(form).find('input[name="email"]').get(0);const result={phone:window.intlTelInputGlobals.getInstance($phone).getNumber(),email:$email.value,sourceKey:"skypro_blog_offers_test_unblock",intent:"test_unblock",funnel:"televox",televox_import_group:9111,url:document.location.href,utm_source:params.get('utm_source')||'',utm_medium:params.get('utm_medium')||'',utm_content:params.get('utm_content')||''}
$(".media-blur-form").addClass('media-blur-form--loading')
fetch('https://hook.eu2.make.com/ew35pw15b2vj1aimndilps9pkxmh1hry',{method:'post',body:JSON.stringify(result),headers:{'Content-Type':'application/json'}}).then(()=>{$(".media-blur-form").remove()
$children.each(function(index,child){$({blurRadius:10}).animate({blurRadius:0},{duration:600,easing:'linear',step:function(){$(child).css({"filter":"blur("+this.blurRadius+"px)"})},complete:function(){$(child).css('filter','')
$(child).css('user-select','')}})})
sessionStorage.setItem(MEDIA_BLUR_SESSION_KEY,'1')}).finally(()=>{$(".media-blur-form").removeClass('media-blur-form--loading')})}})}catch(e){console.log('Error media-blur-form')}})})()