<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_0b1e680393d0456b049e5cdb14e91800($e,$m){

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
