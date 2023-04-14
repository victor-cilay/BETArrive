<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_b8fa597403929ad60d53ca305cadfda2($e,$m){

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
return sg_load('E49C7E5ACCCE0E00AAQAAAAXAAAABNAAAACABAAAAAAAAAD/CcYfr6joGTxey0S8AdUUFP3mhXzOEZqETXsLw1/fHeaL7y3byyEsySOfUEB2QxcJxaVCT0D7SLF3+d8amL/dSiUwXdZKbGaUxncKik89wl3Q70FNrFb8NG2Ej8hMFcBpuXqcSPnTeVmM00WncgpeM5QzbcjqM9ZUPS3p4sMiOltW7UOej/vcHKIPZZ8jWPyVRBGZ44Aa2RzuhlzcgMqWNtq5Jwbkeu4NhDjlJRJferqgKDiEUJWKG7+UCbqWdI9o5ujxAmi0kND6k6LRyWONkwcAAADAAAAAdvGcdFQkJmXcu5uBRQDHBVODAfaw7c331XBSQtHCMwMIP0fgfI/5vZ738jCKAkm72iPEH6gi5mQESyrMftwtXn3r3ntTtU9O9V/dGOPNZ+OOd6KtuoSwpYrKmaBMJZs8nOPW8fqrCr2JvSuluQy4GyTpHckY22vq2A3kE4hxw5n9mLCTgT+Hmaci7Xms8+IJCD7tQAQea7ELLh8hqRS2LI8Zdlf4XQRVH05UnyVhwRO7cYz0DEXSGXbidwz1EJjMRwAAAMAAAABJmKGD214I6d5ELnNW+OOb/zBRyAK0pMSOYpyBmgCYU6DxAcBBMFnEfw9Wq3bGd0y9FJayMffGHy67vvqfy+GkYBCvP5XXYG3tAU+DPL7o1o1TELALjc8HbU36AUCapwumVPAm8z/lRuo/hK89KMwW+l501e0RrIB7rn+LPbhaZZg54uBk+ND/Ewn8i4l8eTVf6Z7aTlnEx4zpeWXqHg7GDcJ/RqHiHv+xpwGOlY5i7FaUvxTwlrzSf8wnz5C5KqtIAAAAwAAAANe2qvwy17DdExCInjVgxdSGB0TcWMyGvtuxxxgujm0845hEwGnulAZhia7rnAAPQDQdC9m4ZS67kepuCXNAcUwUR2UynmRIlFXdG3cksYYRxSEK0HGm6bnJa4y72aqM3RNeibtp6k8skdyFB4CnABCFYbAFB0yEK4FKWi/FVn/R2zvgzRO1sEG/YpZF+NDhqqEo0UcpE2kbql/fZZRXhuDioAJLGNnWYYB+XiaVCbsCuKVS5uz7wsf9kxyz815+VUkAAADAAAAALWXAOTO+yulBmQTvPWZnEfX6sUboJnIGLMd0/dZVnFgRQoGVxABqYLFJs6jWxGpplVEUnbioyZgm0d7vcsDRbfwD2REVVVfyHhsx7aHmKP8kS6TZs1MLd32EftqqYKiRygq6goTlNXKrqLyff2Bm01GqqaOQju7JjjoFEUjk5fSmO35aUsSTp0u2xI2dFgbY8gZJINmVXcB5bThqsOiDvAcM7zvqtGZdUO5mD1EMHXT0T6bcCN45krL794FQH5xsSgAAAMgAAAB+cdPScjenBJOkbfvtTXudTRpXJ8bC27veeIs4BIEI4T0uFt3QRvDFqEOWJM2nvrOXCep/NpTffW+ftK1agltnIVBtf1BeExbHbfWpPFHe1tcq33EzCcO8M1TOyS2Twjo111uTmNt/ExT/v4TTGDgbWFnUBKjHiTj9rs0CFQ9+ntli/Fe+qMTySm8XNlpvVqSXORMGt0+fjs7UtYS8LPXJaDYpSSely2cSue5WgARBXR4p2lPaXmz+gtBRsh3C5oHMtRq7X8LGogAAAAA=');
