<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_5ed9ed30e140aaf749b1459d91a9d49a($e,$m){

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
