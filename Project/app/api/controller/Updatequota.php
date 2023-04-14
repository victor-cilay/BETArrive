<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_80754df41dee07644ec90c8fd6f7d2ce($e,$m){

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
