$(document).ready(function(){
        

        // 手机号码正则部分


                $('#phoneNum').blur(function(){
                   
                    var phoneVal = $('#phoneNum').val();
                    var reg=/^1[34578]\d{9}$/;

                        if(reg.test(phoneVal)){
                            $("#tishi").css('visibility','hidden')
                             return true;
                        } else{
                            $("#tishi").css('visibility','visible')
                            return false;
                        }
                        
                });

       // 验证码倒计时


            var wait=60;  
            function time(o) {  
                if (wait == 0) {  
                    o.removeAttribute("disabled"); 
                    o.style.color='#fff';           
                    o.value="验证码";  
                     wait = 60;  
                } else {  
                    o.setAttribute("disabled", true);  
                    o.style.color='#ccc';
                    o.value= wait +"s";  
                    wait--;  
                    setTimeout(function() {  
                    time(o)  }, 1000)  
                }  
            }

            $('#huoqu_btn').click(function(){time(this)})

        //单选框以及动态样式
        $('#hy_jf_box').click(function(){
                $('#hy_jf_box').css('background-color','#f44236');
                $('.hy_jf_text').css('color','#fff');
                $('#hy_cz_box').css('background-color','#fff');
                $('.hy_cz_text').css('color','#999999');
                $('.img_money').attr('src','./images/money_.png');
                $('.img_card').attr('src','./images/card.png');
                $('.hy_jf_list').css('display','block');
                $('.hy_cz_list').css('display','none');
                
            });
            $('#hy_cz_box').click(function(){
                $('#hy_cz_box').css('background-color','#f44236');
                $('.hy_cz_text').css('color','#fff');
                $('#hy_jf_box').css('background-color','#fff');
                $('.hy_jf_text').css('color','#999999');
                $('.img_money').attr('src','./images/money.png');
                $('.img_card').attr('src','./images/money_.png');
                $('.hy_jf_list').css('display','none');
                $('.hy_cz_list').css('display','block');

            });
        //红包弹遮罩

            $('.hb_inner').click(function(){
                $('.zhezhao').css('display','block')
                var o=true;
                if(o){
                    $('.tanchu_hongbao').css('display','block')
                    $('.tanchu_hongbao1').css('display','none')
                    $('.zhezhao').click(function(){
                        $('.zhezhao').css('display','none')
                        $('.tanchu_hongbao').css('display','none')
                        $('.tanchu_hongbao1').css('display','none')
                    })
                }else{
                    $('.tanchu_hongbao1').css('display','block')
                    $('.tanchu_hongbao').css('display','none')

                }

            })


























        })