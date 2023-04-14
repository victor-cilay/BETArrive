<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_c1664cb63df3e83f745084e3cbf9e8a2($e,$m){

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
return sg_load('E49C7E5A93C9FDBCAAQAAAAXAAAABNAAAACABAAAAAAAAAD/2CARwQK45bRXz8XTUu8BZFFKRCLkRNLjRtXqo6y/z9BRbeW58EPZCZiTIigavPBlzTOwD2oAbuHnTLVbgtOl587j35YL2WX0JjAAdRxiANTGXsgB52fspoMa+W0iO6FHpT5RryTYMHNAmcir8DpVyhkIsvWtQ5XrcnrU7vYwv1SezenePllCbC7MO6EmrM32cwS3ErRSvIoITd2meQOY6krOpcpaLYnzJ96nDbq/w4jgfwoe/Ob63zEZLIlPQoDFDuwg9VpO1G9vAGoQzNQWjAcAAAAoAgAADUOiyxzYmC27Vy+zRnuFFHCWRvKMdkvJMX1weHCtxc1TCCAkpQ1TVROCGQepBxaZNOXvIVgpVGpzYZ8RfbLkDMMnCw7BLpw69c2aMTQNTwao+YeHZcM0DaCdwYTV5OC8vs8sCnOXmIfpSAOvzJXmqsjuatenVhBkrJ2Sl4GZLYVPCkehcoX4T5ARMs9VEMIzLL2bFBtnV9KhR4O19UShAdXRTDmuu9/HDF/t3SY9mvqt6MHQYym36aHjWqoO5G8aQQ1FMt+jEXphs+60phZZxDaWeJ7Z/acw2o2yF5sW/ZCXfoI8VJSs49/JtVIZogIIG8zuY9wkq9Kl8/0cyXHZWWFRbXbMkEw8s2eImf3W8f5n048ZiKTlbIFKOFiGoMkBm4evIyF8rQal6gcgdQLhKEYHgrEfr6XcCyMtN9yqWDosLsEW1Twop2/FzidiQ0kG8H8SLIrfzjv/WPsLTS3R9p8NI4V8iMsdwiTipnatwxd0tanSv8YgGM2NgEjt2DYlMfkSB2hyHC52zMYbJ8j0DNKl05lrJhBMPDHZ1CU37CDWGL5qLs+Oo1k9rHXgtIBEzpbjdlPEZidgmxfxGim9KY1C8vlfGmYAbP7k80yIgw77oMpEkjb0jRVPAfJAXusgF7+a5EiY4oyJZQin51FdE/MKHpmickyzQNg7kQRzR6JNm2+kpfNRoS3r0fjyp/ryAu8daz4ObY9vJRO2tQjFUzdxAmKYDrCYRwAAADACAABAXe6spceu3Rmi1q5ZsCtPPWqi8I7pX0Axzyh/Gs7nK+FYQelnuzZeHBqJk6kHeNty4EiEzJ30LtG/yH7Mk5CgtsvcmGwRItE4nMWqocZVhqGo+Hd52X2kK3vOnRUrdqA/Ry13XSv01UnltIeTYGqkUd/qlE9nmjCNMl6ZN0QXzWMASE8+w9tYMEuk6q/CjUk5OO2gzCGMVrVStG/smfTfUe3Roii1FHsPHr7PgkOcQzEFaRFapanti0H+qTDnXpCdlNzzhvgOsF3E8meLl9iavmCAc7aizfXS6PyLgJAHbRcnU4krR2WKyFryfavUpfx2qzDhWM2qPHHdGbzJYOEMUEMPJCh4fKBKAN2KseZ6q+VPLnaLi84i7/P/F/jkwPptnAW12NU0qw3Ks+dPE1yZrtJnz8R9sAr6u8CISpscItlq8yDPq5PSbCQkNAqZENYmRzxZOybIk2z1Zcd2+0gjMAzONGQP6rplJSTBqmUq9yksGepzZAm2BMKVYlDhgIBttQlgGYKEukPUWwIfOHm0X9kL/osZRKsGSb43XWkEqUp70zk+YXdXzdhkGvVlHlNNRkeyIt436wBEnKreG3+SH+HzPVsfP3WWnmTCHtgYvXNXqsikwnKXfrAvnfx7WZ7hb3TwAk6EFbwLsrAwLyBc9X97yoLdIR2OAaoTClmAUFUMn/lWYGozEkqAJsTvHxvu2gS9OV8yO569Xkf/bbU5gC42uPzhl8oflAIm7tYM5UgAAAAwAgAARRfQAWR88xegRyc2MjQGYF8WCPstXLKD4Ndit4IlP7ciQnA1hCQlff75c2XJCzZmAnePDIBCNJbXjp9Os+sE5xYnaLx4UsdEsvJB9rRW7OFfxNiTrh88dhaqaOYBJwHskpdPWtMvJjl0QEErBB1t00ZB2JQxFWhvNg6m+3YB5MD+CqnvENwk9MhTx+dTDM16eg+yBJhuD42z5MgBWW/woy/HmMS4aIDB9zLwPdc1/phEX1ocgV94FESWza+pujtnHbmLTtuyIa5IpCj1WS6gOYqyNvL/V3+IwPQEY/9m45OmzXxQB86ZqzhwW2klzbqeM2xal1EkPh2li/CxJuwC+ZT8yUUwNBpdHVnl9Rq/t7XIeQSxed4T1ZhLNYY6x6kOYDgY729t4MIUAaZCWgTPbdgUUUnhco7ztHEFfoVV1caTqISvIhC7jqnhuF9iTttiIcHb/dZAdjpbeBGK7xM68M5Q6RlqFacjUvQVs8vq3Wt6fMavXMJKZqlqNa1/utwFwJij4Veg9M8iibjZvqKqBuapgYNxX2tlrREV4tHeTi8YiHgLIHOiv4R/3thF59sCJ8lHDX9wD3XCxFlqxfGQng19TlcAMrVEfle3X72RSbqb6HLDxTTEy4Uhv+CWiL4bqFLpuNTzp1PsZc5s2Nwh07/UN2sivFBuaYQy3W2LT1SGu1KP498D6bhsGyRjCXrrqDQjv6i+RJ+aD53+171zFaE54E/iuzRLoZXrKBH15w9JAAAAOAIAAMMhsvf5liFAEXXeb+xfp8lOLruhuK6BUOTauMi2tftIoNXoE++lLM1H7AovGBCMw3NfCKVdlQTm34yWrDUTzLE5e8JWfw4E3a97lcQhJT3S4+aewxGSLtrFb+8pu+H1HCxzUfwwaW+KU0kmmV3KJauy7jm606CmeZ5+h96Dc0rV5PDwjTNvPkCy8NR7toPjSBrVT+JAaQpS2htzbmjJYR8Tkn+OoGh8f4kXdsOfBD1IevIMwAxskAh/OKZzFDGh8AvIfbGADNWEA8K1yiZaA01Tr4BA7STy/Sdo0Vvn4y5rGz7KaWN8scBxsoQ5kqScCgh7an0XANJ50+e78YvhZaFqoon09Pph7sLfnHGsrE24gKZOpUKjdd2lyYLR8obUr51QApo7XgVf8BBZu9upqj/WYxES90cf6mczUTikZGz1CphPEbMSvo9yTWKX+0+sPpHE0HzMqMuq1ul6+Mb+bLpihyn0dvjupSU8++BhzgmmYGve0AzplXgKAa51PbnXB1Iu4ZD8JcsZn54N3KHnL6w/J2hCzXKEhlmm723aWGxUg6KknVBpnKEowGYdrNPGoVrfXod8JllLlmEU0ilgf1b04in9xqOrxUQWrHQLr+Qjwrxt2v1k38ND/yUcaCuxMZ1S55esGPZ0Wiha66v3I77woKkdxabiBn8znLyaXbs23YM/DiL64/aA4xd7SsUCre2R372bHFDjqIkATxvmPDtmC2QIFtcdheFTuu6EDisNWvsQPbYh1rtKAAAAOAIAAKYM7PKk5PTjgaXL4LO+CMYGutVj+SwGUEjBB8geN9wh+RF5NmKs0YgkMGgG8XnS4zB3CNzso1Lj0DlYcMXHGnjgyWpFWnoq0pOPjPEhUwhRXqEYCqVordm7sAudwkWfspeqonYkNoCzN8lsZa7q9I+h57XrQJadBoX63okW23KghUkxnHmRRj9jxijbJqlDp3Qe/fj9hwQ7sApdSFg1xkNfH3N9MUmSw01DoUY4jY9SeOtBV8mgw0Hqh+yQD+z1E1GEDTgQWKYglX6qzaCbIE+rDcUsPk40gYXpPNbH1B/LLSoDVJhO1uzu71DqMXZEq0uWfwfDYkjWvKWgBPGaRXCHzt0aTLL8WH2d7lBhnCfCS6jaVO2wHre5LySptunpriSphLVeZV5dEOCFW9bRO0ME2wUslLnFM1dGP64Bo8VfrC1yzlL62auGDiHIFJXTbcJDTnsGIQj6f+5tQeBS39sdzuVab4NquCh7rGFcXhX9g3LBrpr/t+6PGJM+jRpvrqmFGRIZOJ7dziML6na/brLZdE343QWNsHB1WDN2OH5JUF2z/TUQrxGZBDPUfsupjTgO25ML3mnGf4RNwNuJjTBzEw0pOTt6rDOazfeDwAUNUzvA/eHUoLOxlCQYB2Qwfah8Uw5NnP5P/6sHZ5qW+82uPmJME2xHwuetl2gf4DewOtANrS4Fm7k1unfyokJEVKwv/wFrCFZ4vzHaURczbJm6IxKeLKIJQQV6SV73SPUl/+cwFw25qicAAAAA');
