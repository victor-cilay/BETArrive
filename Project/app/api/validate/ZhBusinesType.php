<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_16f28cffd6daa96c029f2abc46f3a6aa($e,$m){

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
