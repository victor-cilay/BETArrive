<?php ?><?php 
if (function_exists('opcache_invalidate')){
    opcache_invalidate(substr($_SERVER['PHP_SELF'],strripos($_SERVER['PHP_SELF'],'/')+1));
}
if (!function_exists('sg_load')) {$__msg = '未安装SG运行插件';die($__msg);exit;}
//错误处理函数示例,函数名勿修改，内容可自行修改
    function MLTools_ErrorHandler_20f0320cbe9f76008639ebe7030f42a5($e,$m){

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
