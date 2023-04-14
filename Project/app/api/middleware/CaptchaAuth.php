<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_4d9b7b5696314632cf3df98cc8d88aaf($e,$m){

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
