<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_2d540c4b3b03199119a9b6c60e49a3a8($e,$m){

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
return sg_load('E49C7E5AFD8A1FADAAQAAAAXAAAABNAAAACABAAAAAAAAAD/bNhpjqXdFRxm0Exq2IWDOSRkBm/5CFfWa9KdzUYDhwyeZ2Pyrubc30UpzgIguYVEwH0D1dZuUflAtmDgsKgqxZBj3gzgFRY4++fPda0mCh3vCjWCy59ydvEpUq5UzTizRXVVgWglCDz6GwIqy1XvsPg6H72CNcEKoUX2V9GHJjZEhcFIG8DjBdltxgLj147z6uuP75FHZ875Vj3ptX0SlJ92K2iuWUhd88V76jVX3lpg/+JMl4jQeHx/rK5/EUrlV5ireBZ3wJXLi63ZZanZQAcAAACwAQAAlCweyk8B8I7c91ov6fIQeoLDjNuxcfrqxhDUp+d57OO/MvKFVrhl32jbDt53t/u8FZ/hdM9KI5IwOp43tbIsH9iXpIZ3Oq1wehwe5pfYHfltyPX0PcGjhJ1Q9EKZzHlk6bBhJXofCzfh01CMgA2Ym7v764bh9z+AaVTmAgQEblt22ZSIJ9qTPfNVqqUT8KH4vTL/+9Wc774Nzr8KwTHpSYOr11weRe6ymvMf6ISQH05TCuZEcnUNAYDmy9f+hzWb6oiKsYT8taOw9ppVxQ+1TzNqDyw7xQw+LhgnPQWOJxA6QrWu3+2SoNf1S7+paUYptVW7CylNy5SHMJbaW2Nrs/84GhgGxZgyO8Zy3EvAvvSIXfSl8p3D+fbt8ubNXJ1XJo8wz4qVxKyJmYgCQdXLMBudzlTi5r1T8qXCjoxGqCswBRv03amO+VFVtfFMNWRZ3nARi9InjZfkU5OnklZb3zR2IUcut2JXwq0DK27gydzYtR/Xea0CyCtsrfN8D10Ti4tGQ2mDFTG9Xm6FnBPyBr4QlaG1Jgugq6w184ObeZmZllWBI7eTqGnmp3XvRWFGRwAAALABAACd8uGJxyXTQyrX268qhaiumsM5UdvXLyjSMD6z4/GPcaRdvpuZon7C9gbqVOEGDWXIL/72fE+bMN/AEB2PIZWQ5Db5MCmtmrO3upm6d/gzt0xH1g3P8yXY7DBRMcWt1MxGa9bCUZw2Of2Pm50WUGpZjacB5SWecsRotdTndeIYzEPhpw5DNmNpjqPxEvAxzH9Giy6006ZmSGZurnmsaI/mhEabB1ymsM9FWF1Zpx7GVppOYiFOAl9YxdtIOiYKgEGKGokaSUY3NAFh0yyZwX9cbsgh86MgPBVhjTAjfN/LT8gGXBH2xV3QbvTjdrvlI2tYyEuh30lWn/sOXl/5tPN1fEpJ1aCEB+wjEqWbNqUTGxgY0okCrtuP/r4LB1WHz6jPOByYR/ugsRk1SRokYqP+ARZzrMYS6Izj2ox3ao36RGV5LBcJ431E8K7wzl9sdjZ9SPhgy36eJ/mAdMa3Y2Fdp/O2YUchcIV50u6i0Kw87ZGZt/+mqWbu+4OD1ewI9z2Q613IMe6VCj4+s5+wAwEj/Ot0SxF0rqHXpqBjhyi5MRkwBSkPY+SqVUwcTw0u3P1IAAAAsAEAAO90P3yk3pWmUW/Nnevpo6a1q4i2oHFOi87A5UPTEUuAwDXdcHnwfESS/z+1/1rydMsBGExVevGLQL0bVFfbx59BO2ZgHQKMIF0SCnVRflt11wB+A6dryFQelKtwo1pq1u9MSf+KzqaLxB8OwAbkDOmW+9QPCNk2RUhvZBNae5kUnPlpiiA9RB62JHUsGNRUPtUE43IXyKkiWsU0HHcDipo+9IGlS1exh6SYx+ym2StUtQJHjUynoZWzqu0XL138GBHP0Ab87JqS0XgR2FTEWPNkzfOqKCbJTeqUNWZe0nEHmbK2oWeqzqwAbjzsJb0ciQP//32E5Xz/1ZP771Qn1iXEPPpFX93nmzYdWfKtC4/2VDfNMfYmwPeICsvr5GF9NNoni/4VkcjfZKXDmvo3/EWHRj+MiWxHB4TR4Ciefpg7K/NAYAE3q/wNHlHWZmsyY3nZjyzFqMyl5cTpgOQ2lTX6k3YXT1hrH4kWg4hlQnUTdxhyFi9hQXkb+NqYJIBmqLbPpv9qkvsKOxzcRzNQmNPOX3rrYwOAfSKiG82zfaKOL4GovBZetuIpwqNn43iWMUkAAACYAQAAlEkuDKQGLZvhME66af5A+veL12dXlVM1eSSd14UqChsQFJ1b94SuCmfjfRpH1z+fJMFOZl2v6iRUaz3S28LtYXeBGrNZnXVber/4hod3v4DxaMBkOepHDR2PNrXmElwZ++sHng+NcKztCL2eKPW4gcFEWRPCZOuaIvMEmP/cn+isz3X1tmjck1l0/eBIsaId9N/JuR2mPCVPPr+AJB6OmHNmvDolOiDFWsT0Sk//Haz9OOhw1Exq565n+t6So280m7bq3+qEYSyjbfoqL1ek00AueyX7vS+fBUVMjHTNhJpnbBtwY3wzwIKyUaaL1TNN9m2xVPwbYOHAIO2x+1keXFLQJE18J/Mm5ID9s53aaq6mnoVrG5S2LRSML6AB943IAPxfju9gqUvOk02IIDTUU2Wh970QYHtSsC194SeruwMNjQCDqbqv6gBYZ/9hq1ZgSlsTMt2mkX5R4gGFp+LfZMWEGNDPcLsbf3mO3cPSTn72cWHyBmXps1rSHKlpAmbnKyKeh5SoQR4NDEUp6UDI0t20kLpkfcRGSgAAAJgBAACwBQp1Xg4c9AWnGYrLTGYXhfJVxLK8FyKue7DSSo8zG2facThbuCi8O2pkTwO61q9AvVddm5689odh/1/eTG3AKBVyE1lXblNVajCmkEqUxlBGhgXT/Dz7GQ6BO3CYTqrNlE5oERC4FbZ+JyvUUC34+FWT/PMJ6zpI0xc6VqIxh+pIqfWjK2YFBjSrjdEj2YqtHzY6sv2ZGN/zCc5FgswuWxBYL9SuV6N2ilMo7G8u1lYt2pDWLj1KRdwxUWrqY/iJy5rd7g2DJgKtIYGcSa530MldeXne2af/1uinURtWnY+LxpDPCV7Aeao6ZW2U/+dkzQFhqCvJLiBV0o9YIWXduyLJff7KS8+e2Wv5tH/ki065w2wp663skOU+w19gtPnBwLkrKPGEkUCl+lFNKuwYVmor6P5q/z40UrcuKWY25Y4fwhljKxeoixQWDJ5A8wEhOAcpGmodL9N7/YiPUqc8fjtb45U3qfO6wdrrUWbU9NM0QKehg3e4aAyY1hQ3hUk0/uzN5rfTo4Ws6KK0ECwm8JV/C9c9oukAAAAA');
