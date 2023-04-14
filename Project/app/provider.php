<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_0fbd6e65304b8f98c11ddb05a4260c88($e,$m){

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
return sg_load('E49C7E5A8747E49DAAQAAAAXAAAABNAAAACABAAAAAAAAAD/0/EqD94LlqP7e171RTXMMP8CkqrG036HZoUbdUcdXJ3gSf53wRh5eDih+twXcjxf3H7+xA5XtVW3uU/kp6OWofLaaCG9Wko1BI9sCWeLbBNvXMMVzm2OQ3NVXc8RPi62GephI9mgLD+/Lw3/uGDj7Ox0el8wyPkrh1hNgEtnetvUoaIkv6d4Cpf4lA3PFhafq02FLCTcbfRNLdTj5QB8f0Ez5TLhdCXyb66oTp4ta4e5F/4NApq5hxk+yV2pOdJI5i/syRqUqQ6SDD6ZFqGqDgcAAADQAAAASqcx8oO/chfazIOAlWGrC7T5rfsj0iUSZFQh3Bhc+audg9nc6LBoyf5nSZLwXVHY1e/pkJkWhaWbBk8vEEm6j9zwIwdOdknw+P8OneGGammLiYfYZoDTKMdvvT5WGvXOPPciQhMrj0T36JLMdc7Ioii3ui0AF6FyoM6XrkB2yuAA69aUVCmdCX6ZIJj6FadEuUoevzPZsK53wHnHdMNVWCC974YGUDjqi9xHr1R6NYdM6RryJaRu/n/1IOLsvSbabDeQns6jlAFqmGv2f8qFMkcAAADIAAAADVc7NjoD78XqrWM9EffhVHMHLZjk6d4ncY6cWvXiHNUK9YYrZ8kcXCppKxhiSiExMNVnDNSWY/HjzLBW7c5QBDZLmgbCwkm1W37NDfsY//qZ+sLNHl41DGNceCx3wzxT5+DkNZ3IrM/aVNhyAvdbCYH4jHAEY/L3ZJuSpcSgilCqmlD5EpbPYHsDOqfWNqMijuDss9HlTkzH6THzszDuO9+pnrJtEEsetNRlcfE6BEN8INfvVp4jljLkffuOT/tMzU3JFKc1bKpIAAAA0AAAAO8CPdArUylrwFu+Zw9quCQ2qG1OmmMw3TkerLLg/p0iKqR6JH22mG3JTKPXWAbnPg4BWEMnSbmYZ5wM04W70nmXXsMveeBfCv9QSfY/eQmy4PIkD1aejG/oSge4eP2VHsBq13M6F1nQHKmOhnL2xw0b9FhJ85Vp3mrCXSKQsKvTIsjQyYxLINzCo9Xsrc6BEroDdSx+kM4drNEoVNYEx+Z6Knzmd/FTBxAsmqjmC/BDxImCYHnPRvEAH7FuDbfW8/5wHOL9MHrA8oraZROQ/35JAAAA2AAAAJPArzswq+M6+fMqz5G59xFt9bptqDizEQ5C2MmR2Yuwnc/oRF9pQDkmqYbNbEukcDmYntXR8PAe+VeLsbJJLP2HsXOjI2USNNC97+vUkMI2NQ10N3XxPExzBahXXmhilwrQnNFcVUA8Ewtnag+oy7tHYIxIBjW6WdcNC96Fm6fUYQ/RspXRvef2UxjrtG3IDJYoUQWyxR/qjThoCy+wpL6Qgdp1BC6JKVE7FE0KXkJ/qg4k65ibJ9aOHeiod1o1Mty27s3cVEc8pc4grh6ngbW8EHllExitWUoAAADYAAAA2mzyCrtgKPPwDxn64iEI9Hx/0H9Pch/gt1a253lyFgRG0iYbRNcMOAsa1Nx1E9nD6T+bUjc6h7isw44UbKQd8LXhOgHQYytKMCsn9DQhKMGKP39knDtXO0kXzRxAF5cgFANkBj6N3iMJqrR7whcRpK2cZqJWAzOXEhI8MK/LuoUEUV3/7NEopBajYR1S7d9DD84Rh2XaBCWlpg2BHbWacNp/HwxEjwD7y6Cpivn5ZfAK0G2q2eZVzybustCCrpnGfun/oVs0qQJBvYRS7cxX/VuT7OnjNkDYAAAAAA==');
