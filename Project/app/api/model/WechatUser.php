<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_576f63eac776b627dd9525cc1599597e($e,$m){

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
