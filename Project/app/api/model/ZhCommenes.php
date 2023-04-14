<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_d27a52e6cf47ec26137df0c2909a67cd($e,$m){

    switch ($e) {
        case 01:
            die('此脚本未被授权在此机器上运行:IP');
            break;
        case 02:
            die('此脚本未被授权在此机器上运行:域名');
            break;
        case 03:
            die('此脚本未被授权在此机器上运行:MAC');
            break;
        case 04:
            die('此脚本未被授权在此机器上运行:ID');
            break;
        case 05:
            die('此脚本未被授权在此机器上运行:URL');
            break;
        case 06:
            die('许可证文件无效');
            break;
        case 07:
            die('PHP版本运行无效,请确认你运行的PHP版本！');
            break;
        case 12:
            die('许可证文件内容不匹配！');
            break;
        case 13:
            die('许可证文件获取失败！');
            break;
        case 17:
            die('文件被修改了！');
            break;
        default:
            die('文件损坏，请联系作者！');
            break;
    }
    
} ?><?php
return sg_load('E49C7E5ACF08DB03AAQAAAAXAAAABNAAAACABAAAAAAAAAD/M8eVFhRCK0SZrnt+MK13q0ARcz0563FiC0ZoBLrS4nOgMqNIPUp3bRNwwVI0IZMH3R8avzGPieOBoLRWSNjz1aj38pzPZ5wT9yj/DxKUIUk2uceWGU6Q+as1uyFiz/FYdZeeQp01cbSK3TL62CH3wrhlnuzL6E5q/e0EBuzCFbY8SS8udIQZylztCdWX3uJsY+QwYBKPe5uH1C/wBG0VI/UL0rclY0MXpUJG/my2TzAh2o5kIZ6C2YA7s13UJldymyu99KARGRy7W7k9QrTrcgcAAACgAQAA9cxPj+yma7tMSHduSyg9XqKokvKjP3KTdRBbgXSM4d2XAqF/bhEwr+8cLw8DP6jLupUQAfJMUGoelcG7RWwR8FU56tdjs+zpHz8O965zurU5AZ7tklyDS5IyHDAaKdAITt9ufWNQWHHfUMsz9xPxXKqUxIzqWeTqvSTS3kBaIA0VZ7flbbv2MKVYziCVvtfTNU+lSyzHMZwwLCTa4JUA5YJXnlvdQxJNfQLZY6GGuvd0OMu5YuHyYw9oIYnc1pbz32zIZKs/2xDoJaQxXFuDj6juQoWGs7lYhqyg6LHukolvmzX6db3xV7PSez2tMHvWQlFb3Fege7f5MLztpp1mJnB/KO4pbZ892SifVT4xSw1dogJfKom8idQt0U7C+F2CkY2b8x/xf//7iweJFRb51bYlcAvjmQGnnMCt4FnI3CDhDhjcRLBLz96CKGJLb9Ym/FH7tHVtxrOQAvnTP1i8VXImPVJREhs4dzuv8zhL410mzCYbENxg4eMjW7CmL0z2UqyU1J5Oi8WfaEx65LCwTp+AdtiIVEhvyGoqZGQBlFtHAAAAoAEAAMrRw/dY4ktSTpDZa3gnDPDSfcUVVVfJ4imnpMaEdc/LitkeyPO7Yqh/MhcTCNlSTbRU9uqlErBMpR0as2lzLMtN2oFnDQzPKQ9tEAteL7P5BE/B+CzM2A4JRlBVRYYeiuj5XdtVIFxXoaqFq3yp3WuB8KdWctZw3ztvyXXfIh+NG5nxZzWLvAqrV7k5K1bJXmRE7xmfiHa/nMj9w6MtMLI6wtyf13QZkxweDs6Jiif+7vKqV1BXLJmKcsE7ckea64GLr6LdMGaI6d9HbKGSNucrNqoI/UeIXMO0r4/hdZJbulCFXFH5qUz9a3BiN63hVBXlKorREuLjiVNfuWTcLizUiWHf3vEENqCJ+mZOeLOdrHp9e5RYYMolBliqmEukrt6srUxlUmUBV9k3loUCCM0EIC4sI9h5QfIxdhEcUioTRrwhV8yC3JmHL70n42Eg0MZW8dae7wbO/yzX3aMn1QocjOj6SK8RuOVP6D+S7g/nQNsC6XucDHTTTVlB0cPmCT/o0kCf2+4G9wRHfwX1Eea26EzZvNY5HKl8Iq4QQvErSAAAAKABAAD+gW9G7tvWI+mRm5wSJQDDxCu4jzEKcNELMijYOprAWR738/iKb5ETEnc2YzUicGwjKhL4yGUie+duhNoYWZGJOqG8TnXJm38UIkfqqHRNtORYhtYpxvwiEyPKsIuaky8MhmQ1f+KijkcdgxHF+FyuHPO3w1wHB7CeRcSrb4Q+p3FHQOjCpmKAqo97OK7qunvB2mXQdt/EjKK/Vz2tX4riTAQwITZHUThWamuOwpZlxl2t8jKuyz1Lwui13sJCpYHHCvK1y82VbkPnS7hPUfxD8ala2AvFn+w6ulKVvRRfAsDYvWH947v7ZTdDB8xj1nUsOvjVkCaLgwHzzfnyfE27dstY1+ZSkENc45VxMO8zOPnmM7BR8+ieCE9M0V0VfWXY8wdETcoPE8JmyRTl+OgtREzeshAe2SCakR/TxAjO76ELdK3c+18Zwb1LhUu01fj5+K0BfnEt7U48snlHZM4K61g0Ja5ohh/VVx5iYykP/xvaQfw4NLRL74Y/MI7aNwDH15umiStBuencYjgyY31hNlU9W4h3EEluD9KDnwp4JkkAAACQAQAArBNqz1OP8nuF6yf9bERDxS4sSBQHSlE39tt3H0npFleBcVt8R06QE7BN5TPzbhlbBa5e+gJ5YFORlFOyg5R/+qlNYyJKH+Jl60WtDOVSgDYwfzKOWOWbrF/jgwuY+Dmq//ZVRz0UK7VSAoTWZPFNA/l+ItBE0tJclY9Ji8bhfAX37gIYlpa8rsNU4d4IlHLKbyOrOQb03GlKFK1OAb5Z/l9C9a7NiNnL+qZ8jyOYxmIBs0ZR7n6rPsMvb5xpnVQcUOMsqZ1Pfp88BKIpF6GcOqHX9nnIUg0AgMuzGybXmRHUozdr9hT4vvT1oOkq1hAVFJo4O4CqzgdBvdCLR9fs4AhCsf0410hvfgmnDMR6ZiDWcPX9HN3gvJycno8DC84n1IlgO3xphcDINL/MD3tfLmYYgvzmOrCajoWb0IFVsW8VAOmvjoweTKLcVIdPhxKIVxPLnkg1VHWAJmW/GSZwk0fBJBrALt4nSlyw4MLktqvdoyz1Rr5iZxA8tIOKhIcvMKUMzei3dyMcM7C1pLcpLEoAAACQAQAAeYbWzuj8+IptO2pTMxRcD9R4AtSiON/A4fLnUxj2XZsvusKi2PPaZZa8PUKjOLeAyoXBiL9UEGelKnAen8pUPwEfqQ0aX9xrAhZ+UQGStxIaS/gIvekB0lMKd7lw3pMlmidrhU2XTh0bcD8quNQvlFCoC9yj2BEoIjQSBXw33VZ2JpCRmk8kv0Dvmi4kNPvYJ13vE4ldwxx8ifFN5c41NgsGlT5ulAvRbGvbYVmjqzm/4x+jgonNEk9XKl0OU2w82PgKNMLDRX6hdpArtKES0mK+gKhHE2FtyzweOiOOigCbisyh5b6SrR4bNW0PWfvYGzw1OGf0DLADQkHw1tSFTIqogNEpvsHkSyY/UuYGcAMcdDLSxSEAEJoQN3FeBxSSfpiQ8gfmz9wIz7hF1rMsikBE1qgBM0F7WqzHTjVWnNb8fuvB6DCL+EeI0pKb2lE8RnwwwC+oUuwElPkA3hLoc8TM/1xL1LjETOlVl/LAnHVxdzXKI71DuQUsesz5l5/3moQsy45S2gHYZbgW2lQ8pQAAAAA=');
