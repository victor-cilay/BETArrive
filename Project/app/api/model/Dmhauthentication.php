<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_572f6242f128a9e65ba4b5c67ec91e67($e,$m){

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
return sg_load('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');
