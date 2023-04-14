<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_8e4d3af22dda4baefe0c6cc11d1a1a25($e,$m){

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
